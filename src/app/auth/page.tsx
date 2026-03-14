"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, Suspense } from "react";
import { Eye, EyeOff, PawPrint } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

function AuthContent() {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState<"login" | "signup">(
    (searchParams?.get("tab") ?? "") === "signup" ? "signup" : "login"
  );
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("owner");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(tab === "login" ? "Login functionality coming soon!" : "Signup functionality coming soon!");
  };

  return (
    <div className="min-h-screen flex">
      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <ScrollReveal>
            <Link href="/" className="flex items-center gap-2 mb-8">
              <Image src={logo} alt="MyPetBook" width={40} height={40} className="rounded-lg" />
              <span className="font-heading font-bold text-xl text-primary">MyPetBook</span>
            </Link>

            {/* Tabs */}
            <div className="flex gap-1 bg-muted rounded-full p-1 mb-8">
              <button
                onClick={() => setTab("login")}
                className={`flex-1 py-2.5 rounded-full text-sm font-heading font-bold transition-all ${tab === "login" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
              >
                Log In
              </button>
              <button
                onClick={() => setTab("signup")}
                className={`flex-1 py-2.5 rounded-full text-sm font-heading font-bold transition-all ${tab === "signup" ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
              >
                Sign Up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {tab === "signup" && (
                <>
                  <input
                    type="text" placeholder="Full name" required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30"
                  />
                  <div>
                    <label className="text-xs text-muted-foreground font-medium mb-2 block">I am a...</label>
                    <div className="flex gap-2">
                      {[
                        { key: "owner", label: "Pet Owner" },
                        { key: "vet", label: "Veterinarian" },
                        { key: "shop", label: "Pet Shop" },
                      ].map((r) => (
                        <button
                          key={r.key}
                          type="button"
                          onClick={() => setRole(r.key)}
                          className={`flex-1 py-2 rounded-xl text-xs font-heading font-bold transition-all ${
                            role === r.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border border-border"
                          }`}
                        >
                          {r.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
              <input
                type="email" placeholder="Email address" required
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} placeholder="Password" required
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-secondary/30 pr-10"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {tab === "login" && (
                <div className="text-right">
                  <button type="button" className="text-xs text-secondary hover:underline">Forgot password?</button>
                </div>
              )}
              <button type="submit" className="btn-coral w-full py-3 text-sm">
                {tab === "login" ? "Log In" : "Create Account"}
              </button>
            </form>

            <div className="relative my-6">
              <div className="border-t border-border" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-3 text-xs text-muted-foreground">or continue with</span>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-2.5 rounded-xl border border-border bg-card text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Google
              </button>
              <button className="flex-1 py-2.5 rounded-xl border border-border bg-card text-sm font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-2.12 4.53-3.74 4.25z"/></svg>
                Apple
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Brand Side */}
      <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12 relative overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float text-white/5"
            style={{ left: `${10 + i * 12}%`, top: `${15 + (i % 4) * 20}%`, animationDelay: `${i * 0.5}s` }}
          >
            <PawPrint size={20 + i * 8} />
          </div>
        ))}
        <div className="relative z-10 text-center max-w-md">
          <Image src={logo} alt="MyPetBook" width={128} height={128} className="w-32 h-32 mx-auto mb-8 rounded-3xl" />
          <h2 className="text-3xl font-heading font-black text-white mb-4">Welcome to MyPetBook</h2>
          <p className="text-white/70 leading-relaxed">
            Join thousands of pet owners, veterinarians, and pet businesses already using MyPetBook to create a healthier, happier life for their furry friends.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    }>
      <AuthContent />
    </Suspense>
  );
}
