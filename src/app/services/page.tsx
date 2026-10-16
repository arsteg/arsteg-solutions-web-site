import { PageIntro, ServiceList, NextStep } from "@/components/Editorial";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Software development services",
  "Custom software, mobile apps, desktop applications and dedicated or hourly developers. Explore ARSTEG’s engineering services and find the right engagement.",
  "/services",
);
export default function Page() {
  return (
    <>
      <PageIntro label="OUR SERVICES" title="Engineering for the way you work.">
        From a new application to an established system that needs attention.
        Find the expertise and working model that fit your next step.
      </PageIntro>
      <section className="section">
        <div className="container">
          <ServiceList all />
        </div>
      </section>
      <NextStep />
    </>
  );
}
