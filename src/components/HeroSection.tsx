import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20">
      {/* Grid background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Legal Docs for Startups & SMEs,<br />
          <span className="text-primary">Drafted by AI in Minutes</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Join us on this visionary expedition into the heart of AI.
        </p>
        
        <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
          Get startup-friendly contracts, SAFE notes, and compliance docs—AI-generated,<br />
          lawyer-reviewed, at 80% lower cost.
        </p>
        
        {/* Email signup form */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-6">
          <Input 
            type="email" 
            placeholder="Enter email" 
            className="flex-1 bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 whitespace-nowrap">
            Join Waitlist
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