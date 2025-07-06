import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 bg-red-400 w-[70%]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-semibold text-foreground">AITTORNEY</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </a>
              <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
                Resources
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
            </nav>
          </div>

          <Button variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;