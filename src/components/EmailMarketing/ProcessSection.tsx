import  Card  from "@/components/ui/Card";

const steps = [
  {
    number: "01",
    title: "Strategy & Planning",
    description: "We analyze your business goals, target audience, and competitors to create a customized email marketing strategy."
  },
  {
    number: "02",
    title: "List Building & Segmentation",
    description: "Build and organize your subscriber lists with advanced segmentation for targeted, personalized campaigns."
  },
  {
    number: "03",
    title: "Template Design & Content",
    description: "Create stunning, mobile-responsive templates and compelling content that resonates with your audience."
  },
  {
    number: "04",
    title: "Automation Setup",
    description: "Implement automated workflows for welcome series, nurture campaigns, and behavioral triggers."
  },
  {
    number: "05",
    title: "Campaign Execution",
    description: "Launch campaigns at optimal times with proper testing, scheduling, and quality assurance."
  },
  {
    number: "06",
    title: "Analytics & Optimization",
    description: "Monitor performance metrics, analyze results, and continuously optimize for better outcomes."
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to email marketing success, from strategy to execution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <span className="text-6xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};