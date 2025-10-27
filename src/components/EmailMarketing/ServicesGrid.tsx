import Card  from "@/components/ui/Card";
import { 
  Layout, 
  Target, 
  BarChart3, 
  Workflow, 
  ListChecks, 
  Mail,
  PenTool,
  Clock
} from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Email Template Design",
    description: "Custom, responsive email templates that reflect your brand and engage your audience across all devices."
  },
  {
    icon: Target,
    title: "Campaign Management",
    description: "End-to-end campaign creation, scheduling, and management to reach your audience at the perfect time."
  },
  {
    icon: Workflow,
    title: "Marketing Automation",
    description: "Set up automated workflows for welcome series, abandoned carts, and customer nurturing sequences."
  },
  {
    icon: ListChecks,
    title: "List Management",
    description: "Strategic audience segmentation and list hygiene to maximize engagement and deliverability."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive tracking of opens, clicks, conversions, and ROI with actionable insights."
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling email copy and personalized content that drives action and builds relationships."
  },
  {
    icon: Mail,
    title: "A/B Testing",
    description: "Data-driven split testing to optimize subject lines, content, and CTAs for better results."
  },
  {
    icon: Clock,
    title: "Campaign Scheduling",
    description: "Strategic timing and frequency optimization to maximize open rates and engagement."
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Comprehensive Email Marketing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From strategy to execution, we handle every aspect of your email marketing campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 group cursor-pointer"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};