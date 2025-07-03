import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this service real?",
      answer: "Absolutely. All docs are court-tested templates and comply with Delaware/YC standards. Optional bar-certified review available."
    },
    {
      question: "Who is the founders, for founders and SMEs:",
      answers: [
        "• Co-founding agreements (equity splits, vesting)",
        "• 24/7 HR support line and forms",
        "• Optional HDHP lawyer access for $900+ matters and beyond."
      ]
    },
    {
      question: "What is involved in lawyer available review?",
      answers: [
        "Our 'Reviewing Package' (RP) includes:",
        "• Human-aided deal review process",
        "• 1-hour lawyer consultation",
        "• Review negotiation playbook"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground mb-4">
            Here are some frequently asked questions:
          </p>
          <h2 className="text-4xl font-bold text-foreground">
            Everything You Need To Know
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg bg-card"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-foreground hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">A</span>
                    </div>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pl-12">
                    {faq.answer && (
                      <p className="text-muted-foreground mb-4">{faq.answer}</p>
                    )}
                    {faq.answers && (
                      <div className="space-y-2">
                        {faq.answers.map((answer, answerIndex) => (
                          <p key={answerIndex} className="text-muted-foreground">
                            {answer}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;