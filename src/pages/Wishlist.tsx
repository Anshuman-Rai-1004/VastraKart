
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleRemoveFromWishlist = (product: any) => {
    removeFromWishlist(product.id);
    toast({
      title: "Removed from Wishlist",
      description: `${product.name} has been removed from your wishlist.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <BackButton />
        </div>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
            <Heart className="w-8 h-8 mr-3 text-red-500 fill-red-500" />
            My Wishlist
          </h1>
          <p className="text-gray-600">
            {wishlistItems.length === 0 
              ? "Your wishlist is empty" 
              : `You have ${wishlistItems.length} item${wishlistItems.length > 1 ? 's' : ''} in your wishlist`}
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-24 h-24 mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-500 mb-8">Start adding products you love to your wishlist!</p>
            <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
              <Link to="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="absolute top-4 right-4">
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-white/90 hover:bg-white"
                        onClick={() => handleRemoveFromWishlist(product)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-lg font-bold text-brand-600">₹{product.price.toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{product.category}</p>
                    </Link>
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-brand-600 hover:bg-brand-700"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button 
                        variant="outline"
                        size="icon"
                        onClick={() => handleRemoveFromWishlist(product)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
