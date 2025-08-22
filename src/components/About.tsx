import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Lightbulb, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        {/* Company Overview */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">About Kalahari</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Transforming Africa Through{" "}
            <span className="gradient-accent bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Kalahari Technologies is an IT solutions company dedicated to building websites, mobile apps, 
            platforms, and SaaS products tailored for African businesses. We focus on delivering secure, 
            scalable, and future-ready solutions that help startups and enterprises harness technology 
            for sustainable impact.
          </p>
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
                To become Africa's leading provider of innovative digital solutions—transforming 
                businesses through FinTech, AI, Blockchain, and EdTech while setting new standards 
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how Kalahari Technologies can help your startup or business 
              leverage cutting-edge technology for sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;