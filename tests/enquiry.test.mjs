import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";
const require = createRequire(import.meta.url);
const source = ts.transpileModule(
  fs.readFileSync("src/app/api/send-email/route.ts", "utf8"),
  {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  },
).outputText;
function handler({ stored = false, emailed = false } = {}) {
  const output = {};
  const calls = { store: 0, email: 0 };
  const sandbox = {
    exports: output,
    process: {
      env: emailed
        ? {
            POSTMARK_API_KEY: "test",
            POSTMARK_SENDER_EMAIL: "test@example.test",
            POSTMARK_RECEIVER_EMAIL: "test@example.test",
          }
        : {},
    },
    console: { error() {} },
    require(id) {
      if (id === "@/lib/supabase")
        return {
          supabase: {
            from() {
              return {
                async insert() {
                  calls.store++;
                  return { error: stored ? null : { message: "offline" } };
                },
              };
            },
          },
        };
      if (id === "postmark")
        return {
          ServerClient: class {
            async sendEmail() {
              calls.email++;
            }
          },
        };
      return require(id);
    },
  };
  vm.runInNewContext(source, sandbox);
  return { post: output.POST, calls };
}
const valid = {
  name: "Test Buyer",
  email: "test@example.test",
  message: "A sufficiently detailed project brief.",
  service: "mobile-app",
};
const request = (body) =>
  new Request("http://localhost/api/send-email", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
test("failed submission and identical retry both fail honestly", async () => {
  const { post } = handler();
  assert.equal((await post(request(valid))).status, 502);
  assert.equal((await post(request(valid))).status, 502);
});
test("accepted storage enables exact duplicate acknowledgement", async () => {
  const { post, calls } = handler({ stored: true });
  assert.equal((await post(request(valid))).status, 200);
  assert.equal((await post(request(valid))).status, 200);
  assert.equal(calls.store, 1);
  assert.equal(
    (await post(request({ ...valid, company: "Different company" }))).status,
    200,
  );
  assert.equal(calls.store, 2);
});
test("email acceptance works when storage fails", async () => {
  const { post, calls } = handler({ emailed: true });
  const result = await (await post(request(valid))).json();
  assert.equal(result.ok, true);
  assert.equal(result.emailed, true);
  assert.equal(result.stored, false);
  assert.equal(calls.email, 1);
});
test("malformed, invalid and honeypot submissions never reach integrations", async () => {
  const { post, calls } = handler({ stored: true });
  assert.equal((await post(request(null))).status, 400);
  assert.equal((await post(request([]))).status, 400);
  assert.equal((await post(request({}))).status, 422);
  assert.equal(
    (await post(request({ ...valid, hp_field: "bot" }))).status,
    422,
  );
  assert.equal(
    (await post(request({ ...valid, company: "x".repeat(501) }))).status,
    422,
  );
  assert.equal(calls.store, 0);
});
test("rate limiting rejects the sixth attempt", async () => {
  const { post } = handler();
  for (let i = 0; i < 5; i++)
    assert.equal((await post(request(valid))).status, 502);
  assert.equal((await post(request(valid))).status, 429);
});
