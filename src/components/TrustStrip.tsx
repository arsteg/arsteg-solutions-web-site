import Image from "next/image";
import {
  clients,
  reviewProfiles,
  certifications,
  hasClients,
  hasReviewProfiles,
  hasCertifications,
} from "@/data/evidence";

/**
 * Compact, verified-only social proof.
 *
 * Renders ONLY real, approved evidence (client logos, review profiles,
 * certifications). While those datasets are empty — which they are until the
 * business supplies approved assets — this renders nothing at all. It never
 * invents placeholders.
 */
export default function TrustStrip() {
  if (!hasClients && !hasReviewProfiles && !hasCertifications) return null;

  return (
    <section className="border-y border-gray-100 bg-white py-10">
      <div className="container">
        {hasClients && (
          <>
            <p className="mb-6 text-center text-sm font-medium text-gray-500">
              Trusted by teams we&apos;ve built for
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {clients.map((c) => (
                <Image
                  key={c.name}
                  src={c.logo}
                  alt={c.name}
                  width={120}
                  height={36}
                  className="h-8 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          </>
        )}

        {(hasReviewProfiles || hasCertifications) && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {reviewProfiles.map((r) => (
              <a
                key={r.platform}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300"
              >
                {r.platform}
                {typeof r.rating === "number" && <span className="text-gray-900">{r.rating.toFixed(1)}★</span>}
                {typeof r.reviewCount === "number" && <span className="text-gray-400">({r.reviewCount})</span>}
              </a>
            ))}
            {certifications.map((c) => (
              <a
                key={c.name}
                href={c.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-200 hover:ring-gray-300"
              >
                {c.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
