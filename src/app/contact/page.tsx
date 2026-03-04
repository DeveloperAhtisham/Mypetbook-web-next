"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userType: "pet-owner",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      details: "support@mypetbook.app",
      action: "Send Email",
      color: "text-pet-blue",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our support team",
      details: "+92 317 7691170",
      action: "Call Now",
      color: "text-pet-green",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office",
      details: "103-F Block, Johar Town, Lahore, Pakistan.",
      action: "Get Directions",
      color: "text-pet-orange",
    },
  ];

  const faqs = [
    {
      question: "How do I create a pet profile?",
      answer:
        "Simply download the MyPetBook app, create an account, and follow the guided setup to add your pet's information, photos, and medical history.",
    },
    {
      question: "Is MyPetBook free to use?",
      answer:
        "Yes! MyPetBook is free for pet owners. We offer premium features for veterinarians and pet businesses.",
    },
    {
      question: "How do I book an appointment with a vet?",
      answer:
        "Browse our verified veterinarian directory, select your preferred vet, and book directly through the app. You'll receive confirmation and reminders.",
    },
    {
      question: "Can I trust the veterinarians on the platform?",
      answer:
        "Absolutely! All veterinarians on MyPetBook are verified professionals with valid licenses and credentials.",
    },
    {
      question: "How do I join as a veterinarian or pet business?",
      answer:
        "Contact us through this form or email us directly. We'll guide you through our verification process and platform setup.",
    },
  ];

  const userTypes = [
    { value: "pet-owner", label: "Pet Owner", icon: "🐕" },
    { value: "veterinarian", label: "Veterinarian", icon: "👩‍⚕️" },
    { value: "pet-business", label: "Pet Business", icon: "🏪" },
    { value: "other", label: "Other", icon: "👋" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-secondary to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute top-20 right-16 text-5xl opacity-20 float-animation text-secondary-foreground/30">
          💬
        </div>
        <div
          className="absolute bottom-20 left-16 text-6xl opacity-15 float-animation text-secondary-foreground/30"
          style={{ animationDelay: "1s" }}
        >
          📞
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-secondary-foreground/70 max-w-3xl mx-auto">
            We&apos;re here to help! Whether you have questions, feedback, or
            need support, our team is ready to assist you and your pets.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const InfoIcon = info.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 text-center"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-background rounded-full flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                      <InfoIcon className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {info.description}
                    </p>
                    <p className="font-medium text-foreground mb-4">
                      {info.details}
                    </p>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {info.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Send us a Message
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours.
                </p>
              </div>

              <Card className="border-2 border-primary/10 shadow-medium">
                <CardContent className="p-8">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div>
                      <label className="text-sm font-medium text-foreground mb-3 block">
                        I am a:
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {userTypes.map((type) => (
                          <Button
                            key={type.value}
                            type="button"
                            variant={
                              formData.userType === type.value
                                ? "default"
                                : "outline"
                            }
                            className={`justify-start ${
                              formData.userType === type.value
                                ? "bg-primary text-primary-foreground"
                                : "border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                            }`}
                            onClick={() =>
                              setFormData({ ...formData, userType: type.value })
                            }
                          >
                            <span className="mr-2">{type.icon}</span>
                            {type.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="border-2 border-border focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="border-2 border-border focus:border-primary"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            subject: e.target.value,
                          })
                        }
                        className="border-2 border-border focus:border-primary"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        className="min-h-[120px] border-2 border-border focus:border-primary resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-paw bg-gradient-primary hover:shadow-medium h-12"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-2 border-pet-green/20 bg-pet-green/5">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-pet-green">
                    <Clock className="w-5 h-5" />
                    <span>Response Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pet-green" />
                      <span className="text-foreground">
                        Email responses within 2-4 hours
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pet-green" />
                      <span className="text-foreground">
                        Emergency support available 24/7
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pet-green" />
                      <span className="text-foreground">
                        Phone support: Mon-Fri 9AM-6PM EST
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span>Frequently Asked Questions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="border-b border-border last:border-b-0 pb-4 last:pb-0"
                      >
                        <h4 className="font-medium text-foreground mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      View All FAQs
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Other Ways to Get Support
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Choose the support channel that works best for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-semibold text-primary mb-2">
                  Help Center
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse our comprehensive knowledge base and tutorials.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Visit Help Center
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-semibold text-primary mb-2">Live Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with our support team in real-time during business hours.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-semibold text-primary mb-2">Community</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with other pet owners and share experiences.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
