import  Card  from "@/components/ui/Card";
import { 
  DollarSign, 
  Users, 
  Globe, 
  Zap, 
  Target,
  TrendingUp
} from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Cost-Effective Marketing",
    description: "Achieve better ROI compared to traditional marketing channels with minimal investment and maximum reach."
  },
  {
    icon: TrendingUp,
    title: "Drive Revenue Growth",
    description: "Convert subscribers into customers with targeted campaigns that guide them through your sales funnel."
  },
  {
    icon: Target,
    title: "Precise Targeting",
    description: "Reach the right audience at the right time with advanced segmentation and personalization."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connect with millions of potential customers worldwide instantly, breaking geographical barriers."
  },
  {
    icon: Zap,
    title: "Instant Impact",
    description: "See results within hours of sending campaigns with real-time tracking and immediate customer actions."
  },
  {
    icon: Users,
    title: "Build Customer Loyalty",
    description: "Nurture long-term relationships through consistent, valuable communication that keeps your brand top-of-mind."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose Email Marketing?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Email marketing delivers unmatched results for businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};