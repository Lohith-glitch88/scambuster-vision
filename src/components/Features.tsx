import { Shield, Zap, History, Settings, Bell, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "AI-Powered Detection",
    description: "Advanced machine learning algorithms identify scam patterns with 99.9% accuracy in real-time.",
  },
  {
    icon: Zap,
    title: "Real-Time Blocking",
    description: "Instant alerts and automatic blocking of known scam numbers before your phone even rings.",
  },
  {
    icon: Settings,
    title: "Customizable Settings",
    description: "Take full control with customizable blocking rules, whitelist trusted contacts, and more.",
  },
  {
    icon: History,
    title: "History Reports",
    description: "Access detailed insights and reports of all blocked calls with comprehensive scam analysis.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get notified about potential scams with actionable insights and safety recommendations.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays private. We use end-to-end encryption and never share your information.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Scam Call Detection
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive protection powered by cutting-edge AI technology
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-medium animate-scale-in bg-gradient-feature"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
