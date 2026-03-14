"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import {
  Package, ClipboardList, Percent, BarChart3, Megaphone, Star,
  ArrowRight, Check
} from "lucide-react";
const benefits = [
  { icon: Package, title: "Product Listings", desc: "Showcase your entire inventory with beautiful product cards, categories, and detailed descriptions." },
  { icon: ClipboardList, title: "Order Management", desc: "Track orders from placement to delivery. Manage inventory levels and get low-stock alerts." },
  { icon: Percent, title: "Promotions & Discounts", desc: "Create discount codes, flash sales, and special offers to attract new customers and boost sales." },
  { icon: BarChart3, title: "Shop Analytics", desc: "Understand your customers with detailed sales reports, traffic analytics, and conversion insights." },
  { icon: Megaphone, title: "Advertise Your Shop", desc: "Promote your products to thousands of pet owners with targeted advertising within the platform." },
  { icon: Star, title: "Trusted Reviews", desc: "Build credibility with verified customer reviews. Respond to feedback and showcase your ratings." },
];

const plans = [
  { name: "Starter", price: "$0", period: "/month", desc: "List your first products", features: ["Up to 20 product listings", "Basic shop profile", "Order notifications", "Customer messaging"], cta: "Start Free", highlight: false },
  { name: "Growth", price: "$39", period: "/month", desc: "Scale your pet business", features: ["Up to 200 product listings", "Featured shop placement", "Promotion tools", "Sales analytics", "Priority support"], cta: "Start Growing", highlight: true },
  { name: "Premium", price: "$99", period: "/month", desc: "For established pet businesses", features: ["Unlimited listings", "Premium shop branding", "Advanced analytics", "Ad credits included", "API integration", "Dedicated account manager"], cta: "Go Premium", highlight: false },
];

const ForPetShopsPage = () => {
  return (
    <Layout> 
  <div>
    <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/10">
            For Pet Shops
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            Reach Thousands of<br /><span className="text-accent">Pet Owners</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            List your products, manage orders, run promotions, and grow your pet business on the platform pet owners trust.
          </p>
          <div className="mt-8">
            <Link href="/auth?tab=signup&role=shop" className="btn-coral text-lg py-3.5 px-8">
              Register Your Pet Shop <ArrowRight size={18} className="inline ml-1" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(210 50% 98%)" /></svg>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal><h2 className="text-3xl md:text-4xl font-heading font-black text-center mb-14">Everything You Need to Sell</h2></ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 80}>
              <div className="card-float p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4"><b.icon size={24} /></div>
                <h3 className="font-heading font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* How to list */}
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal><h2 className="text-3xl md:text-4xl font-heading font-black text-center mb-14">Start Selling in 3 Steps</h2></ScrollReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: "1", title: "Register", desc: "Create your shop account and submit your business details." },
            { num: "2", title: "List Products", desc: "Upload your inventory with photos, descriptions, and pricing." },
            { num: "3", title: "Start Selling", desc: "Go live and start receiving orders from pet owners." },
          ].map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 150}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl gradient-hero-light flex items-center justify-center mx-auto mb-4 text-white font-heading font-black text-xl">{s.num}</div>
                <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal><h2 className="text-3xl md:text-4xl font-heading font-black text-center mb-14">Shop Plans & Pricing</h2></ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <div className={`card-float p-6 h-full flex flex-col ${p.highlight ? "ring-2 ring-accent relative" : ""}`}>
                {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">Popular</div>}
                <h3 className="font-heading font-bold text-xl">{p.name}</h3>
                <div className="mt-2"><span className="text-3xl font-heading font-black">{p.price}</span><span className="text-muted-foreground text-sm">{p.period}</span></div>
                <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><Check size={16} className="text-accent shrink-0" />{f}</li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-full py-2.5 font-heading font-bold text-sm transition-all duration-300 hover:scale-105 ${p.highlight ? "bg-accent text-accent-foreground hover:shadow-lg" : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"}`}>
                  {p.cta}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default ForPetShopsPage;
