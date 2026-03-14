import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Heart,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog",
  description:
    "Expert advice, tips, and insights from veterinary professionals to help you provide the best care for your beloved pets.",
};

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Health Tips for New Pet Owners",
    excerpt:
      "Starting your journey as a pet parent? Here are the fundamental health guidelines every new pet owner should know to keep their furry friends happy and healthy.",
    author: "Dr. Sarah Johnson",
    authorRole: "Veterinarian",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Health",
    featured: true,
    image: "🏥",
  },
  {
    id: 2,
    title: "Understanding Pet Nutrition: A Complete Guide",
    excerpt:
      "Proper nutrition is the foundation of pet health. Learn about balanced diets, portion sizes, and special dietary needs for different breeds and ages.",
    author: "Dr. Mike Wilson",
    authorRole: "Pet Nutritionist",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "Nutrition",
    featured: false,
    image: "🥘",
  },
  {
    id: 3,
    title: "Emergency First Aid for Pets: What Every Owner Should Know",
    excerpt:
      "Accidents happen. Be prepared with this comprehensive guide to pet first aid, covering common emergencies and when to seek professional help.",
    author: "Dr. Emily Rodriguez",
    authorRole: "Emergency Vet",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Emergency Care",
    featured: true,
    image: "🚨",
  },
  {
    id: 4,
    title: "Creating a Pet-Friendly Home Environment",
    excerpt:
      "Transform your home into a safe and comfortable space for your pets with these practical tips for pet-proofing and environmental enrichment.",
    author: "Lisa Chen",
    authorRole: "Pet Behaviorist",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Home & Safety",
    featured: false,
    image: "🏠",
  },
  {
    id: 5,
    title: "The Importance of Regular Vet Checkups",
    excerpt:
      "Prevention is better than cure. Discover why regular veterinary visits are crucial for maintaining your pet's long-term health and well-being.",
    author: "Dr. James Taylor",
    authorRole: "Veterinarian",
    date: "March 5, 2024",
    readTime: "7 min read",
    category: "Preventive Care",
    featured: false,
    image: "📋",
  },
  {
    id: 6,
    title: "Mental Health and Enrichment for Indoor Pets",
    excerpt:
      "Keep your indoor pets mentally stimulated and emotionally healthy with these creative enrichment activities and environmental modifications.",
    author: "Dr. Amanda Foster",
    authorRole: "Animal Psychologist",
    date: "March 2, 2024",
    readTime: "5 min read",
    category: "Behavior",
    featured: false,
    image: "🧠",
  },
];

const categories = [
  { name: "All", count: 24, active: true },
  { name: "Health", count: 8, active: false },
  { name: "Nutrition", count: 6, active: false },
  { name: "Behavior", count: 5, active: false },
  { name: "Emergency Care", count: 3, active: false },
  { name: "Preventive Care", count: 2, active: false },
];

const BlogPage = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-secondary to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute top-20 left-12 text-5xl opacity-20 float-animation text-secondary-foreground/30">
          📝
        </div>
        <div
          className="absolute bottom-20 right-12 text-6xl opacity-15 float-animation text-secondary-foreground/30"
          style={{ animationDelay: "1s" }}
        >
          💡
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-6">
            Pet Care Tips & Insights
          </h1>
          <p className="text-xl text-secondary-foreground/70 max-w-3xl mx-auto">
            Expert advice, tips, and insights from veterinary professionals to
            help you provide the best care for your beloved pets.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={`${
                  category.active
                    ? "bg-primary text-primary-foreground"
                    : "border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                } transition-all duration-300`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="bg-pet-orange text-white mb-4">
                Featured Article
              </Badge>
              <h2 className="text-2xl font-bold text-primary">
                Editor&apos;s Pick
              </h2>
            </div>

            <Card className="overflow-hidden border-2 border-pet-orange/20 shadow-medium hover:shadow-strong transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-pet-orange/10 text-pet-orange"
                    >
                      {featuredPost.category}
                    </Badge>
                    <Star className="w-4 h-4 text-pet-orange fill-current" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-pet-blue" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {featuredPost.author}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {featuredPost.authorRole}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="btn-paw bg-gradient-primary group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="bg-pet-orange/5 flex items-center justify-center text-8xl p-12">
                  {featuredPost.image}
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest pet care advice and insights from our
              expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-medium transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="bg-primary/5 p-8 text-center">
                  <div className="text-5xl mb-2">{post.image}</div>
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3 leading-tight group-hover:text-pet-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-pet-blue" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {post.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {post.authorRole}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-primary hover:bg-primary hover:text-primary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-primary rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-4 text-4xl float-animation">
                📧
              </div>
              <div
                className="absolute bottom-4 left-4 text-3xl float-animation"
                style={{ animationDelay: "1s" }}
              >
                🐾
              </div>
            </div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Pet Care Tips
              </h2>
              <p className="text-lg text-white mb-8">
                Get the latest articles, expert advice, and exclusive pet care
                tips delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="btn-paw bg-gradient-primary">
                  <Heart className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-white mt-4">
                Join over 50,000 pet parents who trust our expert advice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;