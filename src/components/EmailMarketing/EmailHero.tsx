import  Button  from "@/components/ui/Button";
import { ArrowRight, Mail, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

export const EmailHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Professional Email Marketing Services</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Transform Your Business with Expert Email Marketing
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We leverage industry-leading platforms like Mailchimp, Klaviyo, HubSpot, and ActiveCampaign to deliver targeted email campaigns that drive real results for your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link href="/contact">
    <Button className="group shadow-lg hover:shadow-xl transition-all">
      Get Started
      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Button>
  </Link>
              <Link href="/services">
    <Button className="border-2">
      View Our Services
    </Button>
  </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">95%</div>
              <div className="text-sm text-muted-foreground">Delivery Rate</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-3">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">3X</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};