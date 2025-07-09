import SectionHeader from "./section-header"

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Submit Your Legal Needs",
      subtitle: "AI Chatbot Interview (2 mins)",
      bulletPoints: [
        "Tell us what you need: SAFE notes, contracts, compliance docs",
        "Startup-specific questions (e.g., funding stage, jurisdiction)",
        "Upload Existing Docs (Optional for review/ redlining)",
      ],
      bottomSection: {
        title: "Example Topics We Cover:",
        items: [
          "Fundraising (SAFEs, Term Sheets)",
          "Hiring (Employment Contracts, NDAs)",
          "Compliance (GDPR, Delaware C-Corp)",
        ],
      },
    },
    {
      title: "AI Generates Your Documents",
      subtitle: "Instant Drafting - Powered by Claude 3.5 Legal Database",
      bulletPoints: [
        "Trained on 10,000+ startup legal templates YC, Techstars-approved",
        "Human Lawyer Review (Optional add-on for $99/doc)",
      ],
      bottomSection: {
        title: "Output Formats:",
        items: ["📄 Google Docs", "📄 PDF", "✍️ DocuSign-ready"],
      },
    },
    {
      title: "Submit Download & Executive",
      subtitle: "Editable Templates - Customize clauses in plain English",
      bulletPoints: ["24/7 Support - AI Legal Assistant (Chat)", "Priority Lawyer Access (Paid plans)"],
    },
  ]

  return (
    <section id="how-it-works" className="">
      <SectionHeader
        title="How it works"
        subtitle="Get investor-ready legal docs in 3 simple steps"
        position="left"
      />

      <div className="px-6 border-y">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-3 gap-8 pt-6 xl:pt-0">
          {steps.map((step, index) => (
            <div key={index} className="text-left xl:border-r last:border-r-0 xl:pr-10 xl:py-12 pb-6 xl:pb-6">
              {/* Blue star icon */}
              <div className="h-12 w-12 mb-6">
                <img
                  src="/lovable-uploads/work.svg"
                  alt="icon"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>

              {/* Subtitle */}
              <p className="text-gray-300 font-medium mb-6 text-sm">{step.subtitle}</p>

              {/* Bullet points */}
              <div className="space-y-3 mb-8">
                {step.bulletPoints.map((point, pointIndex) => (
                  <p key={pointIndex} className="text-gray-400 text-sm leading-relaxed">
                    • {point}
                  </p>
                ))}
              </div>

              {/* Bottom section */}
              {step.bottomSection && (
                <div className="mt-6">
                  <div className="text-white font-semibold mb-3 text-sm">{step.bottomSection.title}</div>
                  <div className="space-y-2">
                    {step.bottomSection.items.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-gray-400 text-sm">
                        • {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
