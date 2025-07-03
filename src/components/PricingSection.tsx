import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const pricingData = [
    {
      plan: "Pay-Per-Doc",
      price: "$99-$249 per doc",
      perfectFor: "Founders with one-time needs",
      savings: "80% vs law firms"
    },
    {
      plan: "Legal Shield (Subscription)",
      price: "$99 per month",
      perfectFor: "Startups with monthly legal needs",
      savings: "Unlimited basic docs + 1 premium review"
    },
    {
      plan: "Human Lawyer Review",
      price: "$99 per doc",
      perfectFor: "Critical contracts (investor docs, etc.)",
      savings: "75% discount"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">
            Legal protection shouldn't break the bank.
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-16">
            Simple Pricing for Startups & SMEs
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Pricing table header */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="text-lg font-semibold text-foreground">Plans</div>
            <div className="text-lg font-semibold text-foreground">Price</div>
            <div className="text-lg font-semibold text-foreground">Perfect For</div>
            <div className="text-lg font-semibold text-foreground">Savings</div>
          </div>
          
          {/* Pricing rows */}
          <div className="space-y-6">
            {pricingData.map((item, index) => (
              <div key={index} className="grid grid-cols-4 gap-6 py-6 border-b border-border">
                <div className="text-foreground font-medium">{item.plan}</div>
                <div className="text-foreground">{item.price}</div>
                <div className="text-muted-foreground">{item.perfectFor}</div>
                <div className="text-muted-foreground">{item.savings}</div>
              </div>
            ))}
          </div>
          
          {/* Launch special */}
          <div className="mt-16 text-center">
            <p className="text-primary font-semibold mb-4">Launch Special!</p>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              First 200 signups lock in <span className="text-primary">30% off forever</span> + free compliance audit.
            </h3>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;