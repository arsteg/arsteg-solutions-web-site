import { PageIntro, Enquiry } from "@/components/Editorial";
import { pageMetadata } from "@/lib/seo";
import { site, formattedAddress, whatsappUrl } from "@/config/site";
export const metadata = pageMetadata(
  "Discuss your requirements",
  "Tell ARSTEG about the developers, team or project you need. Contact our Gurugram team by enquiry form, email, phone or WhatsApp.",
  "/contact",
);
export default function Page() {
  return (
    <>
      <PageIntro label="CONTACT ARSTEG" title="Let’s find the right next step.">
        Tell us the skills or role you need, the team you want to extend, or the
        project you want delivered — along with any timing constraints. You do
        not need a finished specification to start a conversation.
      </PageIntro>
      <Enquiry />
      <section className="section">
        <div className="container detail-grid">
          <h2>Prefer a conversation?</h2>
          <div>
            <p>{formattedAddress()}</p>
            <p>
              <a
                className="text-link"
                href="https://www.google.com/maps?q=28.4152475,76.9631498"
                target="_blank"
                rel="noopener noreferrer"
              >
                View our office on Google Maps ↗
              </a>
            </p>
            <a
              className="button"
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us on WhatsApp ↗
            </a>
            {site.flags.calendlyUrl && (
              <p style={{ marginTop: 20 }}>
                <a
                  className="text-link"
                  href={site.flags.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Choose a call time ↗
                </a>
              </p>
            )}
          </div>
        </div>
        <div className="container" style={{ marginTop: 40 }}>
          <iframe
            src="https://www.google.com/maps?q=28.4152475,76.9631498&z=15&output=embed"
            title="ARSTEG Solutions office in Gurugram"
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </section>
    </>
  );
}
