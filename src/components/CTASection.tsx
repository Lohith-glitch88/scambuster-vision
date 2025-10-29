import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-feature opacity-30" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4">
            <Shield className="h-8 w-8" />
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to Stop{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Scam Calls
            </span>{" "}
            for Good?
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Join over 500,000 users who trust Scam Call Detection to protect them 
            from fraudulent calls every single day.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row justify-center pt-4">
            <Button variant="hero" size="lg" className="group">
              Download Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bg-card">
              View Pricing
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            Free 14-day trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
