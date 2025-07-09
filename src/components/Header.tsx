import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import WaitlistModal from "./waitlist-modal"

const Header = () => {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="container mx-auto px-12 py-4 w-[90%] xl:w-[70%] bg-background/60 backdrop-blur-sm border border-border/50 rounded-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/logo.svg" alt="Aiitorney" className="w-full h-full object-cover" />
            <span className="text-xl font-semibold text-foreground">AITTORNEY</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            {/* <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a> */}
          </nav>

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <WaitlistModal
              triggerText="login"
            />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-6">
                <a
                  href="#how-it-works"
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </a>
                <a href="#resources" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </a>
                <a href="#pricing" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
                <div className="pt-4 border-t border-border">
                  <WaitlistModal
                    triggerText="login"
                  />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
