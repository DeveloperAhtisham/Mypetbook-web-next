"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { Mail, Stethoscope, Store, MapPin } from "lucide-react";
import { useState } from "react";

const contactCards = [
  { icon: Mail, title: "General Inquiries", desc: "Questions about the platform or your account.", email: "hello@mypetbook.com" },
  { icon: Stethoscope, title: "Vet Registration", desc: "Want to join as a veterinarian? We'll guide you.", email: "vets@mypetbook.com" },
  { icon: Store, title: "Shop Registration", desc: "Interested in listing your pet shop? Let's talk.", email: "shops@mypetbook.com" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
              Get in <span className="text-accent">Touch</span>
          </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Have a question, suggestion, or want to partner with us? We&apos;d love to hear from you.
          </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full"><path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="hsl(210 50% 98%)" /></svg>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 100}>
                <div className="card-float p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-4"><c.icon size={24} /></div>
                  <h3 className="font-heading font-bold text-lg mb-1">{c.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{c.desc}</p>
                  <a href={`mailto:${c.email}`} className="text-secondary text-sm font-medium hover:underline">{c.email}</a>
              </div>
              </ScrollReveal>
            ))}
                    </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-heading font-black mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text" placeholder="Your name" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30"
                />
                <input
                  type="email" placeholder="Your email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30"
                />
                <input
                  type="text" placeholder="Subject" required value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30"
                />
                <textarea
                  placeholder="Your message" required rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 resize-none"
                />
                <button type="submit" className="btn-coral w-full py-3 text-sm">Send Message</button>
                  </form>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-2xl font-heading font-black mb-6">Find Us</h2>
              <div className="card-float h-64 flex items-center justify-center bg-muted mb-6">
                <MapPin size={32} className="text-muted-foreground/30" />
                <span className="text-muted-foreground text-sm ml-2">Map placeholder</span>
                    </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong className="text-foreground">Address:</strong> 123 Pet Street, San Francisco, CA 94102</p>
                <p><strong className="text-foreground">Phone:</strong> +1 (555) 123-4567</p>
                <p><strong className="text-foreground">Hours:</strong> Mon-Fri, 9 AM - 6 PM PST</p>
                    </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
