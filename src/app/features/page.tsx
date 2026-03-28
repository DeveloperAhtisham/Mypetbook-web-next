import { ScrollReveal } from "@/components/ScrollReveal";
import {
  HeartPulse, ShieldCheck, Apple, TrendingUp, BotMessageSquare, CalendarHeart,
  Stethoscope, Newspaper, Store, Wallet
} from "lucide-react";
export const metadata = {
  title: "Features",
  description: "Discover all the amazing features that make MyPetBook the ultimate companion for pet owners, veterinarians, and pet businesses.",
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
    title: "Vaccination & Health Records",
    desc: "Keep a detailed timeline of all vaccinations, treatments, and checkups. Get automated reminders so you never miss an important date.",
    gradient: "from-coral/20 to-coral/5",
    iconBg: "bg-coral/15 text-coral",
    border: "border-coral/20",
    tag: "Health",
  },
  {
    icon: Apple,
    title: "Diet & Activity Plans",
    desc: "Create customized diet plans based on breed, age, and health conditions. Track daily activity levels and set fitness goals for your pet.",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/15 text-accent-foreground",
    border: "border-accent/20",
    tag: "Wellness",
  },
  {
    icon: TrendingUp,
    title: "Milestone Tracking",
    desc: "Document your pet's growth journey with photos, weight logs, and milestone markers. Watch them grow from puppy to proud adult.",
    gradient: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15 text-secondary",
    border: "border-secondary/20",
    tag: "Growth",
  },
  {
    icon: BotMessageSquare,
    title: "AI Chatbot — PetBot",
    desc: "Got a question at 2 AM about your pet's behavior? PetBot is always available with instant, reliable answers powered by veterinary knowledge.",
    gradient: "from-primary/15 to-primary/5",
    iconBg: "bg-primary/15 text-primary",
    border: "border-primary/20",
    tag: "AI Powered-Coming Soon",
  },
  {
    icon: CalendarHeart,
    title: "Doctor Appointment Booking",
    desc: "Browse verified veterinarians, check availability, and book appointments with a few taps. Get confirmations and reminders automatically.",
    gradient: "from-coral/20 to-coral/5",
    iconBg: "bg-coral/15 text-coral",
    border: "border-coral/20",
    tag: "Booking",
  },
  {
    icon: Stethoscope,
    title: "Consultation Chat",
    desc: "Have a quick question for your vet? Use secure in-app messaging to consult without needing a full appointment visit.",
    gradient: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/15 text-secondary",
    border: "border-secondary/20",
    tag: "Telehealth-Coming soon",
  },
  {
    icon: Newspaper,
    title: "Community Feed",
    desc: "Share adorable photos, ask for advice, celebrate milestones, and connect with pet parents who understand the journey.",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/15 text-accent-foreground",
    border: "border-accent/20",
    tag: "Social",
  },
  {
    icon: Store,
    title: "Pet Marketplace",
    desc: "Shop from trusted pet stores for food, toys, accessories, and health products. Compare prices and read reviews from real pet owners.",
    gradient: "from-primary/15 to-primary/5",
    iconBg: "bg-primary/15 text-primary",
    border: "border-primary/20",
    tag: "Shopping-Coming Soon",
  },
  {
    icon: Wallet,
    title: "Secure Payments",
    desc: "Pay for vet consultations, marketplace purchases, and premium features with secure, encrypted payment processing.",
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
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4">
                🐾 Built for modern pet parents
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-foreground">
                Powerful Features, <span className="text-gradient">Simplified</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 60}>
                <div
                  className={`group relative rounded-3xl border ${f.border} bg-gradient-to-br ${f.gradient} p-7 h-full
                    hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 cursor-default overflow-hidden`}
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl ${f.iconBg} flex items-center justify-center shadow-sm
                        group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                        <f.icon size={26} strokeWidth={1.8} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60 bg-background/60 backdrop-blur-sm px-3 py-1 rounded-full">
                        {f.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-foreground mb-2.5 group-hover:text-primary transition-colors duration-300">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-[15px]">
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