import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SectionHeader from "./section-header";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mark R.",
      role: "Founder, Stealth (YC S23)",
      content: "Aittorney saved our SAFE note in 20 minutes—instead of 5 days our $1K lawyer quoted. The AI-generated custom terms and sent to investors.",
      avatar: "/lovable-uploads/470ed967-686c-44df-bffd-d4f8cd933390.png",
      initials: "MH"
    },
    {
      name: "Priya T.",
      role: "CEO, Biotech AI",
      content: "Hired 5 engineers across 3 countries using Aittorney's employment contracts. Zero legal delays. Built for global confidence.",
      avatar: "/lovable-uploads/470ed967-686c-44df-bffd-d4f8cd933390.png",
      initials: "PT"
    },
    {
      name: "Alicia K.",
      role: "CPO, LegalBrew",
      content: "Used the $99 lawyer review add-on for our SaaS & SLA team. Spotted a key provision error and costs via AI. Confidence.",
      avatar: "/lovable-uploads/470ed967-686c-44df-bffd-d4f8cd933390.png",
      initials: "AK"
    }
  ];

  return (
    <section className="border-b">
      <SectionHeader
        title="What Is Said About AIttorney"
        subtitle="500+ startups saved $3.8M+ in legal fees last quarter"
        position="left"
        className="border-b"
      />

      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" xl:py-12 xl:border-r xl:last:border-r-0">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6 mx-auto w-fit">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed bg-card p-4 border rounded-md">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;