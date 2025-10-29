import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    initials: "SJ",
    content: "I was getting 5-10 scam calls daily. Since using this app, I haven't received a single one. It's been life-changing for my peace of mind!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Retired Teacher",
    initials: "MC",
    content: "The AI detection is incredibly accurate. It caught scams that even I thought were legitimate. Highly recommend for anyone tired of phone fraud.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Healthcare Professional",
    initials: "ER",
    content: "Easy to set up and works flawlessly. The detailed reports help me understand scam patterns. Worth every penny for the protection it provides.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users protected from scam calls
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-medium animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                
                <div className="flex items-center gap-3 pt-4 border-t">
                  <Avatar className="h-10 w-10 bg-gradient-hero">
                    <AvatarFallback className="bg-transparent text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
