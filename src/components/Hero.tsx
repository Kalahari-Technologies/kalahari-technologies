import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/user-media-query";
import { ArrowRight, Sparkles } from "lucide-react";
import Spline from '@splinetool/react-spline';



const Hero = () => {
  const mobileBreakpoint = useMediaQuery("(max-width: 640px)")
  return (
    <section className="min-h-[87vh] max-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 w-full h-full">
        <Spline className="size-full object-cover hidden z-10 md:block"  scene={"https://prod.spline.design/F2JNHiJZFV4dnJDB/scene.splinecode"}  />
        <div className="w-1/5 h-1/6 bg-black absolute z-20 bottom-0 right-0" />
      </div>
      
      <div className="container mx-auto px-6 py-8 sm:py-20 relative z-10 select-none">
        <div className="flex flex-col text-center max-w-4xl mx-auto max-md:justify-center">
          
          <h1 className="leading-tight text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6  font-aeonik">
            Building Africa's{" "}
            <span className="bg-gradient-to-r from-kalahari-brown-primary via-kalahari-brown-secondary to-kalahari-dark bg-clip-text text-transparent">
              Digital Future
            </span>
            <br />
            One Startup at a Time
          </h1>
          
          <p className="text-base sm:text-lg leading-relaxed md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto font-aeonik">
            Kalahari Tech empowers startups and organizations across Africa with cutting-edge solutions
            aiming to drive growth, innovation, efficiency, and global competitiveness
          </p>
          
          <div className="flex flex-row items-center justify-center gap-6">
            <Button size={mobileBreakpoint? "default" : "lg"} className="group text-black bg-white hover:bg-white">
              Build Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size={mobileBreakpoint? "default" :"lg"} className="group text-white bg-transparent hover:bg-transparent">
              Schedule Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Hero;