import  Card  from "@/components/ui/Card";

const platforms = [
  {
    name: "Mailchimp",
    description: "Perfect for small to medium businesses, offering intuitive automation and detailed analytics.",
    color: "from-yellow-500/20 to-yellow-600/20"
  },
  {
    name: "Klaviyo",
    description: "E-commerce powerhouse with advanced segmentation and personalization capabilities.",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    name: "HubSpot",
    description: "All-in-one CRM and email marketing solution for seamless customer relationship management.",
    color: "from-orange-500/20 to-orange-600/20"
  },
  {
    name: "ActiveCampaign",
    description: "Sophisticated automation platform ideal for complex customer journeys and workflows.",
    color: "from-blue-500/20 to-blue-600/20"
  }
];

export const PlatformsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powered by Industry-Leading Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're certified experts in the most powerful email marketing tools, ensuring you get the best results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-primary">{platform.name[0]}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {platform.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm text-center leading-relaxed">
                  {platform.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Not sure which platform is right for you? <span className="text-primary font-semibold cursor-pointer hover:underline">Let us help you choose</span>
          </p>
        </div>
      </div>
    </section>
  );
};