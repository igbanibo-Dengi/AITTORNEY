import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeader from "./section-header";

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
    <section className="">
      <SectionHeader
        title="Everything You Need To know"
        subtitle="Here are some frequently asked questions"
        position="center"
        className="border-b"
      />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="last:border-b-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-foreground hover:no-underline">
                  <div className="flex items-center space-x-4">
                    <span className="text-primary text-sm font-bold">Q.</span>
                    <span className="font-medium text-sm md:text-base text-primary">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="">
                    {faq.answer && (
                      <span className="flex gap-4">
                        <span className="text-sm font-bold">A:</span>
                        <p className="text-muted-foreground mb-4">{faq.answer}</p>
                      </span>
                    )}
                    {faq.answers && (
                      <span className="flex gap-4">
                        <span className="text-sm font-bold">A:</span>
                        <div className="space-y-2">
                          {faq.answers.map((answer, answerIndex) => (
                            <p key={answerIndex} className="text-muted-foreground">
                              {answer}
                            </p>
                          ))}
                        </div>
                      </span>
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