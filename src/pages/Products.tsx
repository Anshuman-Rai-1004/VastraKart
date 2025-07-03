
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Filter, Grid, List, Search, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  const searchFromUrl = searchParams.get('search');
  
  const [searchTerm, setSearchTerm] = useState(searchFromUrl || "");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || "all");
  const { toast } = useToast();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();

  // Update states when URL changes
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
  }, [categoryFromUrl, searchFromUrl]);

  // All Products Data
  const allProducts = [
    // Men's Products (10 items)
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Blue"],
      rating: 4.5,
      reviews: 120
    },
    {
      id: 2,
      name: "Formal Blazer",
      price: 4499,
      originalPrice: 5499,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      category: "Men",
      sizes: ["M", "L", "XL", "XXL"],
      colors: ["Navy", "Black", "Gray"],
      rating: 4.3,
      reviews: 65
    },
    {
      id: 3,
      name: "Casual Jeans",
      price: 2299,
      originalPrice: 2799,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop",
      category: "Men",
      sizes: ["30", "32", "34", "36"],
      colors: ["Blue", "Black"],
      rating: 4.4,
      reviews: 180
    },
    {
      id: 4,
      name: "Polo Shirt",
      price: 1599,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Navy", "White", "Red"],
      rating: 4.2,
      reviews: 95
    },
    {
      id: 5,
      name: "Leather Jacket",
      price: 8999,
      originalPrice: 10999,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      category: "Men",
      sizes: ["M", "L", "XL"],
      colors: ["Black", "Brown"],
      rating: 4.8,
      reviews: 45
    },
    {
      id: 6,
      name: "Dress Shirt",
      price: 1899,
      originalPrice: 2299,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Blue", "Pink"],
      rating: 4.1,
      reviews: 78
    },
    {
      id: 7,
      name: "Hoodie",
      price: 2799,
      originalPrice: 3299,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      category: "Men",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Gray", "Black", "Navy"],
      rating: 4.6,
      reviews: 210
    },
    {
      id: 8,
      name: "Chino Pants",
      price: 2199,
      originalPrice: 2699,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
      category: "Men",
      sizes: ["30", "32", "34", "36"],
      colors: ["Khaki", "Navy", "Black"],
      rating: 4.3,
      reviews: 156
    },
    {
      id: 9,
      name: "V-Neck Sweater",
      price: 3199,
      originalPrice: 3899,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
      category: "Men",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Gray", "Navy", "Burgundy"],
      rating: 4.4,
      reviews: 89
    },
    {
      id: 10,
      name: "Track Suit",
      price: 3999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      category: "Men",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Navy", "Gray"],
      rating: 4.0,
      reviews: 134
    },

    // Women's Products (10 items)
    {
      id: 11,
      name: "Elegant Summer Dress",
      price: 2499,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      category: "Women",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Pink", "Blue", "White"],
      rating: 4.8,
      reviews: 85
    },
    {
      id: 12,
      name: "Floral Maxi Dress",
      price: 3199,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop",
      category: "Women",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Floral", "Navy", "Black"],
      rating: 4.7,
      reviews: 112
    },
    {
      id: 13,
      name: "Blouse",
      price: 1799,
      originalPrice: 2199,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
      category: "Women",
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Pink", "Blue"],
      rating: 4.5,
      reviews: 167
    },
    {
      id: 14,
      name: "High Waist Jeans",
      price: 2799,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop",
      category: "Women",
      sizes: ["26", "28", "30", "32"],
      colors: ["Blue", "Black", "White"],
      rating: 4.6,
      reviews: 203
    },
    {
      id: 15,
      name: "Cardigan",
      price: 2299,
      originalPrice: 2799,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
      category: "Women",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Beige", "Pink", "Gray"],
      rating: 4.3,
      reviews: 91
    },
    {
      id: 16,
      name: "Midi Skirt",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=400&h=400&fit=crop",
      category: "Women",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Black", "Navy", "Burgundy"],
      rating: 4.4,
      reviews: 78
    },
    {
      id: 17,
      name: "Crop Top",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1564257577154-75fddb6cef49?w=400&h=400&fit=crop",
      category: "Women",
      sizes: ["XS", "S", "M", "L"],
      colors: ["White", "Black", "Pink"],
      rating: 4.2,
      reviews: 145
    },
    {
      id: 18,
      name: "Blazer Jacket",
      price: 3999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=400&h=400&fit=crop",
      category: "Women",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Gray"],
      rating: 4.7,
      reviews: 56
    },
    {
      id: 19,
      name: "Wrap Dress",
      price: 2799,
      originalPrice: 3299,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop",
      category: "Women",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Red", "Navy", "Black"],
      rating: 4.5,
      reviews: 123
    },
    {
      id: 20,
      name: "Sweater Dress",
      price: 3499,
      originalPrice: 4199,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop",
      category: "Women",
      sizes: ["XS", "S", "M", "L"],
      colors: ["Gray", "Beige", "Black"],
      rating: 4.6,
      reviews: 87
    },

    // Kids Products (10 items)
    {
      id: 21,
      name: "Kids T-Shirt",
      price: 799,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop",
      category: "Kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Blue", "Red", "Yellow"],
      rating: 4.4,
      reviews: 89
    },
    {
      id: 22,
      name: "Kids Jeans",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=400&fit=crop",
      category: "Kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Blue", "Black"],
      rating: 4.3,
      reviews: 67
    },
    {
      id: 23,
      name: "Kids Dress",
      price: 1199,
      originalPrice: 1499,
      image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop",
      category: "Kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Pink", "Purple", "White"],
      rating: 4.6,
      reviews: 124
    },
    {
      id: 24,
      name: "Kids Hoodie",
      price: 1599,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1596635359692-a5ac2b5b8450?w=400&h=400&fit=crop",
      category: "Kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Gray", "Navy", "Red"],
      rating: 4.5,
      reviews: 156
    },
    {
      id: 25,
      name: "Kids Shorts",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop",
      category: "Kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Blue", "Green", "Black"],
      rating: 4.2,
      reviews: 98
    },
    {
      id: 26,
      name: "Kids Pajama Set",
      price: 1399,
      originalPrice: 1799,
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a4?w=400&h=400&fit=crop",
      category: "Kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Blue", "Pink", "Green"],
      rating: 4.7,
      reviews: 203
    },
    {
      id: 27,
      name: "Kids Jacket",
      price: 2199,
      originalPrice: 2699,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      category: "Kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Navy", "Red", "Green"],
      rating: 4.4,
      reviews: 45
    },
    {
      id: 28,
      name: "Kids Polo Shirt",
      price: 999,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop",
      category: "Kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["White", "Navy", "Red"],
      rating: 4.1,
      reviews: 78
    },
    {
      id: 29,
      name: "Kids Tracksuit",
      price: 1899,
      originalPrice: 2399,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      category: "Kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Gray", "Blue", "Black"],
      rating: 4.3,
      reviews: 134
    },
    {
      id: 30,
      name: "Kids Sweater",
      price: 1699,
      originalPrice: 2099,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
      category: "Kids",
      sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
      colors: ["Red", "Blue", "Yellow"],
      rating: 4.5,
      reviews: 167
    },

    // Unisex Products (10 items)
    {
      id: 31,
      name: "Classic Denim Jacket",
      price: 3299,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
      category: "Unisex",
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Blue", "Black"],
      rating: 4.6,
      reviews: 200
    },
    {
      id: 32,
      name: "Basic White Tee",
      price: 999,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
      category: "Unisex",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Black", "Gray"],
      rating: 4.4,
      reviews: 312
    },
    {
      id: 33,
      name: "Unisex Hoodie",
      price: 2499,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      category: "Unisex",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Gray", "Black", "Navy"],
      rating: 4.7,
      reviews: 267
    },
    {
      id: 34,
      name: "Cargo Pants",
      price: 2799,
      originalPrice: 3399,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
      category: "Unisex",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Khaki", "Black", "Olive"],
      rating: 4.3,
      reviews: 145
    },
    {
      id: 35,
      name: "Baseball Cap",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop",
      category: "Unisex",
      sizes: ["One Size"],
      colors: ["Black", "Navy", "Red"],
      rating: 4.2,
      reviews: 189
    },
    {
      id: 36,
      name: "Bomber Jacket",
      price: 4199,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
      category: "Unisex",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Olive"],
      rating: 4.5,
      reviews: 78
    },
    {
      id: 37,
      name: "Sweatpants",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      category: "Unisex",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Gray", "Black", "Navy"],
      rating: 4.4,
      reviews: 234
    },
    {
      id: 38,
      name: "Tank Top",
      price: 899,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1564257577154-75fddb6cef49?w=400&h=400&fit=crop",
      category: "Unisex",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Black", "Gray"],
      rating: 4.1,
      reviews: 156
    },
    {
      id: 39,
      name: "Zip-up Hoodie",
      price: 2799,
      originalPrice: 3299,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
      category: "Unisex",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Gray", "Navy"],
      rating: 4.6,
      reviews: 198
    },
    {
      id: 40,
      name: "Joggers",
      price: 2199,
      originalPrice: 2699,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      category: "Unisex",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Gray", "Navy"],
      rating: 4.3,
      reviews: 167
    },

    // Accessories (10 items)
    {
      id: 41,
      name: "Designer Handbag",
      price: 4999,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1584168701906-11cbd1bfb09e?w=400&h=400&fit=crop",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Brown", "Black", "Tan"],
      rating: 4.7,
      reviews: 95
    },
    {
      id: 42,
      name: "Leather Belt",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      category: "Accessories",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Brown", "Tan"],
      rating: 4.4,
      reviews: 167
    },
    {
      id: 43,
      name: "Sunglasses",
      price: 2499,
      originalPrice: 2999,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Black", "Brown", "Silver"],
      rating: 4.5,
      reviews: 203
    },
    {
      id: 44,
      name: "Wrist Watch",
      price: 8999,
      originalPrice: 10999,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Silver", "Gold", "Black"],
      rating: 4.8,
      reviews: 78
    },
    {
      id: 45,
      name: "Wallet",
      price: 1599,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Black", "Brown", "Tan"],
      rating: 4.3,
      reviews: 134
    },
    {
      id: 46,
      name: "Scarf",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=400&h=400&fit=crop",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Red", "Blue", "Gray"],
      rating: 4.2,
      reviews: 89
    },
    {
      id: 47,
      name: "Backpack",
      price: 3499,
      originalPrice: 4199,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Black", "Navy", "Gray"],
      rating: 4.6,
      reviews: 156
    },
    {
      id: 48,
      name: "Jewelry Set",
      price: 2999,
      originalPrice: 3599,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Gold", "Silver", "Rose Gold"],
      rating: 4.7,
      reviews: 112
    },
    {
      id: 49,
      name: "Phone Case",
      price: 799,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=400&fit=crop",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Black", "Clear", "Blue"],
      rating: 4.1,
      reviews: 234
    },
    {
      id: 50,
      name: "Hair Accessories",
      price: 699,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "Accessories",
      sizes: ["One Size"],
      colors: ["Black", "Brown", "Gold"],
      rating: 4.4,
      reviews: 178
    },

    // Footwear (10 items)
    {
      id: 51,
      name: "Casual Sneakers",
      price: 2799,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      category: "Footwear",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["White", "Black", "Gray"],
      rating: 4.4,
      reviews: 150
    },
    {
      id: 52,
      name: "Running Shoes",
      price: 3999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      category: "Footwear",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Blue", "Black", "White"],
      rating: 4.6,
      reviews: 267
    },
    {
      id: 53,
      name: "Formal Shoes",
      price: 4999,
      originalPrice: 5999,
      image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=400&h=400&fit=crop",
      category: "Footwear",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Black", "Brown"],
      rating: 4.5,
      reviews: 89
    },
    {
      id: 54,
      name: "Sandals",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
      category: "Footwear",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Black", "Brown", "Tan"],
      rating: 4.2,
      reviews: 134
    },
    {
      id: 55,
      name: "Boots",
      price: 5999,
      originalPrice: 7499,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
      category: "Footwear",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Black", "Brown"],
      rating: 4.7,
      reviews: 78
    },
    {
      id: 56,
      name: "High Heels",
      price: 3499,
      originalPrice: 4199,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop",
      category: "Footwear",
      sizes: ["6", "7", "8", "9", "10"],
      colors: ["Black", "Red", "Nude"],
      rating: 4.3,
      reviews: 156
    },
    {
      id: 57,
      name: "Flip Flops",
      price: 999,
      originalPrice: 1299,
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
      category: "Footwear",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Black", "Blue", "Red"],
      rating: 4.0,
      reviews: 203
    },
    {
      id: 58,
      name: "Canvas Shoes",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
      category: "Footwear",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["White", "Black", "Red"],
      rating: 4.4,
      reviews: 189
    },
    {
      id: 59,
      name: "Loafers",
      price: 3999,
      originalPrice: 4999,
      image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=400&h=400&fit=crop",
      category: "Footwear",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["Brown", "Black", "Tan"],
      rating: 4.5,
      reviews: 167
    },
    {
      id: 60,
      name: "Athletic Shoes",
      price: 4499,
      originalPrice: 5499,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      category: "Footwear",
      sizes: ["7", "8", "9", "10", "11"],
      colors: ["White", "Black", "Blue"],
      rating: 4.6,
      reviews: 234
    }
  ];

  const categories = ["all", "Men", "Women", "Kids", "Unisex", "Accessories", "Footwear"];

  // Filter products based on selected category and search term
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleWishlistToggle = (product: any) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from Wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  const FilterSection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? "bg-brand-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category === "all" ? "All Categories" : category}
              <span className="text-sm ml-2">
                ({category === "all" ? allProducts.length : allProducts.filter(p => p.category === category).length})
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {searchFromUrl ? `Search Results for "${searchFromUrl}"` : 
             selectedCategory === "all" ? "All Products" : `${selectedCategory} Products`}
          </h1>
          
          {/* Search and Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Mobile Filter Button */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Categories
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Categories</SheetTitle>
                    <SheetDescription>
                      Filter products by category
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterSection />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Categories Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Categories
                </h2>
                <FilterSection />
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} products
                    {selectedCategory !== "all" && ` in ${selectedCategory}`}
                    {searchFromUrl && ` for "${searchFromUrl}"`}
                  </p>
                </div>
                <div className={`grid gap-6 ${
                  viewMode === "grid" 
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
                    : "grid-cols-1"
                }`}>
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="group cursor-pointer hover-lift hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-t-lg">
                          <Link to={`/product/${product.id}`}>
                            <img
                              src={product.image}
                              alt={product.name}
                              className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                                viewMode === "grid" ? "w-full h-64" : "w-32 h-32"
                              }`}
                            />
                          </Link>
                          <div className="absolute top-4 left-4">
                            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Button
                              variant="outline"
                              size="icon"
                              className="bg-white/90 hover:bg-white"
                              onClick={() => handleWishlistToggle(product)}
                            >
                              <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                            </Button>
                          </div>
                        </div>
                        <div className="p-4">
                          <Link to={`/product/${product.id}`}>
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                              <div className="text-right">
                                <div className="flex items-center space-x-2">
                                  <span className="text-lg font-bold text-brand-600">₹{product.price.toLocaleString()}</span>
                                  <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                              <span className="flex items-center">
                                ⭐ {product.rating} ({product.reviews})
                              </span>
                              <span className="text-brand-600 font-medium">{product.category}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                              <span>Colors: {product.colors.slice(0, 2).join(", ")}</span>
                              {product.colors.length > 2 && <span>+{product.colors.length - 2} more</span>}
                            </div>
                          </Link>
                          <Button 
                            className="w-full bg-brand-600 hover:bg-brand-700"
                            onClick={() => handleAddToCart(product)}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Products
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
