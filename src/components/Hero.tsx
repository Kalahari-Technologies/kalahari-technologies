import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";


const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kalahari-brown-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-kalahari-brown-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-[4.25rem] font-bold mb-6 leading-tight font-aeonik">
            Building Africa's{" "}
            <span className="bg-gradient-to-r from-kalahari-brown-secondary to-kalahari-brown-tertiary bg-clip-text text-transparent">
              Digital Future
            </span>
            <br />
            One Startup at a Time
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-aeonik">
            Kalahari Tech empowers small businesses and startups across Africa with 
            cutting-edge IT solutions in Fintech, Artificial Intelligence, Blockchain, and Education Technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl">
              View Our Work
            </Button>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Hero;