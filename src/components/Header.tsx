import { Button } from "@/components/ui/button";
import kalahari from '@/assets/kalahari-white.png'

const Header = () => {
  return (
    <header className="z-50 bg-background/100 backdrop-blur-md border-border font-aeonik">
      <div className="container mx-auto px-[6.5rem] py-6">
        <div className="absolute bottom-0 w-full h-px -translate-x-1/2 border-0 opacity-10 left-1/2 bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgb(255,255,255)_52.07%,rgba(255,255,255,0)_100%)]" />
        <nav className="flex w-full items-center justify-between">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <img src={kalahari} className="scale-x-[3.2] scale-y-[3]" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-[15px]">
            <a href="#products" className="text-white hover:text-foreground transition-smooth">
              Products
            </a>
            <a href="#services" className="text-white hover:text-foreground transition-smooth">
              Services
            </a>
            <a href="#portfolio" className="text-white hover:text-foreground transition-smooth">
              Portfolio
            </a>
            <a href="#customers" className="text-white hover:text-foreground transition-smooth">
              Customers
            </a>
            <a href="#careers" className="text-white hover:text-foreground transition-smooth">
              Careers
            </a>
            <a href="#contact" className="text-white hover:text-foreground transition-smooth">
              Resources
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="heroOutline" size="sm">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;