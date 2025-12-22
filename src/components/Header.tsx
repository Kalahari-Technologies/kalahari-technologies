import { Button } from "@/components/ui/button";
import kalahari from '@/assets/kalahari-white.png'
import { ArrowRight, MenuIcon } from "lucide-react";
import { useMediaQuery } from "@/hooks/user-media-query";

const Header = () => {
  const tabletBreakpoint = useMediaQuery("(max-width: 1074px)")
  return (
    <header className="z-50 bg-background/100 h-[13vh] backdrop-blur-md border-border font-aeonik overflow-x-hidden">
      <div className="container mx-auto md:px-[6.5rem] py-6">
        <div className="absolute bottom-0 w-full h-px -translate-x-1/2 border-0 opacity-10 left-1/2 bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgb(255,255,255)_52.07%,rgba(255,255,255,0)_100%)]" />
        <nav className="flex w-full items-center justify-between">
          <img src={kalahari} className="w-[110px] object-cover object-center" />
          
          
          <div className={`flex ${tabletBreakpoint? 'hidden': ''} items-center space-x-8 text-[15px]`}>
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
            <Button className={`bg-white group text-black font-medium hover:bg-white ${tabletBreakpoint? 'hidden': ''}`} size="sm">
              Start Build
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className={`font-medium font-geist text-sm ${tabletBreakpoint? 'hidden' : ''}`}>Log In</p>
            <MenuIcon className="min-[1074px]:hidden" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;