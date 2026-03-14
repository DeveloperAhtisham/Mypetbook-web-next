import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata = {
  title: "About",
  description: "Learn about MyPetBook – our mission to connect pet owners, veterinarians, and pet businesses.",
};
import { Heart, Shield, Globe, Sparkles, Linkedin, Twitter } from "lucide-react";

  const values = [
  { icon: Heart, title: "Pet-First Philosophy", desc: "Every decision we make starts with one question: Is this good for pets and the people who love them?" },
  { icon: Shield, title: "Trust & Safety", desc: "Verified vets, trusted shops, and secure data. We build confidence into every interaction on our platform." },
  { icon: Globe, title: "Global Community", desc: "Pet love knows no borders. We're building a worldwide community that celebrates the human-animal bond." },
  { icon: Sparkles, title: "Innovation", desc: "From AI-powered health insights to seamless marketplace experiences, we push the boundaries of pet tech." },
  ];

  const team = [
  { name: "Syed Mustghees Ahmad", role: "Founder & CEO", bio: "Veterinarian turned tech entrepreneur. 15 years of experience in animal care and a passion for making it accessible.", initials: "MP" },
  { name: "Ahtisham Hanif", role: "Co-Founder & CMO", bio: "Former senior engineer at a leading health tech company. Building the infrastructure that connects pets with care.", initials: "AT" },
  { name: "Ahsan Ghaffar", role: "Co-Founder & CDO", bio: "Award-winning product designer who believes beautiful design makes pet care more approachable and enjoyable.", initials: "SK" },
  { name: "Areej Sherazi", role: "Co-founder & CTO", bio: "Board-certified veterinary specialist ensuring our health features meet the highest clinical standards.", initials: "JO" },
];

const timeline = [
  { year: "2022", title: "The Spark", desc: "Dr. Maya Patel notices fragmented pet care records across clinics and envisions a unified platform." },
  { year: "2023", title: "Building the Foundation", desc: "First team assembled. MVP launched with pet profiles and basic health tracking." },
  { year: "2024", title: "Community Launch", desc: "Community features go live. 5,000 pet owners join in the first month." },
  { year: "2025", title: "Marketplace & Vets", desc: "Marketplace launches with 100+ partner shops. Vet verification system goes live." },
  { year: "2026", title: "The Ecosystem", desc: "10,000+ pet profiles, 500+ vets, AI PetBot, and a thriving global community." },
];

const AboutPage = () => {
  return (
  <div>
    <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
            About <span className="text-accent">MyPetBook</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            We&apos;re on a mission to make pet care simpler, smarter, and more connected for everyone.
          </p>
        </ScrollReveal>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(210 50% 98%)" /></svg>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <ScrollReveal>
          <span className="text-secondary font-heading font-bold text-sm uppercase tracking-wider">Our Mission</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black mt-2 mb-4">
            Building a World Where Every Pet Thrives
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We believe every pet deserves exceptional care, and every pet parent deserves the tools to provide it. MyPetBook connects the entire pet care ecosystem — owners, veterinarians, and businesses — into one seamless, loving platform.
          </p>
        </ScrollReveal>
        </div>
      </section>

    {/* Values */}
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal><h2 className="text-3xl font-heading font-black text-center mb-14">Why MyPetBook?</h2></ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 100}>
              <div className="card-float p-6 text-center h-full">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4"><v.icon size={28} /></div>
                <h3 className="font-heading font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
                  </div>
                </div>
    </section>

    {/* Team */}
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <ScrollReveal><h2 className="text-3xl font-heading font-black text-center mb-14">Meet Our Team</h2></ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {team.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="card-float p-6 text-center h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-4 text-white font-heading font-black text-xl">
                  {t.initials}
                </div>
                <h3 className="font-heading font-bold">{t.name}</h3>
                <p className="text-sm text-secondary font-medium mb-2">{t.role}</p>
                <p className="text-muted-foreground text-xs leading-relaxed">{t.bio}</p>
                <div className="flex justify-center gap-2 mt-3">
                  <Linkedin size={16} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                  <Twitter size={16} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
            </ScrollReveal>
          ))}
          </div>
        </div>
      </section>

    {/* Timeline */}
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <ScrollReveal><h2 className="text-3xl font-heading font-black text-center mb-14">Our Journey</h2></ScrollReveal>
        <div className="space-y-6">
          {timeline.map((t, i) => (
            <ScrollReveal key={t.year} delay={i * 100}>
              <div className="flex gap-5 items-start">
                <div className="w-16 shrink-0 text-right">
                  <span className="font-heading font-black text-secondary text-lg">{t.year}</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-secondary shrink-0" />
                  {i < timeline.length - 1 && <div className="w-0.5 h-full bg-border min-h-[40px]" />}
          </div>
                <div className="pb-6">
                  <h4 className="font-heading font-bold">{t.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{t.desc}</p>
          </div>
        </div>
            </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    {/* Press */}
    <section className="section-padding">
      <div className="container mx-auto px-4 text-center">
        <ScrollReveal>
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-heading font-bold mb-8">As Featured In</p>
          <div className="flex flex-wrap justify-center gap-10 opacity-40">
            {["TechCrunch", "Product Hunt", "Forbes", "Wired", "The Verge"].map((m) => (
              <span key={m} className="font-heading font-black text-xl text-foreground">{m}</span>
            ))}
          </div>
        </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;