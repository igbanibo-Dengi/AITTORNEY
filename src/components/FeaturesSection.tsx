import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "./section-header";
import WaitlistModal from "./waitlist-modal";

const FeaturesSection = () => {
  return (
    <section className="">
      <SectionHeader
        title="Aittorney for Startups & SMEs"
        subtitle="AI-Powered Legal Protection at Startup Speed"
        position="left"
      />
      <div className="mx-auto border-y py-10 xl:py-0">
        <div className="flex flex-col xl:flex-row items-center gap-16 relative h-full container max-w-6xl">
          <div className="xl:w-1/3 h-full">
            <div className="h-full xl:min-h-[360px] flex flex-col gap-4 items-center xl:items-start justify-center xl:border-r">
              <div className="h-12 w-12">
                <img
                  src="/lovable-uploads/core.svg"
                  alt="icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Core Features</h3>
              <WaitlistModal
                triggerText="See Sample Docs"
                triggerSize="lg"
              // onSuccess={(data) => console.log("Success!", data)}
              // onError={(error) => console.log("Error:", error)}
              />
            </div>
          </div>
          <div className="xl:w-2/3">
            <div className="grid xl:grid-cols-2 gap-6">
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