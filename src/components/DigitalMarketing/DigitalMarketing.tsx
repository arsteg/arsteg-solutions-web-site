import { BenefitsSection } from "./BenefitsSection";
import { CaseStudiesSection } from "./CaseStudiesSection";
import { CTASection } from "./CTASection";
import { DigitalMarketingHero } from "./DigitalMarketingHero";
import { PlatformsSection } from "./PlatformsSection";
import { ProcessSection } from "./ProcessSection";
import { ServicesGrid } from "./ServicesGrid";
import { StatsSection } from "./StatsSection";

const DigitalMarketing = () => {
  return (
    <div id="digitalmarketing" className="min-h-screen">
      <DigitalMarketingHero />
      <ServicesGrid />
      <PlatformsSection />
      <BenefitsSection />
      <ProcessSection />
      <StatsSection />
      <CaseStudiesSection />
      <CTASection />
    </div>
  );
};

export default DigitalMarketing;