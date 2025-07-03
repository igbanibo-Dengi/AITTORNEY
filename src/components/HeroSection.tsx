import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/afae4f7d-01f9-41ce-9f8d-c1b101106650.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
          Legal Docs for Startups & SMEs,<br />
          <span className="text-primary">Drafted by AI in Minutes</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Get startup-friendly contracts, SAFE notes, and compliance docs—AI-generated,<br />
          lawyer-reviewed, at 80% lower cost.
        </p>
        
        {/* Email signup form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-6">
          <Input 
            type="email" 
            placeholder="Enter email" 
            className="flex-1 h-12 bg-background/50 border-border text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
          />
          <Button className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground px-8 whitespace-nowrap font-medium">
            Get Started
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground">
          First 30-Day Free Lock Review
        </p>
      </div>
    </section>
  );
};

export default HeroSection;