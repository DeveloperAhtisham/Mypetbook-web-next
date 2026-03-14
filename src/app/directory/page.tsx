"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  Star,
  Phone,
  Clock,
  Filter,
  Heart,
  Shield,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const vets = [
  {
    id: 1,
    name: "Dr. Ali Raza",
    clinic: "PetCare Medical Center",
    specialization: "General Practice & Emergency Care",
    rating: 4.9,
    reviews: 156,
    distance: "0.8 miles",
    phone: "+92 330-5645123",
    hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
    verified: true,
    emergency: true,
    image: "👨‍⚕️",
  },
  {
    id: 2,
    name: "Dr. Madiha Naz",
    clinic: "Furry Friends Veterinary Hospital",
    specialization: "Surgery & Orthopedics",
    rating: 4.8,
    reviews: 89,
    distance: "1.2 miles",
    phone: "+92 321-4033506",
    hours: "Mon-Sat: 7AM-7PM, Sun: 10AM-2PM",
    verified: true,
    emergency: false,
    image: "👩‍⚕️",
  },
  {
    id: 3,
    name: "Dr. Salman Ahmad",
    clinic: "Companion Animal Clinic",
    specialization: "Dermatology & Allergies",
    rating: 4.7,
    reviews: 203,
    distance: "2.1 miles",
    phone: "+92 345-6789787",
    hours: "Tue-Sat: 9AM-5PM",
    verified: true,
    emergency: false,
    image: "👨‍⚕️",
  },
];

const shops = [
  {
    id: 1,
    name: "Pawsome Pet Supplies",
    type: "Full-Service Pet Store",
    specialization: "Premium Food & Accessories",
    rating: 4.6,
    reviews: 124,
    distance: "0.5 miles",
    phone: "(555) 456-7890",
    hours: "Daily: 9AM-8PM",
    verified: true,
    services: ["Grooming", "Training", "Nutrition Consulting"],
    image: "🏪",
  },
  {
    id: 2,
    name: "Happy Tails Grooming",
    type: "Grooming Salon",
    specialization: "Professional Grooming & Spa",
    rating: 4.9,
    reviews: 87,
    distance: "1.0 miles",
    phone: "(555) 567-8901",
    hours: "Wed-Sun: 8AM-6PM",
    verified: true,
    services: ["Full Grooming", "Nail Trimming", "Flea Treatment"],
    image: "✂️",
  },
  {
    id: 3,
    name: "Pet Paradise Boutique",
    type: "Specialty Store",
    specialization: "Luxury Pet Accessories",
    rating: 4.4,
    reviews: 45,
    distance: "1.8 miles",
    phone: "(555) 678-9012",
    hours: "Mon-Sat: 10AM-7PM, Sun: 12PM-5PM",
    verified: true,
    services: ["Custom Collars", "Designer Clothing", "Gift Baskets"],
    image: "👑",
  },
];

const filters = [
  { name: "All", active: true },
  { name: "Verified", active: false },
  { name: "Emergency", active: false },
  { name: "Nearby", active: false },
];

type VetItem = (typeof vets)[0];
type ShopItem = (typeof shops)[0] & { services?: string[] };

