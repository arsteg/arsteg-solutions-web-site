// Compute an honest "N min read" label from article content, so the estimate
// always reflects the real length instead of a hardcoded (and inflated) value.
// 220 wpm is a common average for adult reading of informational text.
const WORDS_PER_MINUTE = 220;

type Block = { text?: string } | string | null | undefined;

export function readingTime(content: Block[] | string | undefined): string {
  let text = "";
  if (typeof content === "string") {
    text = content;
  } else if (Array.isArray(content)) {
    text = content
      .map((b) => (typeof b === "string" ? b : b?.text ?? ""))
      .join(" ");
  }
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
