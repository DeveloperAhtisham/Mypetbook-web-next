import Image from "next/image";
import {
  User,
  Calendar,
  Heart,
  Users,
  ShoppingBag,
  MapPin,
  Settings,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import phoneMockup from "@/assets/phone-mockup.jpg";

export const metadata = {
  title: "Features",
  description:
    "Discover all the amazing features that make MyPetBook the ultimate companion for pet owners, veterinarians, and pet businesses.",
};

export default function FeaturesPage() {
  const features = [
    {
      icon: User,
      title: "Pet Profile Management",
      description:
        "Create detailed profiles for your pets with photos, medical history, and important information.",
      color: "text-pet-orange",
      bgColor: "bg-pet-orange/10",
    },
    {
      icon: Calendar,
      title: "Appointment Booking",
      description:
        "Schedule vet appointments, grooming sessions, and other pet services with ease.",
      color: "text-pet-blue",
      bgColor: "bg-pet-blue/10",
    },
    {
      icon: Heart,
      title: "Health Tracker",
      description:
        "Monitor your pet's health, vaccinations, medications, and wellness milestones.",
      color: "text-pet-green",
      bgColor: "bg-pet-green/10",
    },
    {
      icon: Users,
      title: "Community Feed",
      description:
        "Share photos, stories, and connect with other pet owners in your local community.",
      color: "text-pet-purple",
      bgColor: "bg-pet-purple/10",
    },
    {
      icon: ShoppingBag,
      title: "Pet Marketplace",
      description:
        "Discover and purchase pet products, food, toys, and accessories from verified sellers.",
      color: "text-pet-orange",
      bgColor: "bg-pet-orange/10",
    },
    {
      icon: MapPin,
      title: "Vet & Shop Directory",
      description:
        "Find nearby veterinarians, pet stores, and pet services with reviews and ratings.",
      color: "text-pet-blue",
      bgColor: "bg-pet-blue/10",
    },
    {
      icon: Settings,
      title: "Admin Panel",
      description:
        "Comprehensive management tools for veterinarians and shop owners to manage their services.",
      color: "text-pet-green",
      bgColor: "bg-pet-green/10",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Beautiful, intuitive mobile app designed specifically for on-the-go pet care management.",
      color: "text-pet-purple",
      bgColor: "bg-pet-purple/10",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-secondary to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute top-20 left-10 text-6xl opacity-20 float-animation text-secondary-foreground/30">
          🐾
        </div>
        <div
          className="absolute bottom-20 right-10 text-5xl opacity-15 float-animation text-secondary-foreground/30"
          style={{ animationDelay: "1s" }}
        >
          ❤️
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-6">
            Powerful Features for Pet Care
          </h1>
          <p className="text-xl text-secondary-foreground/70 max-w-3xl mx-auto mb-8">
            Discover all the amazing features that make MyPetBook the ultimate
            companion for pet owners, veterinarians, and pet businesses.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <FeatureIcon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="mt-4 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more →
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Experience the App
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                See how MyPetBook brings all these features together in a
                beautiful, intuitive mobile experience designed specifically for
                pet lovers.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pet-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-foreground">
                    Intuitive and user-friendly interface
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pet-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-foreground">
                    Offline capability for essential features
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-pet-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-foreground">
                    Regular updates with new features
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <Button className="btn-paw bg-gradient-primary hover:shadow-medium">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download Now
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[280px] sm:w-[320px]">
                <div className="relative w-full aspect-[9/19] min-h-[400px]">
                  <Image
                    src={phoneMockup}
                    alt="MyPetBook App Preview"
                    fill
                    className="object-cover shadow-strong rounded-3xl"
                    sizes="(max-width: 640px) 280px, 320px"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-pet-orange/20 rounded-full flex items-center justify-center float-animation">
                  🐾
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-10 h-10 bg-pet-blue/20 rounded-full flex items-center justify-center float-animation"
                  style={{ animationDelay: "1s" }}
                >
                  ❤️
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
