
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 1299,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "Men"
    },
    {
      id: 2,
      name: "Elegant Summer Dress",
      price: 2499,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      category: "Women"
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      price: 3299,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
      category: "Unisex"
    },
    {
      id: 4,
      name: "Designer Handbag",
      price: 4999,
      image: "https://images.unsplash.com/photo-1584168701906-11cbd1bfb09e?w=400&h=400&fit=crop",
      category: "Accessories"
    }
  ];

  const categories = [
    {
      name: "Men's Fashion",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      count: "10+ Items",
      categoryParam: "Men"
    },
    {
      name: "Women's Fashion", 
      image: "https://images.unsplash.com/photo-1494790108755-2616c99a0649?w=300&h=300&fit=crop",
      count: "10+ Items",
      categoryParam: "Women"
    },
    {
      name: "Kids Wear",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop",
      count: "10+ Items",
      categoryParam: "Kids"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1506629905270-11674df19e67?w=300&h=300&fit=crop",
      count: "10+ Items",
      categoryParam: "Accessories"
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      description: "100% secure payment processing with encrypted transactions for your peace of mind."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick delivery within 2-5 business days. Express shipping available for urgent orders."
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days. No questions asked return policy for your convenience."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, India",
      rating: 5,
      comment: "Amazing quality and fast delivery! The dress I ordered exceeded my expectations. Will definitely shop again.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c99a0649?w=100&h=100&fit=crop"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, India",
      rating: 5,
      comment: "Great collection of men's fashion. The t-shirts are of premium quality and the prices are very reasonable.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Sneha Patel",
      location: "Bangalore, India",
      rating: 4,
      comment: "Love the variety of accessories available. Customer service is also very responsive and helpful.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&h=1080&fit=crop"
            alt="Fashion Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Fashion That
            <span className="block bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">
              Defines You
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Discover the latest trends from verified vendors. Quality fashion at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700 text-lg px-8 py-3">
              <Link to="/products">
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent">
              <Link to="/register">
                Become a Vendor
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="py-4 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Up to 50% OFF on Latest Collection</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="hidden md:flex items-center space-x-2">
              <Truck className="w-5 h-5" />
              <span>Free Shipping on Orders Above ₹999</span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Explore our diverse collection of fashion essentials</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link key={index} to={`/products?category=${category.categoryParam}`}>
                <Card className="group cursor-pointer hover-lift hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                        <p className="text-sm opacity-90">{category.count}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Shop With Us?</h2>
            <p className="text-gray-600 text-lg">Experience the best in online fashion shopping</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 text-lg">Handpicked items from our trusted vendors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover-lift hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-2xl font-bold text-brand-600">₹{product.price.toLocaleString()}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-brand-50 to-brand-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 text-lg">Real reviews from satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                comment={testimonial.comment}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl p-12 text-white">
              <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">Stay in Style</h2>
              <p className="text-xl mb-8 opacity-90">
                Subscribe to our newsletter and get exclusive deals, fashion tips, and early access to new collections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/70"
                />
                <Button variant="secondary" size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor CTA Section */}
      <section className="py-16 brand-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Selling?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of vendors who trust VastraKart to showcase their products to millions of customers.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link to="/register">
              Register as Vendor
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
