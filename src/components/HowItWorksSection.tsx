import { CircleDot } from "lucide-react";
import SectionHeader from "./section-header";

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Submit Your Legal Needs",
      subtitle: "All chatbots interpreting (2 mins)",
      description: "Tell us what you need: SAFE notes, contracts, compliance docs, term sheets, SaaS-specific questions (e.g., funding stage, jurisdiction)",
      bulletPoints: [
        "Upload Existing Docs Optional for review",
        "Answer Simple Questions"
      ]
    },
    {
      title: "AI Generates Your Documents",
      subtitle: "Smart Drafting - Powered by Claude 3.5 Legal Database",
      description: "Trained on 30,000+ startup legal templates inc. YC-based law-approved",
      bulletPoints: [
        "Human Lawyer Review Optional add-on for critical docs"
      ]
    },
    {
      title: "Submit Download & Executive",
      subtitle: "Expert Templates - Customizable clause in plain English",
      description: "117% Suggest startup legal structure (e.g., Policy Lawyer Access (Paid plans)"
    }
  ];

  return (
    <section className="">
      <div className="">
        <SectionHeader
          title="How it works"
          subtitle="Get investor-ready legal docs in 3 simple steps"
          position="left"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <CircleDot className="w-12 h-12 text-primary mx-auto mb-4" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>

                <p className="text-primary font-medium mb-4">
                  {step.subtitle}
                </p>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>

                {step.bulletPoints && (
                  <div className="space-y-2">
                    {step.bulletPoints.map((point, pointIndex) => (
                      <p key={pointIndex} className="text-muted-foreground text-sm">
                        • {point}
                      </p>
                    ))}
                  </div>
                )}

                {index === 2 && (
                  <div className="mt-6">
                    <div className="text-foreground font-semibold mb-2">Output Formats:</div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>• Google Docs</p>
                      <p>• PDF</p>
                      <p>• Backing-ready</p>
                    </div>
                  </div>
                )}

                {index === 0 && (
                  <div className="mt-6">
                    <div className="text-foreground font-semibold mb-2">Example Topics We Cover:</div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>• Incorporation (SAFE*, Term Sheets)</p>
                      <p>• Hiring & Employment Contracts (NDA)</p>
                      <p>• Compliance (GDPR, Delaware C-Corp)</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;