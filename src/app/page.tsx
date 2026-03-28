"use client";

import { ScrollReveal, useCountUp } from "@/components/ScrollReveal";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  Bot,
  Syringe,
  Users,
  Stethoscope,
  Store,
  Star,
  ChevronRight,
  ArrowRight,
  PawPrint,
  Activity,
} from "lucide-react";
import { useState } from "react";

const stats = [
  { label: "Pet Profiles", value: 100, suffix: "+" },
  { label: "Verified Vets", value: 10, suffix: "+" },
  { label: "Pet Shops", value: 10, suffix: "+" },
  { label: "Community Posts", value: 500, suffix: "+" },
];

const features = [
  {
    icon: Activity,
    title: "Pet Health Tracking",
    desc: "Monitor your pet's vitals, weight, and wellness milestones in one intuitive dashboard.",
    color: "text-secondary",
  },
  {
    icon: Stethoscope,
    title: "Vet Consultations",
    desc: "Book appointments or chat with verified veterinarians from the comfort of your home.",
    color: "text-coral",
  },
  {
    icon: ShoppingBag,
    title: "Pet Marketplace",
    desc: "Browse thousands of products from trusted pet shops with doorstep delivery.",
    color: "text-accent",
  },
  {
    icon: MessageCircle,
    title: "Community Feed",
    desc: "Share moments, get advice, and connect with fellow pet lovers worldwide.",
    color: "text-secondary",
  },
  {
    icon: Bot,
    title: "AI Pet Assistant",
    desc: "Get instant answers to pet care questions with our intelligent PetBot assistant.",
    color: "text-coral",
  },
  {
    icon: Syringe,
    title: "Vaccination Records",
    desc: "Never miss a vaccination date with automated reminders and digital records.",
    color: "text-accent",
  },
];

const steps = [
  {
    num: "01",
    title: "Create a Profile",
    desc: "Sign up and add your pet's details — breed, age, photos, and health info.",
  },
  {
    num: "02",
    title: "Connect with Experts",
    desc: "Find verified veterinarians and trusted pet shops in your area.",
  },
  {
    num: "03",
    title: "Track & Thrive",
    desc: "Monitor health, shop essentials, and watch your pet live their best life.",
  },
];

const testimonials = [
  {
    name: "Sarah Latif",
    pet: "Max (Golden Retriever)",
    rating: 5,
    text: "MyPetBook has completely transformed how I manage Max's health. The vaccination reminders alone have been a lifesaver!",
    avatar: "SM",
  },
  {
    name: "Dr. Ahmad",
    pet: "Veterinarian",
    rating: 5,
    text: "As a vet, this platform streamlines my entire practice. Appointment management and patient records are seamless.",
    avatar: "JC",
  },
  {
    name: "Hina Latif",
    pet: "Whiskers (Persian Cat)",
    rating: 5,
    text: "The community here is incredible. I've learned so much about cat nutrition and found the best products for Whiskers.",
    avatar: "PS",
  },
  {
    name: "Mohammd Ahsan",
    pet: "Buddy & Luna (Beagles)",
    rating: 5,
    text: "Managing two dogs used to be hectic. Now I track both their health records, vet visits, and food in one place.",
    avatar: "TR",
  },
];

const faqs = [
  {
    q: "Is MyPetBook free to use?",
    a: "Yes! Our basic plan is completely free for pet owners. You get pet profiles, health tracking, and community access. Premium features like AI consultations and advanced analytics are available on paid plans.",
  },
  {
    q: "How do I find a veterinarian near me?",
    a: "Once you create an account, our platform uses your location to show verified veterinarians in your area. You can browse profiles, read reviews, and book appointments directly.",
  },
  {
    q: "Can I use MyPetBook for multiple pets?",
    a: "Absolutely! You can create individual profiles for each of your pets, each with their own health records, vaccination schedules, and milestone tracking.",
  },
  {
    q: "Is my pet's data secure?",
    a: "We take data security very seriously. All pet and health data is encrypted and stored securely. We never share your information with third parties without your consent.",
  },
  {
    q: "How do veterinarians get verified?",
    a: "Veterinarians must submit their license, credentials, and practice details for verification. Our team reviews each application to ensure only qualified professionals join the platform.",
  },
];

