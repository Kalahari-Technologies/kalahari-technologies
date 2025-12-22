import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import kalahariTech from '@/assets/kalahari-tech.png';

const Footer = () => {
  return (
    <footer className="overflow-x-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2 mb-6">
            <img src={kalahariTech} className="w-[130px] aspect-[2097/1000] mb-1.5 ml-1 scale-x-[1.75] scale-y-[1.72] object-cover" />
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed text-base font-aeonik">
              Empowering African businesses with cutting-edge IT solutions in Fintech, AI, 
              Blockchain, and Education Technology. Building the digital future of Africa, one startup at a time.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={()=>window.open("https://www.instagram.com/kalahari_technologies/")} size="icon" className="hover:text-black hover:bg-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button onClick={()=>window.open("https://www.linkedin.com/company/kalahari-tech/?viewAsMember=true")} variant="ghost" size="icon" className="hover:text-black hover:bg-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-black hover:bg-white">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="font-aeonik">
            <h4 className="font-semibold mb-6 font-geist">SERVICES</h4>
            <ul className="space-y-3 text-base">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Fintech Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Artificial Intelligence
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Blockchain Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Education Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Mobile Apps
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="font-aeonik">
            <h4 className="text-lg font-semibold mb-6 font-geist">CONTACT</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>kalaharitechcompany@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+234 (0) 90 4901 4676</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Kalahari Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
