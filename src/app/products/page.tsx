import { PageIntro, ProductList, NextStep } from "@/components/Editorial";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  "Our products: EffortlessHRM, Insight & Promo",
  "Explore ARSTEG’s software products for HR operations, GST compliance and sales outreach, and discuss a product of your own.",
  "/products",
);
export default function Page() {
  return (
    <>
      <PageIntro
        label="THE ARSTEG PRODUCT PORTFOLIO"
        title="Business problems. Product thinking."
      >
        Explore the software products we build and operate. Each addresses a
        distinct workflow, from employee administration to compliance and
        customer outreach.
      </PageIntro>
      <section className="section product-section">
        <div className="container">
          <ProductList detailed />
        </div>
      </section>
      <NextStep />
    </>
  );
}
