import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kalahari-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-kalahari-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Empowering Africa's Digital Future</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building Africa's{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Digital Future
            </span>
            <br />
            One Startup at a Time
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Kalahari Technologies empowers small businesses and startups across Africa with 
            cutting-edge IT solutions in FinTech, AI, Blockchain, and EdTech.
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
          
          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
              Trusted by African Startups
            </p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-muted-foreground font-semibold">FinTech Solutions</div>
              <div className="text-muted-foreground font-semibold">AI Development</div>
              <div className="text-muted-foreground font-semibold">Blockchain Tech</div>
              <div className="text-muted-foreground font-semibold">EdTech Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;