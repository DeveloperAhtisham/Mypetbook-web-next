"use client";

import { ScrollReveal, useCountUp } from "@/components/ScrollReveal";
import Link from "next/link";
import { Heart, MessageCircle, ArrowRight, TrendingUp, Globe, Users, FileText } from "lucide-react";

const posts = [
  { owner: "Emily R.", caption: "Max enjoying his first beach day! 🏖️🐕", likes: 234, comments: 18, pet: "Golden Retriever" },
  { owner: "Jake M.", caption: "Luna finally learned to shake paws today! So proud 🐾", likes: 189, comments: 24, pet: "Husky" },
  { owner: "Sophie L.", caption: "Morning cuddles with Mochi. Nothing beats this feeling ❤️", likes: 312, comments: 31, pet: "Persian Cat" },
  { owner: "Carlos D.", caption: "Buddy's 5th birthday party was a hit! 🎂", likes: 456, comments: 52, pet: "Beagle" },
  { owner: "Aisha K.", caption: "Kiwi learned a new word today — 'treat'! 🦜", likes: 178, comments: 15, pet: "African Grey Parrot" },
  { owner: "Tom W.", caption: "Shelter adoption day — welcome home, Daisy! 🏠", likes: 523, comments: 67, pet: "Mixed Breed" },
];

const tips = [
  "5 Signs Your Dog Might Need a Dental Checkup",
  "Indoor Cat Enrichment: 10 Ideas Your Cat Will Love",
  "How to Transition Your Pet to a New Diet Safely",
  "Understanding Your Pet's Body Language",
  "Summer Safety Tips for Pet Owners",
];

const Community = () => {
  const postsCount = useCountUp(50000);
  const membersCount = useCountUp(25000);
  const countriesCount = useCountUp(45);

  return (
    <div>
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/10">
              Community
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
              Join the <span className="text-accent">Pet-Loving</span> Community
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Share stories, get advice, celebrate milestones, and connect with thousands of pet parents worldwide.
            </p>
            <div className="mt-8">
              <Link href="/auth?tab=signup" className="btn-coral text-lg py-3.5 px-8">
                Join the Community <ArrowRight size={18} className="inline ml-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(210 50% 98%)" /></svg>
        </div>
      </section>

      {/* Community Feed */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ScrollReveal><h2 className="text-2xl font-heading font-black mb-6">Recent Posts</h2></ScrollReveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {posts.map((p, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="card-float overflow-hidden">
                      <div className="h-40 bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                        <Heart size={32} className="text-muted-foreground/30" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                            {p.owner.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-heading font-bold">{p.owner}</div>
                            <div className="text-xs text-muted-foreground">{p.pet}</div>
                          </div>
                        </div>
                        <p className="text-sm mb-3">{p.caption}</p>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><Heart size={12} /> {p.likes}</span>
                          <span className="flex items-center gap-1"><MessageCircle size={12} /> {p.comments}</span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="card-float p-5">
                  <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2"><TrendingUp size={18} className="text-coral" /> Trending Tips</h3>
                  <ul className="space-y-3">
                    {tips.map((t, i) => (
                      <li key={i} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-start gap-2">
                        <span className="text-coral font-bold mt-0.5">{i + 1}.</span> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="card-float p-5">
                  <h3 className="font-heading font-bold text-lg mb-4">Community Stats</h3>
                  <div className="space-y-3">
                    <div ref={postsCount.ref} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2"><FileText size={14} /> Posts</span>
                      <span className="font-heading font-bold">{postsCount.count.toLocaleString()}+</span>
                    </div>
                    <div ref={membersCount.ref} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2"><Users size={14} /> Members</span>
                      <span className="font-heading font-bold">{membersCount.count.toLocaleString()}+</span>
                    </div>
                    <div ref={countriesCount.ref} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2"><Globe size={14} /> Countries</span>
                      <span className="font-heading font-bold">{countriesCount.count}+</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Community;
