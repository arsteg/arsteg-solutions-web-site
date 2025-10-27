import { TrendingUp, Users, Mail, Target } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Average ROI Increase",
    description: "Clients see 3x return on their email marketing investment"
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Clients",
    description: "Businesses trust us with their email campaigns"
  },
  {
    icon: Mail,
    value: "10M+",
    label: "Emails Delivered",
    description: "Successfully delivered emails every month"
  },
  {
    icon: Target,
    value: "95%",
    label: "Delivery Rate",
    description: "Industry-leading email deliverability"
  }
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver measurable success for our clients through strategic email marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xl font-semibold mb-2 text-foreground">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};