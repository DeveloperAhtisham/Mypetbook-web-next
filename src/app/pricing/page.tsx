"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Check, Shield, ChevronRight } from "lucide-react";
import { useState } from "react";

const ownerPlans = [
  { name: "Free", price: "$0", period: "/month", desc: "Perfect for getting started", features: ["1 pet profile", "Basic health tracking", "Community access", "Marketplace browsing", "Basic vet search"], cta: "Get Started Free", highlight: false },
  { name: "Plus", price: "$9.99", period: "/month", desc: "For dedicated pet parents", features: ["Up to 5 pet profiles", "Full health records", "Vaccination reminders", "AI PetBot access", "Priority vet booking", "Activity tracking"], cta: "Upgrade to Plus", highlight: true },
  { name: "Premium", price: "$19.99", period: "/month", desc: "The ultimate pet care experience", features: ["Unlimited pet profiles", "Everything in Plus", "Video vet consultations", "Advanced analytics", "Diet planning tools", "Family sharing (5 members)", "Premium support"], cta: "Go Premium", highlight: false },
];

const vetPlans = [
  { name: "Free", price: "$0", period: "/month", features: ["Basic profile listing", "10 appointments/month", "Patient messaging"], cta: "Start Free", highlight: false },
  { name: "Professional", price: "$49", period: "/month", features: ["Priority listing", "Unlimited appointments", "Video consultations", "Analytics dashboard", "Content tools"], cta: "Go Professional", highlight: true },
  { name: "Clinic", price: "$149", period: "/month", features: ["Everything in Professional", "Up to 10 vet accounts", "Clinic branding", "Team management", "API access"], cta: "Contact Sales", highlight: false },
];

const shopPlans = [
  { name: "Starter", price: "$0", period: "/month", features: ["20 product listings", "Basic shop profile", "Order notifications"], cta: "Start Free", highlight: false },
  { name: "Growth", price: "$39", period: "/month", features: ["200 product listings", "Featured placement", "Promotion tools", "Sales analytics"], cta: "Start Growing", highlight: true },
  { name: "Premium", price: "$99", period: "/month", features: ["Unlimited listings", "Premium branding", "Advanced analytics", "Ad credits", "API integration"], cta: "Go Premium", highlight: false },
];

const faqs = [
  { q: "Can I cancel my subscription anytime?", a: "Yes! All paid plans are month-to-month with no long-term commitment. Cancel anytime from your account settings." },
  { q: "Is there a free trial for paid plans?", a: "We offer a 14-day free trial on all paid plans so you can explore the full feature set before committing." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and Apple Pay. All transactions are secured with bank-level encryption." },
  { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle." },
];

const PricingPage = () => {
  const [tab, setTab] = useState<"owners" | "vets" | "shops">("owners");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = tab === "owners" ? ownerPlans : tab === "vets" ? vetPlans : shopPlans;

  return (
    <div>
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
              Simple, Transparent <span className="text-accent">Pricing</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Choose the plan that fits your needs. Start free, upgrade when you&apos;re ready.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(210 50% 98%)" /></svg>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Toggle */}
          <ScrollReveal>
            <div className="flex justify-center gap-2 mb-12">
              {[
                { key: "owners" as const, label: "Pet Owners" },
                { key: "vets" as const, label: "Veterinarians" },
                { key: "shops" as const, label: "Pet Shops" },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-heading font-bold transition-all ${
                    tab === t.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-card"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((p, i) => (
              <ScrollReveal key={p.name + tab} delay={i * 100}>
                <div className={`card-float p-6 h-full flex flex-col ${p.highlight ? "ring-2 ring-secondary relative" : ""}`}>
                  {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">Most Popular</div>}
                  <h3 className="font-heading font-bold text-xl">{p.name}</h3>
                  <div className="mt-2"><span className="text-3xl font-heading font-black">{p.price}</span><span className="text-muted-foreground text-sm">{p.period}</span></div>
                  {"desc" in p && <p className="text-muted-foreground text-sm mt-2">{(p as { desc: string }).desc}</p>}
                  <ul className="mt-5 space-y-2.5 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm"><Check size={16} className="text-secondary shrink-0" />{f}</li>
                    ))}
                  </ul>
                  <button className={`mt-6 w-full rounded-full py-2.5 font-heading font-bold text-sm transition-all duration-300 hover:scale-105 ${p.highlight ? "bg-secondary text-secondary-foreground" : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"}`}>
                    {p.cta}
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Guarantee */}
          <ScrollReveal delay={300}>
            <div className="flex items-center justify-center gap-3 mt-12 text-sm text-muted-foreground">
              <Shield size={20} className="text-secondary" />
              <span>30-day money-back guarantee on all paid plans. No questions asked.</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal><h2 className="text-3xl font-heading font-black text-center mb-10">Pricing FAQ</h2></ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="card-float overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <span className="font-heading font-bold text-sm">{faq.q}</span>
                    <ChevronRight size={18} className={`text-muted-foreground transition-transform ${openFaq === i ? "rotate-90" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{faq.a}</div>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}; 

export default PricingPage;