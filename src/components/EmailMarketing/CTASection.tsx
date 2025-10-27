import  Button  from "@/components/ui/Button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-10" />
      
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6 shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Email Marketing?
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us discuss how our email marketing services can help you achieve your business goals. Get a free consultation and strategy session today.
          </p>

          {/* CTA Buttons */}
           <Link href="/contact">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="group shadow-lg hover:shadow-xl">
              
              Schedule Free Consultation
              
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button  className="border-2">
              View Case Studies
            </Button> */}
          </div>
</Link>
          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by businesses worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              {/* <div className="text-2xl font-bold">500+</div>
              <div className="w-px h-8 bg-border" />
              <div className="text-sm">Active Clients</div>
              <div className="w-px h-8 bg-border" />
              <div className="text-2xl font-bold">10M+</div>
              <div className="w-px h-8 bg-border" />
              <div className="text-sm">Emails Sent Monthly</div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};