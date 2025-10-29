import { Download, ScanLine, ShieldCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download & Install",
    description: "Get started in seconds by downloading our app or integrating with your phone system.",
  },
  {
    number: "02",
    icon: ScanLine,
    title: "AI Scans Calls",
    description: "Our AI technology scans all incoming calls in real-time for known scam patterns.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Instant Protection",
    description: "Scam calls are automatically blocked or flagged with instant alerts to keep you safe.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "View Insights",
    description: "Access your dashboard to view blocked calls and adjust protection settings anytime.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            How{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to complete scam call protection
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-hero opacity-20" 
               style={{ width: 'calc(100% - 8rem)', margin: '0 4rem' }} />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-xl rounded-full" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-card border-2 border-primary/20 shadow-medium">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-hero text-xs font-bold text-white shadow-soft">
                    {step.number}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
