"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import { Star, ShoppingCart, ArrowRight, Store } from "lucide-react";
import { useState } from "react";
const categories = ["All", "Food & Treats", "Accessories", "Toys", "Grooming", "Health", "Apparel"];

const products = [
  { name: "Premium Grain-Free Dog Food", shop: "PawNutrition", price: "$34.99", rating: 4.8, category: "Food & Treats" },
  { name: "Interactive Puzzle Feeder", shop: "SmartPets Co.", price: "$22.50", rating: 4.6, category: "Toys" },
  { name: "Organic Calming Treats", shop: "NaturalPaws", price: "$18.99", rating: 4.9, category: "Food & Treats" },
  { name: "Waterproof LED Collar", shop: "PetGlow", price: "$15.99", rating: 4.7, category: "Accessories" },
  { name: "Self-Cleaning Slicker Brush", shop: "GroomPro", price: "$19.99", rating: 4.5, category: "Grooming" },
  { name: "Joint Health Supplement", shop: "VetNourish", price: "$29.99", rating: 4.8, category: "Health" },
  { name: "Cozy Fleece Pet Hoodie", shop: "PetFashion", price: "$24.99", rating: 4.4, category: "Apparel" },
  { name: "Squeaky Plush Toy Bundle", shop: "ToyTails", price: "$12.99", rating: 4.6, category: "Toys" },
];

const featuredShops = [
  { name: "PawNutrition", rating: 4.9, products: 128 },
  { name: "SmartPets Co.", rating: 4.7, products: 85 },
  { name: "NaturalPaws", rating: 4.8, products: 64 },
  { name: "GroomPro", rating: 4.6, products: 42 },
];

const MarketplacePage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div>
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 border border-white/10">
              Marketplace
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
              Shop Everything Your Pet <span className="text-accent">Loves</span>
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Browse thousands of products from trusted pet shops — food, toys, accessories, and more.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(210 50% 98%)" /></svg>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-coral to-accent rounded-2xl p-6 text-center">
              <h3 className="font-heading font-black text-xl text-white">🎉 20% Off Your First Order!</h3>
              <p className="text-white/80 text-sm mt-1">Use code <span className="font-bold">PETLOVE20</span> at checkout</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="section-padding pt-8">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-heading font-bold transition-all duration-300 ${
                    activeCategory === c ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 60}>
                <div className="card-float overflow-hidden h-full flex flex-col">
                  <div className="h-44 bg-gradient-to-br from-muted to-secondary/10 flex items-center justify-center">
                    <ShoppingCart size={32} className="text-muted-foreground/30" />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="font-heading font-bold text-sm mb-1">{p.name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{p.shop}</p>
                    <div className="flex items-center gap-1 mb-3">
                      <Star size={12} className="text-accent fill-accent" />
                      <span className="text-xs font-medium">{p.rating}</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-heading font-black text-lg">{p.price}</span>
                      <button className="bg-primary text-primary-foreground text-xs font-heading font-bold px-3 py-1.5 rounded-full hover:scale-105 transition-transform">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Shops */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal><h2 className="text-2xl font-heading font-black text-center mb-8">Featured Shops</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredShops.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 80}>
                <div className="card-float p-5 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Store size={24} className="text-primary" />
                  </div>
                  <h4 className="font-heading font-bold">{s.name}</h4>
                  <div className="flex items-center justify-center gap-1 mt-1 text-sm">
                    <Star size={12} className="text-accent fill-accent" />
                    <span>{s.rating}</span>
                    <span className="text-muted-foreground">· {s.products} products</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-black mb-4">Want to Sell on MyPetBook?</h2>
            <p className="text-muted-foreground mb-6">Join hundreds of pet shops already growing their business on our platform.</p>
            <Link href="/for-pet-shops" className="btn-coral py-3 px-8 inline-block">
              Register as a Seller <ArrowRight size={18} className="inline ml-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default MarketplacePage;