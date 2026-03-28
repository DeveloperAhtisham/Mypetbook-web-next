"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import {
  LayoutDashboard, CalendarCheck, Video, BookOpen, Star, FileText,
  ArrowRight, Check
} from "lucide-react";
const benefits = [
  { icon: LayoutDashboard, title: "Professional Dashboard", desc: "Manage your entire practice from one clean, intuitive dashboard with patient overview, analytics, and scheduling." },
  { icon: CalendarCheck, title: "Appointment Management", desc: "Accept bookings, set availability, send reminders, and reduce no-shows with our smart scheduling system." },
  { icon: Video, title: "Online Consultations", desc: "Offer video and chat consultations to pet owners remotely. Expand your reach beyond your physical location." },
  { icon: BookOpen, title: "Educational Content", desc: "Post articles, tips, and guides to establish yourself as a thought leader and attract new clients." },
  { icon: Star, title: "Build Your Reputation", desc: "Collect verified reviews from real patients. Your ratings help pet owners find and trust you." },
  { icon: FileText, title: "Patient Record Access", desc: "Access complete pet health histories, vaccination records, and treatment notes shared by pet owners." },
];

const steps = [
  { num: "1", title: "Apply", desc: "Submit your license and credentials through our simple verification form." },
  { num: "2", title: "Get Verified", desc: "Our team reviews your application within 48 hours and activates your profile." },
  { num: "3", title: "Start Practicing", desc: "Set up your dashboard, list your services, and start accepting appointments." },
];

const plans = [
  { name: "Free", price: "$0", period: "/month", desc: "Get started with the basics", features: ["Basic profile listing", "Up to 10 appointments/month", "Patient messaging", "Community posting"], cta: "Start Free", highlight: false },
  { name: "Professional", price: "$49", period: "/month", desc: "Grow your digital practice", features: ["Priority profile listing", "Unlimited appointments", "Video consultations", "Analytics dashboard", "Educational content tools", "Priority support"], cta: "Go Professional", highlight: true },
  { name: "Clinic", price: "$149", period: "/month", desc: "For multi-vet practices", features: ["Everything in Professional", "Up to 10 vet accounts", "Clinic branding", "Team management", "Advanced analytics", "API access", "Dedicated support"], cta: "Contact Sales", highlight: false },
];

const ForVetsPage = () => {
  return (
  <div>
    <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/10">
            For Veterinarians
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            Grow Your Practice<br /><span className="text-accent">Digitally</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Join hundreds of veterinarians using MyPetBook to manage appointments, conduct consultations, and build their reputation online.
          </p>
          <div className="mt-8">
            <Link href="/auth?tab=signup&role=vet" className="btn-coral text-lg py-3.5 px-8">
              Join as a Veterinarian <ArrowRight size={18} className="inline ml-1" />
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
        <ScrollReveal><h2 className="text-3xl md:text-4xl font-heading font-black text-center mb-14">Why Vets Love MyPetBook</h2></ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 80}>
              <div className="card-float p-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4"><b.icon size={24} /></div>
                <h3 className="font-heading font-bold text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Dashboard Preview */}
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-black">Your Professional Dashboard</h2>
            <p className="text-muted-foreground mt-3">Everything you need to run your practice efficiently.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="card-float p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Today's Appointments", value: "8" },
                { label: "Pending Reviews", value: "3" },
                { label: "This Month's Patients", value: "47" },
                { label: "Rating", value: "4.9 ★" },
              ].map((s) => (
                <div key={s.label} className="bg-muted rounded-xl p-4 text-center">
                  <div className="text-2xl font-heading font-black text-primary">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-muted rounded-xl p-4 h-40 flex items-center justify-center text-muted-foreground text-sm">
              📊 Appointment calendar and analytics preview
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* How to Get Verified */}
    <section className="section-padding">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal><h2 className="text-3xl md:text-4xl font-heading font-black text-center mb-14">Get Verified in 3 Steps</h2></ScrollReveal>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.num} delay={i * 150}>
              <div className="flex gap-5 items-start card-float p-6">
                <div className="w-12 h-12 rounded-2xl gradient-hero-light flex items-center justify-center text-white font-heading font-black text-lg shrink-0">{s.num}</div>
                <div>
                  <h3 className="font-heading font-bold text-lg">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing */}
    {/* <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal><h2 className="text-3xl md:text-4xl font-heading font-black text-center mb-14">Vet Plans & Pricing</h2></ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 100}>
              <div className={`card-float p-6 h-full flex flex-col ${p.highlight ? "ring-2 ring-secondary relative" : ""}`}>
                {p.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-heading font-bold px-3 py-1 rounded-full">Popular</div>}
                <h3 className="font-heading font-bold text-xl">{p.name}</h3>
                <div className="mt-2"><span className="text-3xl font-heading font-black">{p.price}</span><span className="text-muted-foreground text-sm">{p.period}</span></div>
                <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
                <ul className="mt-5 space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><Check size={16} className="text-secondary shrink-0" />{f}</li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-full py-2.5 font-heading font-bold text-sm transition-all duration-300 hover:scale-105 ${p.highlight ? "bg-secondary text-secondary-foreground hover:shadow-lg" : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"}`}>
                  {p.cta}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section> */}
  </div>
  );
}

export default ForVetsPage;