import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative paw prints */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🐾</div>
        <div className="absolute top-32 right-20 text-4xl">🐾</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🐾</div>
        <div className="absolute bottom-10 right-10 text-3xl">🐾</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">MyPetB</span>
              <div className="flex space-x-1">
                <div className="w-6 h-6 bg-pet-orange rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🐾</span>
                </div>
                <div className="w-6 h-6 bg-pet-blue rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🐾</span>
                </div>
              </div>
              <span className="text-2xl font-bold">k</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your ultimate pet community app connecting pet owners, veterinary doctors, and pet shopkeepers in one beautiful platform.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary hover:bg-primary-foreground hover:text-primary">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary hover:bg-primary-foreground hover:text-primary">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-primary-foreground/20 text-primary hover:bg-primary-foreground hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Features", "About", "Directory", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Users</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Pet Owners</li>
              <li className="text-primary-foreground/80">Veterinary Doctors</li>
              <li className="text-primary-foreground/80">Pet Shopkeepers</li>
              <li className="text-primary-foreground/80">Community</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-pet-orange" />
                <span className="text-primary-foreground/80">support@mypetbook.app</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pet-blue" />
                <span className="text-primary-foreground/80">+92 317 7691170</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-pet-green" />
                <span className="text-primary-foreground/80">103-F Block, Johar Town, Lahore, Pakistan.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 MyPetBook. Made with <Heart className="w-4 h-4 inline text-pet-orange" /> for pets.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
