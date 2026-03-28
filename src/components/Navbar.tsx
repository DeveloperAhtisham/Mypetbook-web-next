"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "For Vets", path: "/for-vets" },
  { label: "For Pet Shops", path: "/for-pet-shops" },
  { label: "Community", path: "/community" },
  // { label: "Marketplace", path: "/marketplace" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="MyPetBook" width={60} height={60} className="rounded-lg" />
          <span className={`font-heading font-bold text-xl ${scrolled ? "text-primary" : "text-primary-foreground"}`}>
            MyPetBook
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                pathname === link.path
                  ? scrolled ? "bg-primary/10 text-primary" : "bg-white/20 text-white"
                  : scrolled ? "text-foreground hover:bg-muted" : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {/* <Link href="/auth" className={`btn-outline-primary text-sm py-2 px-5 ${!scrolled && "border-white text-white hover:bg-white hover:text-primary"}`}>
            Login
          </Link> */}
          {/* <Link href="/auth?tab=signup" className="btn-coral text-sm py-2 px-5">
            Get Started
          </Link> */}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-primary" : "text-white"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === link.path ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border flex gap-2">
            <Link href="/auth" className="btn-outline-primary text-sm py-2 px-5 flex-1 text-center">Login</Link>
            <Link href="/auth?tab=signup" className="btn-coral text-sm py-2 px-5 flex-1 text-center">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
