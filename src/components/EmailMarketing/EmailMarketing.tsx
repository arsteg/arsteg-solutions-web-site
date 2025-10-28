import { BenefitsSection } from "./BenefitsSection";
import { CTASection } from "./CTASection";
import { EmailHero } from "./EmailHero";
import { PlatformsSection } from "./PlatformsSection";
import { ProcessSection } from "./ProcessSection";
import { ServicesGrid } from "./ServicesGrid";
import { StatsSection } from "./StatsSection";

const EmailMarketing = () => {
  return (
    <div id="emailmarketing" className="min-h-screen">
      <EmailHero />
      <ServicesGrid />
      <PlatformsSection />
      <BenefitsSection />
      <ProcessSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default EmailMarketing;