const DirectoryPage = () => {
  const [activeTab, setActiveTab] = useState<"vets" | "shops">("vets");
  const [searchTerm, setSearchTerm] = useState("");

  const currentData = activeTab === "vets" ? vets : shops;

  return (
    <div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-secondary to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute top-16 left-20 text-5xl opacity-20 float-animation text-secondary-foreground/30">
          🔍
        </div>
        <div
          className="absolute bottom-16 right-20 text-6xl opacity-15 float-animation text-secondary-foreground/30"
          style={{ animationDelay: "1s" }}
        >
          🏪
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-6">
            Find Trusted Pet Professionals
          </h1>
          <p className="text-xl text-secondary-foreground/70 max-w-3xl mx-auto">
            Connect with verified veterinarians and quality pet businesses in
            your area. Quality care for your furry family members.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-4">
            <div className="relative max-w-2xl mx-auto w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by name, location, or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg border-2 border-border focus:border-primary"
              />
            </div>

            <div className="flex justify-center">
              <div className="flex bg-muted rounded-lg p-1">
                <Button
                  variant={activeTab === "vets" ? "default" : "ghost"}
                  onClick={() => setActiveTab("vets")}
                  className={`${
                    activeTab === "vets"
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  } transition-all duration-300`}
                >
                  👩‍⚕️ Veterinarians ({vets.length})
                </Button>
                <Button
                  variant={activeTab === "shops" ? "default" : "ghost"}
                  onClick={() => setActiveTab("shops")}
                  className={`${
                    activeTab === "shops"
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground"
                  } transition-all duration-300`}
                >
                  🏪 Pet Shops ({shops.length})
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filter, index) => (
                <Button
                  key={index}
                  variant={filter.active ? "default" : "outline"}
                  size="sm"
                  className={`${
                    filter.active
                      ? "bg-primary text-primary-foreground"
                      : "border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                  } transition-all duration-300`}
                >
                  <Filter className="w-3 h-3 mr-2" />
                  {filter.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directory Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentData.map((item, index) => (
              <Card
                key={item.id}
                className="group hover:shadow-strong transition-all duration-500 border hover:border-primary/30 hover:-translate-y-2 hover:scale-[1.02] bg-gradient-card overflow-hidden slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-gradient-to-br from-primary/5 to-transparent p-6 text-center border-b border-border/50">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary shadow-glow mb-3 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl filter drop-shadow-sm">
                      {item.image}
                    </span>
                  </div>

                  <div className="flex justify-center space-x-2 mb-3">
                    {item.verified && (
                      <Badge className="bg-primary text-primary-foreground shadow-soft">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                    {activeTab === "vets" &&
                      (item as VetItem).emergency && (
                      <Badge className="bg-pet-orange text-white shadow-soft">
                        ⚡ Emergency
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-primary group-hover:text-pet-blue transition-colors mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {activeTab === "vets"
                      ? (item as VetItem).clinic
                      : (item as ShopItem).type}
                  </p>
                </div>

                <CardContent className="p-5">
                  <div className="space-y-4">
                    <p className="text-sm text-foreground font-medium bg-muted/50 rounded-lg p-2 text-center">
                      {item.specialization}
                    </p>

                    <div className="flex items-center justify-between bg-muted/30 rounded-lg p-3">
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= Math.floor(item.rating)
                                  ? "text-pet-orange fill-current"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-bold text-foreground">
                          {item.rating}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          ({item.reviews})
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground bg-background rounded-md px-2 py-1">
                        <MapPin className="w-3 h-3 text-primary" />
                        <span className="font-medium">{item.distance}</span>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2 p-2 rounded-md bg-muted/20">
                        <div className="w-6 h-6 rounded-full bg-pet-blue/20 flex items-center justify-center">
                          <Phone className="w-3 h-3 text-pet-blue" />
                        </div>
                        <span className="text-foreground font-medium">
                          {item.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 rounded-md bg-muted/20">
                        <div className="w-6 h-6 rounded-full bg-pet-green/20 flex items-center justify-center">
                          <Clock className="w-3 h-3 text-pet-green" />
                        </div>
                        <span className="text-foreground font-medium">
                          {item.hours}
                        </span>
                      </div>
                    </div>

                    {activeTab === "shops" && (item as ShopItem).services && (
                      <div className="bg-muted/30 rounded-lg p-3">
                        <p className="text-sm font-bold text-foreground mb-2 flex items-center">
                          <Heart className="w-3 h-3 mr-1 text-primary" />
                          Services
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {(item as ShopItem).services!.map(
                            (service: string, i: number) => (
                              <Badge
                                key={i}
                                className="bg-primary/10 text-primary border-primary/20 text-xs"
                              >
                                {service}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex space-x-2 pt-2">
                      <Button className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                        <Heart className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-soft transition-all duration-300"
                      >
                        <Shield className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join as Professional */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 right-4 text-6xl float-animation">
                👩‍⚕️
              </div>
              <div
                className="absolute bottom-4 left-4 text-5xl float-animation"
                style={{ animationDelay: "1s" }}
              >
                🏪
              </div>
            </div>
            <div className="relative">
              <Award className="w-16 h-16 mx-auto mb-6 text-pet-orange" />
              <h2 className="text-3xl font-bold mb-4">
                Are you a Pet Professional?
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                Join our verified directory and connect with thousands of pet
                owners in your area. Grow your practice with MyPetBook.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  className="bg-background text-primary hover:bg-background/90"
                >
                  Join as Veterinarian
                </Button>
                <Button
                  variant="outline"
                  className="border-primary-foreground text-primary hover:bg-background/90 hover:text-primary"
                >
                  Register Your Shop
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DirectoryPage;
