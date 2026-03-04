import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Heart,
  Users,
  Calendar,
  ShoppingBag,
  MapPin,
  Shield,
  Star,
  Download,
  Play,
  PawPrint,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";
import phoneMockup from "@/assets/phone-mockup.jpg";

export const metadata = {
  title: "Home",
  description:
    "The ultimate community app for pet owners, veterinarians, and pet businesses. All in one beautiful platform.",
};

export default function HomePage() {
  const features = [
    {
      icon: Users,
      title: "Pet Profile Management",
      description:
        "Create comprehensive profiles for your pets with photos, health records, and important information.",
      color: "text-pet-orange",
    },
    {
      icon: Calendar,
      title: "Easy Appointment Booking",
      description:
        "Schedule vet visits, grooming sessions, and other pet services with just a few taps.",
      color: "text-pet-blue",
    },
    {
      icon: Heart,
      title: "Health Tracking",
      description:
        "Monitor vaccinations, medications, and wellness milestones to keep your pet healthy.",
      color: "text-pet-green",
    },
    {
      icon: ShoppingBag,
      title: "Pet Marketplace",
      description:
        "Discover and purchase quality pet products from verified sellers in your area.",
      color: "text-pet-purple",
    },
    {
      icon: MapPin,
      title: "Find Local Services",
      description:
        "Locate nearby veterinarians, pet stores, and services with reviews and ratings.",
      color: "text-pet-orange",
    },
    {
      icon: Shield,
      title: "Trusted Community",
      description:
        "Connect with verified pet professionals and fellow pet owners in a safe environment.",
      color: "text-pet-blue",
    },
  ];

  const userTypes = [
    {
      title: "Pet Owners",
      description:
        "Manage your pet's health, connect with vets, and join a loving community of pet parents.",
      features: [
        "Pet Profile Management",
        "Health Records",
        "Community Feed",
        "Appointment Booking",
      ],
      icon: "🐕",
      color: "bg-pet-orange/10 border-pet-orange/20",
    },
    {
      title: "Veterinarians",
      description:
        "Streamline your practice with digital tools, reach more clients, and provide better care.",
      features: [
        "Patient Management",
        "Digital Records",
        "Appointment System",
        "Communication Tools",
      ],
      icon: "👩‍⚕️",
      color: "bg-pet-blue/10 border-pet-blue/20",
    },
    {
      title: "Pet Shopkeepers",
      description:
        "Expand your reach, showcase products, and connect with pet owners in your community.",
      features: [
        "Product Showcase",
        "Customer Management",
        "Order Processing",
        "Business Analytics",
      ],
      icon: "🏪",
      color: "bg-pet-green/10 border-pet-green/20",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Pet Families", icon: "🐾" },
    { number: "500+", label: "Verified Veterinarians", icon: "👩‍⚕️" },
    { number: "200+", label: "Pet Businesses", icon: "🏪" },
    { number: "50K+", label: "Health Records", icon: "📋" },
  ];

  const testimonials = [
    {
      text: "MyPetBook has transformed how I manage my dog's health. Everything is in one place and so easy to access!",
      author: "Sarah M.",
      role: "Dog Mom",
      rating: 5,
      avatar: "👩",
    },
    {
      text: "As a veterinarian, this platform has streamlined my practice and improved communication with pet owners.",
      author: "Dr. Johnson",
      role: "Veterinarian",
      rating: 5,
      avatar: "👨‍⚕️",
    },
    {
      text: "The marketplace feature helped me find the best products for my cats. Highly recommend!",
      author: "Mike T.",
      role: "Cat Parent",
      rating: 5,
      avatar: "👨",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - dark teal to match old app */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-hero via-hero/95 to-hero/80 relative overflow-hidden min-h-[32rem]">
        <div className="absolute inset-0">
          <div className="relative w-full h-full opacity-15">
            <Image
              src={heroBanner}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="bg-white/10 text-white border-white/20 mb-6 px-4 py-2 text-sm font-medium">
                🎉 Now Available for Download!
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                MyPetB
                <div className="inline-flex items-center space-x-1 mx-2">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-pet-orange rounded-full flex items-center justify-center animate-bounce">
                    <span className="text-white text-sm md:text-xl">🐾</span>
                  </div>
                  <div
                    className="w-8 h-8 md:w-12 md:h-12 bg-pet-blue rounded-full flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <span className="text-white text-sm md:text-xl">🐾</span>
                  </div>
                </div>
                k
              </h1>

              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                The ultimate community app for{" "}
                <span className="font-semibold">pet owners</span>,{" "}
                <span className="font-semibold">veterinarians</span>, and{" "}
                <span className="font-semibold">pet businesses</span>. All in
                one beautiful platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-white text-primary hover:bg-white/90 hover:shadow-lg text-lg px-8 py-6 h-auto">
                  <Download className="w-5 h-5 mr-2" />
                  Download App
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-primary hover:bg-white hover:text-primary text-lg px-8 py-6 h-auto"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-white/80">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-pet-orange text-pet-orange" />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>10K+ Downloads</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4 fill-pet-green text-pet-green" />
                  <span>Loved by Pets</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative bg-phone-card rounded-3xl p-6 shadow-strong">
                <div className="relative w-[280px] sm:w-[320px] lg:w-[384px] aspect-[9/19] min-h-[320px]">
                  <Image
                    src={phoneMockup}
                    alt="MyPetBook App"
                    fill
                    className="object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Built for Every Pet Lover
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you&apos;re a pet parent, veterinary professional, or pet
              business owner, MyPetBook has features designed specifically for
              you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <Card
                key={index}
                className={`group hover:shadow-strong transition-all duration-500 border-2 ${type.color} hover:-translate-y-3 hover:scale-[1.02] bg-gradient-card overflow-hidden`}
              >
                {/* Card Header with Icon */}
                <div className="relative p-6 text-center bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-primary shadow-glow mb-4 group-hover:scale-110 transition-all duration-300">
                    <span className="text-3xl filter drop-shadow-sm">{type.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-pet-blue transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>

                <div className="px-6 pb-4">
                  <div className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3 text-sm group/item"
                      >
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <PawPrint className="w-3 h-3 text-white text-xs" />
                        </div>
                        <span className="text-foreground font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                    <Heart className="w-4 h-4 mr-2" />
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Everything You Need for Pet Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From health tracking to community building, MyPetBook brings
              together all the tools you need to give your pets the best care
              possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-background rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                    <FeatureIcon
                      className={`w-8 h-8 ${feature.color}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
            })}
          </div>

          <div className="text-center mt-12">
            <Link href="/features">
              <Button className="btn-paw bg-gradient-primary hover:shadow-medium">
                Explore All Features
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Loved by Pet Families
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our community has to say about MyPetBook.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 text-pet-orange fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-primary rounded-3xl p-8 lg:p-16 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-6 right-6 text-6xl float-animation">
                🐾
              </div>
              <div
                className="absolute bottom-6 left-6 text-5xl float-animation"
                style={{ animationDelay: "1s" }}
              >
                ❤️
              </div>
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Pet Care?
              </h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Join thousands of pet families who trust MyPetBook for their pet
                care needs. Download the app and start your journey today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  variant="secondary"
                  className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-6 h-auto"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download for iOS
                </Button>
                <Button
                  variant="outline"
                  className="border-primary-foreground text-primary hover:bg-background/90 hover:text-primary text-lg px-8 py-6 h-auto"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download for Android
                </Button>
              </div>

              <p className="text-primary-foreground/80">
                Free to download • No subscription required • Available
                worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
