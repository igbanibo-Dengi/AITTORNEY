import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-4">
            Join the future of Startup Law!
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            500+ startups trusted us pre-launch – claim your spot!
          </h2>
          <h3 className="text-2xl font-bold text-primary mb-12">
            Get 30% Off Now
          </h3>
        </div>
        
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input 
                placeholder="Full name"
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
              <Input 
                placeholder="Company Name"
                className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <Input 
              type="email"
              placeholder="Email"
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
            
            <Input 
              placeholder="Company Stage"
              className="bg-muted border-border text-foreground placeholder:text-muted-foreground"
            />
            
            <Select>
              <SelectTrigger className="bg-muted border-border text-foreground">
                <SelectValue placeholder="Pre-seed/Seed/Series A" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="pre-seed">Pre-seed</SelectItem>
                <SelectItem value="seed">Seed</SelectItem>
                <SelectItem value="series-a">Series A</SelectItem>
                <SelectItem value="series-b">Series B+</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
              Join Waitlist
            </Button>
          </form>
          
          <div className="flex items-center justify-center space-x-4 mt-8 text-sm text-muted-foreground">
            <span>Terms & Conditions</span>
            <span>•</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;