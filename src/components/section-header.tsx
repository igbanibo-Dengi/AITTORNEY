import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  subtext?: string
  position?: "left" | "center" | "right"
  className?: string
}

const SectionHeader = ({ title, subtitle, subtext, position = "left", className }: SectionHeaderProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  const alignment = {
    center: "mx-auto",
  }

  return (
    <section className={cn("bg-[#1A1A1A] text-white py-16", className)}>
      <div className="container max-w-7xl mx-auto">
        <div className={cn("space-y-2 w-full flex flex-col", alignmentClasses[position])}>
          {subtitle && <p className={cn("text-white text-[11px] p-2 bg-[#333333] rounded-md w-fit font-medium tracking-wide capitalize text-center", alignment[position])}>{subtitle}</p>}
          <h2 className="text-4xl md:text-[42px] font-medium leading-tight">{title}</h2>
          <p className="text-primary text-4xl font-semibold">{subtext}</p>
        </div>
      </div>
    </section>
  )
}

export default SectionHeader
