import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Lightbulb, ArrowRight } from "lucide-react";
import { useMediaQuery } from "@/hooks/user-media-query";

const About = () => {
    const mobileBreakpoint = useMediaQuery("(max-width: 640px)")
  
  return (
    <>
      <section id="about" className="py-[4.5rem] lg:py-20 bg-transparent relative overflow-x-hidden">
        <div className="sm:max-w-screen-sm md:max-w-screen-md g:max-w-screen-lg xl:max-w-screen-xl container relative">
          {/* Company Overview */}
          <div className="flex flex-col justify-center mb-10 md:mb-20 md:mt-12 items-center mx-auto max-w-3xl text-center relative z-10 !mb-12 md:!mb-16">
              <div className="flex flex-col">
                  <div className="flex flex-col">
                      <div className="text-xs leading-6 tracking-[1px] mb-5 uppercase font-geist-mono">
                          <span>About Kalahari</span>
                      </div>
                      <h2 className="font-aeonik leading-snug lg:leading-[1.25] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance]">Transforming Africa Through
                        <span className="bg-gradient-to-r from-kalahari-brown-tertiary to-kalahari-dark bg-clip-text text-transparent">{" Innovations"}</span>
                      </h2>
                  </div>
                  <p className="mt-4 lg:mt-2 leading-[1.60] lg:text-xl [text-wrap:balance] [white-space:inherit] block font-normal w-full">Kalahari Tech is an IT solutions company dedicated to building innovative solutions tailored for African businesses.<br/>We focus on delivering secure, scalable, and future-ready solutions that help startups and enterprises harness technology for sustainable impact.</p>
              
              </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kalahari-orange/20 to-kalahari-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-kalahari-orange" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To empower small businesses and startups in Africa with cutting-edge IT solutions 
                  that drive growth, efficiency, and global competitiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kalahari-purple/20 to-kalahari-purple/10 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-kalahari-purple" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  To become one of Africa's leading providers of innovative digital solutions—transforming 
                  businesses through innovation while setting new standards 
                  of excellence, integrity, and speed.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 hover:shadow-glow transition-all duration-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kalahari-blue/20 to-kalahari-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-kalahari-blue" />
                </div>
                <CardTitle className="text-2xl">Our Approach</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  We believe in innovation that serves a purpose. Every solution we build is designed 
                  to address real challenges faced by African businesses, with a focus on scalability, 
                  security, and user experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <div className="max-w-full overflow-hidden relative w-full sm:overflow-visible">
        <hr className="border-0 bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0.00)_0%,_#FFF_52.07%,_rgba(255,_255,_255,_0.00)_100%)] z-[1] opacity-[0.15] relative h-[1px] w-full max-w-[1006px] mx-auto" />
        <section id="cta" className="py-18 lg:py-20 bg-transparent !pb-28 !pt-[110px] md:!pb-36 md:!pt-[132px]">
          <div className="container relative z-10 sm:px-0">
            <div className="max-w-[760px] w-fit space-y-6 lg:space-y-10 mx-auto">
              <div className="relative">
                <h3 className="relative text-5xl font-light xl:leading-none leading-tight mx-auto sm:leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center text-balance">
                  <span className="inline text-white/70">Your competitive edge </span>
                  <span className="text-white highlight">starts here</span>
                </h3>
              </div>
              <p className="text-center text-base sm:text-lg leading-relaxed md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto font-aeonik">
                Let's discuss how Kalahari Tech can help your startup or business 
                leverage cutting-edge technology for sustainable growth.
              </p>
              <div className="justify-center lg:pt-4 flex items-center flex-wrap gap-x-6 gap-y-4">
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
      </div>
      
    </>
  );
};

export default About;