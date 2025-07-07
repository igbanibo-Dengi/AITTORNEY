import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  position?: "left" | "center" | "right"
  className?: string
}

const SectionHeader = ({ title, subtitle, position = "left", className }: SectionHeaderProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <section className={cn("bg-[#1A1A1A] text-white py-16", className)}>
      <div className="container max-w-[1200px] mx-auto">
        <div className={cn("space-y-2", alignmentClasses[position])}>
          {subtitle && <p className="text-white text-xs p-2 bg-[#333333] rounded-md w-fit font-medium tracking-wide capitalize">{subtitle}</p>}
          <h2 className="text-4xl md:text-[45px] font-med leading-tight">{title}</h2>
        </div>
      </div>
    </section>
  )
}

export default SectionHeader
