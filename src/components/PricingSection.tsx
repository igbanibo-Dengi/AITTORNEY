import { Button } from "@/components/ui/button"
import SectionHeader from "./section-header"

const PricingSection = () => {
  const pricingData = [
    {
      plan: "Pay-Per-Doc",
      // price: "$99-$249 per doc",
      perfectFor: "Founders with one-time needs",
      savings: "80% vs law firms",
    },
    {
      plan: "Legal Shield (Subscription)",
      // price: "$179 per month",
      perfectFor: "Startups with monthly legal needs",
      savings: "Unlimited basic docs + 1 premium review",
    },
    {
      plan: "Human Lawyer Review",
      // price: "$99 per doc",
      perfectFor: "Critical contracts (investor docs, etc.)",
      savings: "75% discount",
    },
  ]

  return (
    <section className="">
      <SectionHeader
        title="Simple Pricing for Startups & SMEs"
        subtitle="Legal protection shouldn't break the bank"
        position="left"
        className="border-b"
      />

      <div className="container max-w-6xl mx-auto px-6 mt-16">
        {/* Pricing table */}
        <div className="overflow-x-auto -mx-6 px-6">
          <div className="min-w-[800px]">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-8 pb-6 border-b border-gray-700 mb-8">
              <div className="text-lg font-semibold text-white min-w-[150px]">Plans</div>
              {/* <div className="text-lg font-semibold text-white min-w-[150px]">Price</div> */}
              <div className="text-lg font-semibold text-white min-w-[200px]">Perfect For</div>
              <div className="text-lg font-semibold text-white min-w-[200px]">Savings</div>
            </div>

            {/* Table rows */}
            <div className="space-y-0">
              {pricingData.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-8 py-6 border-b border-gray-800 last:border-b-0">
                  <div className="text-white font-medium min-w-[150px]">{item.plan}</div>
                  {/* <div className="text-gray-300 min-w-[150px]">{item.price}</div> */}
                  <div className="text-gray-400 min-w-[200px]">{item.perfectFor}</div>
                  <div className="text-gray-400 min-w-[200px]">{item.savings}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator for mobile */}
          <div className="flex justify-center mt-4 md:hidden">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-6 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-xs ml-3">Swipe to see more</p>
          </div>
        </div>
      </div>

      {/* Launch special section */}
      <div className="py-12 text-center border-y container">
        <div className="inline-block bg-[#333333] px-4 py-2 rounded-md mb-6">
          <p className=" font-medium text-sm">Launch Special!</p>
        </div>

        <h3 className="text-2xl md:text-4xl font-semibold text-white mb-8 leading-tight max-w-6xl mx-auto">
          First 200 signups lock in <span className="text-blue-500 font-bold">30% off forever</span> + free compliance audit.
        </h3>

        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg"
        >
          Get Early Access
        </Button>
      </div>
    </section>
  )
}

export default PricingSection
