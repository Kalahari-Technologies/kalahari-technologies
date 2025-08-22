import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Brain, Link2, GraduationCap, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "FinTech Solutions",
      description: "Revolutionary financial technology platforms that transform how African businesses handle payments, lending, and digital banking.",
      features: ["Mobile Payment Systems", "Digital Wallets", "Microfinance Platforms", "Blockchain Payments"],
      color: "kalahari-brown-secondary"
    },
    {
      icon: Brain,
      title: "AI Development",
      description: "Cutting-edge artificial intelligence solutions that automate processes and provide intelligent insights for business growth.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      color: "kalahari-brown-primary"
    },
    {
      icon: Link2,
      title: "Blockchain Technology",
      description: "Secure, transparent blockchain solutions for supply chain, identity verification, and decentralized applications.",
      features: ["Smart Contracts", "Supply Chain Tracking", "Digital Identity", "DeFi Applications"],
      color: "kalahari-brown-tertiary"
    },
    {
      icon: GraduationCap,
      title: "EdTech Platforms",
      description: "Educational technology solutions that make quality learning accessible across Africa through innovative digital platforms.",
      features: ["Learning Management Systems", "Virtual Classrooms", "Mobile Learning Apps", "Assessment Tools"],
      color: "kalahari-dark"
    }
  ];

  return (
    <section id="services" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive IT Solutions for{" "}
            <span className="bg-gradient-to-r from-kalahari-brown-primary to-kalahari-brown-secondary bg-clip-text text-transparent">
              Modern Africa
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From startups to enterprises, we deliver world-class technology solutions 
            tailored for the African market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-500 group border-border/50 hover:border-primary/50">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-${service.color}/20 to-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 text-${service.color}`} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="group p-0 h-auto text-primary hover:text-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;