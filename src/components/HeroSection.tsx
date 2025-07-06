import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyStage: "",
    needHelp: ""
  });

  const handleGetStarted = () => {
    if (email) {
      setIsDialogOpen(true);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", { email, ...formData });
    setIsDialogOpen(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/bg-image.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight max-w-4xl mx-auto">
          Legal Docs for Startups & SMEs,<br />
          <span className="">Drafted by AI in Minutes</span>
        </h1>

        <p>Join us on this visionary expedition into the heart of AI.</p>

        <p className="text-lg md:text-xl font-semibold mb-12 max-w-3xl mx-auto">
          Get startup-friendly contracts, SAFE notes, and compliance docs—AI-generated,<br />
          lawyer-reviewed, at 80% lower cost.
        </p>

        {/* Email signup form */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto mb-6">
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 bg-background/50 border-border text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
          />
          <Button
            onClick={handleGetStarted}
            className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground px-8 whitespace-nowrap font-medium"
          >
            Join Waitlist
          </Button>
          <p className="text-sm text-muted-foreground  absolute -bottom-10 left-0">
            First 50 Get Free Dock Review
          </p>
        </div>
      </div>

      {/* Signup Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader className="text-center space-y-3">
            <div className="text-xs text-muted-foreground uppercase tracking-wide">
              Join the Future of StartUp Law
            </div>
            <DialogTitle className="text-xl font-bold text-foreground">
              500+ startups trusted us pre-launch – claim your spot!
            </DialogTitle>
            <div className="text-primary text-lg font-semibold">
              Get 30% Off Now
            </div>
          </DialogHeader>

          <div className="space-y-4 mt-6">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Name*</label>
                <Input
                  placeholder="Full Legal Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="bg-muted border-border text-foreground h-10"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Company Name*</label>
                <Input
                  placeholder="Company Legal Name"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="bg-muted border-border text-foreground h-10"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Email*</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-muted border-border text-foreground h-10"
              />
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Company Stage</label>
              <Select value={formData.companyStage} onValueChange={(value) => setFormData({ ...formData, companyStage: value })}>
                <SelectTrigger className="bg-muted border-border text-foreground h-10">
                  <SelectValue placeholder="Pre-Seed/Series-Seed (Raise-5)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                  <SelectItem value="seed">Seed</SelectItem>
                  <SelectItem value="series-a">Series A</SelectItem>
                  <SelectItem value="series-b">Series B</SelectItem>
                  <SelectItem value="later-stage">Later Stage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs text-muted-foreground mb-1 block">What do need help with?</label>
              <Select value={formData.needHelp} onValueChange={(value) => setFormData({ ...formData, needHelp: value })}>
                <SelectTrigger className="bg-muted border-border text-foreground h-10">
                  <SelectValue placeholder="I need help with..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contracts">Contracts</SelectItem>
                  <SelectItem value="safe-notes">SAFE Notes</SelectItem>
                  <SelectItem value="compliance">Compliance</SelectItem>
                  <SelectItem value="incorporation">Incorporation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 font-medium mt-6"
            >
              Join Waitlist
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;