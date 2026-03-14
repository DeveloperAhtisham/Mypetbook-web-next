import Link from "next/link";
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const footerLinks = {
  Platform: [
    { label: "Features", path: "/features" },
    { label: "Marketplace", path: "/marketplace" },
    { label: "Community", path: "/community" },
    { label: "Pricing", path: "/pricing" },
  ],
  "For Partners": [
    { label: "For Veterinarians", path: "/for-vets" },
    { label: "For Pet Shops", path: "/for-pet-shops" },
    { label: "Become a Partner", path: "/contact" },
  ],
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Privacy Policy", path: "#" },
    { label: "Terms of Service", path: "#" },
  ],
};

const Footer = () => (
  <footer className="gradient-hero text-white">
    <div className="container mx-auto section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image src={logo} alt="MyPetBook" width={40} height={40} className="rounded-lg" />
            <span className="font-heading font-bold text-xl">MyPetBook</span>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
            Your pet&apos;s complete digital home. Connecting pet owners, veterinarians, and pet businesses in one caring ecosystem.
          </p>
          <div className="space-y-2 text-sm text-white/60">
            <div className="flex items-center gap-2"><Mail size={14} /> hello@mypetbook.com</div>
            <div className="flex items-center gap-2"><Phone size={14} /> +1 (555) 123-4567</div>
            <div className="flex items-center gap-2"><MapPin size={14} /> San Francisco, CA</div>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/90">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.path} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-14 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-heading font-bold text-lg">Stay in the loop</h4>
          <p className="text-white/60 text-sm">Get pet care tips and platform updates in your inbox.</p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm flex-1 md:w-64 focus:outline-none focus:border-white/40"
          />
          <button className="btn-coral text-sm py-2.5">Subscribe</button>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/40">
        <p>© 2026 MyPetBook. All rights reserved.</p>
        <p className="flex items-center gap-1 mt-2 md:mt-0">
          Made with <Heart size={14} className="text-coral" /> for pets everywhere
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
