import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left side - Branding and CTA */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <p className="text-primary text-sm font-medium">
                AI-Powered Legal Protection at Startup Speed!
              </p>
              <h2 className="text-4xl font-bold text-foreground">
                Aittorney for Startups & SMEs
              </h2>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              See Sample Docs
            </Button>
          </div>
          
          {/* Right side - Core Features */}
          <div className="lg:w-2/3">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">Core Features</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    Instant Legal Document Generation
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Draft founder agreements, SAFE notes, and compliance docs in minutes—not days.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    Startup-Specialized AI
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Trained on YC, Techstars, and 10,000+ startup legal templates.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    Human Lawyer Review
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Add bar-certified attorney review for critical docs at $99/flat.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-6 space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">
                    24/7 Legal Assistant
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Draft founder agreements, SAFE notes, and compliance docs in minutes—not days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;