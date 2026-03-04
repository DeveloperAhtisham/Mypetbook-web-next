import {
  Heart,
  Users,
  Target,
  Award,
  Zap,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About",
  description:
    "We're on a mission to create the world's most comprehensive and caring pet community platform.",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Pet-First Philosophy",
      description:
        "Every decision we make is centered around improving the lives of pets and their families.",
      color: "text-pet-orange",
    },
    {
      icon: Users,
      title: "Community Building",
      description:
        "Connecting pet lovers, professionals, and businesses to create a supportive ecosystem.",
      color: "text-pet-blue",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "Verified professionals, secure transactions, and reliable health information you can trust.",
      color: "text-pet-green",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Using cutting-edge technology to make pet care more accessible and efficient.",
      color: "text-pet-purple",
    },
  ];

  const team = [
    {
      name: "Syed Mustghees Ahmed",
      role: "Founder",
      bio: "Veterinarian with 10+ years of experience, passionate about improving pet healthcare through technology.",
      image: "👨‍💼",
    },
    {
      name: "Ahtisham Hanif",
      role: "CO-Founder",
      bio: "Former tech lead at major pet care companies, dedicated to building scalable solutions for pet communities.",
      image: "👨‍💻",
    },
    {
      name: "Areej Sheerazi",
      role: "CO-Founder",
      bio: "UX expert and pet owner who ensures every feature is designed with real pet parents in mind.",
      image: "👩‍🎨",
    },
    {
      name: "Ahsan Ghafar",
      role: "CO-Founder",
      bio: "UX expert and pet owner who ensures every feature is designed with real pet parents in mind.",
      image: "👨‍💼",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-secondary to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute top-16 right-16 text-5xl opacity-20 float-animation text-secondary-foreground/30">
          🏥
        </div>
        <div
          className="absolute bottom-16 left-16 text-6xl opacity-15 float-animation text-secondary-foreground/30"
          style={{ animationDelay: "1s" }}
        >
          🐾
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-6">
            About MyPetBook
          </h1>
          <p className="text-xl text-secondary-foreground/70 max-w-3xl mx-auto">
            We&apos;re on a mission to create the world&apos;s most comprehensive
            and caring pet community platform.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-pet-orange" />
                <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To revolutionize pet care by creating a unified platform that
                connects pet owners with veterinary professionals and quality
                pet businesses, making comprehensive pet care accessible,
                affordable, and community-driven.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pet-orange rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-foreground">
                    Simplify pet healthcare management for all pet owners
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pet-orange rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-foreground">
                    Support veterinary professionals with modern tools
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pet-orange rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-foreground">
                    Empower pet businesses to reach more customers
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Award className="w-8 h-8 text-pet-blue" />
                <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We envision a world where every pet receives the best possible
                care through a connected community of passionate pet lovers,
                skilled professionals, and trusted businesses working together.
              </p>
              <Card className="border-2 border-pet-blue/20 bg-pet-blue/5">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Our Impact Goal
                  </h3>
                  <p className="text-muted-foreground">
                    By 2030, we aim to serve over 1 million pet families,
                    connecting them with 10,000+ verified veterinary
                    professionals and 5,000+ trusted pet businesses across the
                    globe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and every decision we
              make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const ValueIcon = value.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-background rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft">
                      <ValueIcon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="border-l-4 border-l-pet-orange bg-pet-orange/5">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  MyPetBook was born from a simple yet powerful realization: pet
                  care shouldn&apos;t be complicated, fragmented, or stressful.
                  As pet owners ourselves, we experienced firsthand the challenges
                  of managing multiple apps, keeping track of vet appointments,
                  finding reliable pet services, and connecting with other pet
                  parents in our community.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We noticed that PetOwners were struggling with the same
                  issues. They would arrive at appointments with forgotten
                  vaccination records, miss important follow-ups, or struggle to
                  find emergency care when needed. We realized that technology
                  could bridge these gaps and create a more connected, supportive
                  pet care ecosystem.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, MyPetBook is more than just an app – it&apos;s a
                  movement toward better pet care through community, technology,
                  and genuine care for our four-legged family members. Every
                  feature we build, every partnership we form, and every update
                  we release is designed with one goal in mind: making life
                  better for pets and the people who love them.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pet lovers, tech experts, and healthcare professionals working
              together to transform pet care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 text-center border-2 hover:border-primary/20"
              >
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {member.image}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-pet-blue font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you&apos;re a pet owner, veterinary professional, or pet
            business owner, we&apos;d love to have you as part of our growing
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-paw bg-gradient-primary hover:shadow-medium">
              <Heart className="w-4 h-4 mr-2" />
              Download the App
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