const StatCounter = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-heading font-bold text-primary">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"owners" | "vets" | "shops">(
    "owners",
  );
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float text-white/5"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            >
              <PawPrint size={30 + i * 10} />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/10">
                🐾 The #1 Pet Care Platform
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-tight mb-6">
                Your Pet&apos;s Complete{" "}
                <span className="text-accent">Digital Home</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Track health records, book vet consultations, shop essentials,
                and connect with a community of pet lovers — all in one
                beautiful platform.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Link
                  href="/auth?tab=signup"
                  className="btn-coral text-lg py-3.5 px-8"
                >
                  Get Started Free{" "}
                  <ArrowRight size={18} className="inline ml-1" />
                </Link> */}
                 <a
              href="https://play.google.com/store/apps/details?id=com.mypetbook.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral text-lg py-3.5 px-10 inline-block"
            >
              Install MyPetBook Now!{" "}
              <ArrowRight size={18} className="inline ml-1" />
            </a>
                <Link
                  href="/features"
                  className="btn-outline-white text-lg py-3.5 px-8"
                >
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Floating cards */}
          <div className="mt-16 flex justify-center gap-4 flex-wrap">
            {[
              { icon: Heart, label: "Health Tracking", bg: "bg-coral/90" },
              { icon: Stethoscope, label: "Find Vets", bg: "bg-secondary/90" },
              { icon: ShoppingBag, label: "Pet Shop", bg: "bg-accent/90" },
              { icon: Users, label: "Community", bg: "bg-primary/60" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={400 + i * 100}>
                <div
                  className={`${item.bg} backdrop-blur-sm rounded-2xl p-4 md:p-5 text-white text-center animate-float border border-white/20 min-w-[120px]`}
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  <item.icon size={28} className="mx-auto mb-2" />
                  <span className="text-sm font-heading font-bold">
                    {item.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path
              d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
              fill="hsl(210 50% 98%)"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StatCounter
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary font-heading font-bold text-sm uppercase tracking-wider">
                Features
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
                Everything Your Pet Needs
              </h2>
              <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
                A complete ecosystem designed to make pet care effortless,
                enjoyable, and connected.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className="card-float p-6 h-full">
                  <div
                    className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 ${f.color}`}
                  >
                    <f.icon size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-coral font-heading font-bold text-sm uppercase tracking-wider">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
                Three Simple Steps
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 150}>
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-2xl gradient-hero-light flex items-center justify-center mx-auto mb-5 text-white font-heading font-black text-xl">
                    {s.num}
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                  )}
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Tabs */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-accent font-heading font-bold text-sm uppercase tracking-wider">
                Built For Everyone
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
                One Platform, Three Experiences
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="flex justify-center gap-2 mb-10">
              {[
                { key: "owners" as const, label: "Pet Owners", icon: Heart },
                {
                  key: "vets" as const,
                  label: "Veterinarians",
                  icon: Stethoscope,
                },
                { key: "shops" as const, label: "Pet Shops", icon: Store },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-heading font-bold flex items-center gap-2 transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <tab.icon size={16} /> {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="card-float p-8 md:p-12 max-w-3xl mx-auto">
              {activeTab === "owners" && (
                <div className="text-center">
                  <Heart size={48} className="text-coral mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-3">
                    For Pet Owners
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Create detailed profiles for each pet, track vaccinations
                    and health milestones, book vet appointments, shop for
                    essentials, and connect with a loving community of pet
                    parents.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                    {[
                      "Pet Profiles",
                      "Health Tracking",
                      "Vet Booking",
                      "Marketplace",
                      "Community",
                      "AI Assistant",
                    ].map((f) => (
                      <div
                        key={f}
                        className="bg-muted rounded-xl px-3 py-2 font-medium"
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "vets" && (
                <div className="text-center">
                  <Stethoscope
                    size={48}
                    className="text-secondary mx-auto mb-4"
                  />
                  <h3 className="font-heading font-bold text-2xl mb-3">
                    For Veterinarians
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Build your digital practice with a professional dashboard.
                    Manage appointments, conduct online consultations, access
                    patient records, and grow your reputation through verified
                    reviews.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                    {[
                      "Dashboard",
                      "Appointments",
                      "Consultations",
                      "Patient Records",
                      "Reviews",
                      "Content Posts",
                    ].map((f) => (
                      <div
                        key={f}
                        className="bg-muted rounded-xl px-3 py-2 font-medium"
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "shops" && (
                <div className="text-center">
                  <Store size={48} className="text-accent mx-auto mb-4" />
                  <h3 className="font-heading font-bold text-2xl mb-3">
                    For Pet Shops
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Reach thousands of pet owners with your products. List
                    items, manage orders, run promotions, and grow your business
                    with powerful analytics and a trusted review system.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                    {[
                      "Product Listings",
                      "Order Management",
                      "Promotions",
                      "Analytics",
                      "Reviews",
                      "Advertising",
                    ].map((f) => (
                      <div
                        key={f}
                        className="bg-muted rounded-xl px-3 py-2 font-medium"
                      >
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-secondary font-heading font-bold text-sm uppercase tracking-wider">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
                Loved by Pet Parents &amp; Pros
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="card-float p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        className="text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-heading font-bold">
                        {t.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {t.pet}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4">
              Take MyPetBook Everywhere
            </h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Download the app to manage your pet&apos;s world on the go.
              Available soon on iOS and Android.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-white font-heading font-bold text-sm hover:bg-white/20 transition-all">
                📱 App Store — Coming Soon
              </button>
              <button className="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-white font-heading font-bold text-sm hover:bg-white/20 transition-all">
                🤖 Google Play — Coming Soon
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-3xl">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-coral font-heading font-bold text-sm uppercase tracking-wider">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mt-2">
                Got Questions?
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="card-float overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-heading font-bold text-sm">
                      {faq.q}
                    </span>
                    <ChevronRight
                      size={18}
                      className={`text-muted-foreground transition-transform duration-200 ${openFaq === i ? "rotate-90" : ""}`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground mb-4">
              Ready to Give Your Pet the Best Life?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join thousands of pet parents, veterinarians, and pet businesses
              already on MyPetBook.
            </p>
            {/* <Link href="/auth?tab=signup" className="btn-coral text-lg py-3.5 px-10 inline-block">
              Get Started Free <ArrowRight size={18} className="inline ml-1" />
            </Link>   */}
            <a
              href="https://play.google.com/store/apps/details?id=com.mypetbook.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral text-lg py-3.5 px-10 inline-block"
            >
              Install MyPetBook Now!{" "}
              <ArrowRight size={18} className="inline ml-1" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
