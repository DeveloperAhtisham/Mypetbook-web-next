import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { pageCanonical } from "@/lib/seo";
import {
  HeartPulse, ShieldCheck, Apple, TrendingUp, BotMessageSquare, CalendarHeart,
  Stethoscope, Newspaper, Store, Wallet
} from "lucide-react";

export const metadata: Metadata = {
  title: "Pet Health Tracking, Vet Booking & AI Pet Care Features",
  description:
    "Powerful MyPetBook features: pet health tracking, digital pet records, vaccination reminders, online vet booking, community feed, marketplace tools, and AI pet assistant.",
  keywords: [
    "pet health tracking",
    "pet vaccination tracker",
    "digital pet records",
    "book vet appointment online",
    "AI pet assistant",
    "pet care platform",
  ],
  alternates: { canonical: pageCanonical("/features") },
};

  const features = [
    {
    icon: HeartPulse,
      title: "Pet Profile Management",
    desc: "Create rich profiles for each of your pets with photos, breed info, age, weight, and complete medical history. Everything about your furry friend in one place.",
    gradient: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15 text-secondary",
    border: "border-secondary/20",
    tag: "Core",
  },
  {
    icon: ShieldCheck,
    title: "Health & Vaccination Records",
    desc: "Store and track vaccinations, medical history, allergies, and prescriptions. Never lose important health documents again.",
    gradient: "from-coral/20 to-coral/5",
    iconBg: "bg-coral/15 text-coral",
    border: "border-coral/20",
    tag: "Health",
  },
  {
    icon: Apple,
    title: "Diet & Nutrition Tracking",
    desc: "Log meals, monitor weight trends, and get personalized feeding recommendations based on your pet's breed and age.",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/15 text-accent",
    border: "border-accent/20",
    tag: "Wellness",
  },
  {
    icon: TrendingUp,
    title: "Activity & Fitness Logs",
    desc: "Track walks, playtime, and exercise. Set goals and celebrate milestones with visual progress charts.",
    gradient: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15 text-secondary",
    border: "border-secondary/20",
    tag: "Fitness",
  },
  {
    icon: BotMessageSquare,
    title: "AI PetBot Assistant",
    desc: "Get instant answers to pet care questions. From \"Is this food safe?\" to \"When is the next vaccine due?\" — PetBot has you covered.",
    gradient: "from-coral/20 to-coral/5",
    iconBg: "bg-coral/15 text-coral",
    border: "border-coral/20",
    tag: "AI",
  },
  {
    icon: CalendarHeart,
    title: "Smart Reminders",
    desc: "Automated alerts for vaccinations, medication schedules, grooming appointments, and checkups. Never miss a date.",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/15 text-accent",
    border: "border-accent/20",
    tag: "Alerts",
  },
  {
    icon: Stethoscope,
    title: "Vet Discovery & Booking",
    desc: "Find verified veterinarians near you, read reviews, compare ratings, and book appointments directly from the app.",
    gradient: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15 text-secondary",
    border: "border-secondary/20",
    tag: "Vets",
  },
  {
    icon: Newspaper,
    title: "Educational Content Hub",
    desc: "Access expert articles, care guides, and tips written by verified veterinarians. Learn from the best in pet care.",
    gradient: "from-coral/20 to-coral/5",
    iconBg: "bg-coral/15 text-coral",
    border: "border-coral/20",
    tag: "Learn",
  },
  {
    icon: Store,
    title: "Integrated Marketplace",
    desc: "Shop food, toys, accessories, and more from trusted pet shops. Seamless ordering with doorstep delivery.",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/15 text-accent",
    border: "border-accent/20",
    tag: "Shop",
  },
  {
    icon: Wallet,
    title: "Secure Payments",
    desc: "Safe and encrypted payment processing for marketplace purchases, vet consultations, and premium subscriptions.",
    gradient: "from-coral/20 to-coral/5",
    iconBg: "bg-coral/15 text-coral",
    border: "border-coral/20",
    tag: "Payments-coming soon",
  },
];

const FeaturesPage = () => {
  return (
    <div>
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <PageBreadcrumbs items={[{ label: "Features" }]} />
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/10">
              Platform Features
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
              Everything Your Pet Needs,<br />
              <span className="text-accent">All in One Place</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              From health tracking to marketplace shopping, MyPetBook brings every aspect of pet care into one seamless, beautiful platform.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(210 50% 98%)" /></svg>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 80}>
                <div className={`card-float p-0 overflow-hidden h-full border ${f.border}`}>
                  <div className={`h-40 bg-gradient-to-br ${f.gradient} flex items-center justify-center relative`}>
                    <div className={`w-16 h-16 rounded-2xl ${f.iconBg} flex items-center justify-center`}>
                      <f.icon size={32} />
                    </div>
                    <span className="absolute top-4 right-4 text-xs font-heading font-bold px-3 py-1 rounded-full bg-card/80 text-muted-foreground">
                      {f.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading font-bold text-xl mb-2">{f.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
