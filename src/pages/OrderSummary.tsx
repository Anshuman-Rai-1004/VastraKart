
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Truck, Home } from "lucide-react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  const { id } = useParams();

  // Mock order data - in real app, this would come from API
  const order = {
    id: id,
    orderNumber: `ORD-${id}`,
    status: "confirmed",
    orderDate: "2024-01-15",
    estimatedDelivery: "2024-01-20",
    items: [
      {
        id: 1,
        title: "Premium Cotton T-Shirt",
        price: 999,
        quantity: 2,
        size: "M",
        color: "White",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "Denim Jacket",
        price: 2499,
        quantity: 1,
        size: "L",
        color: "Blue",
        image: "/placeholder.svg"
      }
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main Street, Apartment 4B",
      city: "Mumbai",
      pincode: "400001",
      phone: "+91 9876543210"
    },
    paymentMethod: "Cash on Delivery",
    subtotal: 4497,
    shipping: 99,
    total: 4596
  };

  const orderSteps = [
    { label: "Order Confirmed", icon: CheckCircle, completed: true },
    { label: "Processing", icon: Package, completed: true },
    { label: "Shipped", icon: Truck, completed: false },
    { label: "Delivered", icon: Home, completed: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600">Thank you for your purchase. Your order has been placed successfully.</p>
          </div>

          {/* Order Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Order Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-semibold">{order.orderNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Order Date:</span>
                    <span>{order.orderDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <Badge className="bg-green-100 text-green-800">
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Delivery:</span>
                    <span>{order.estimatedDelivery}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Order Tracking */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orderSteps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={`p-2 rounded-full ${step.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'}`}>
                          <step.icon className="w-4 h-4" />
                        </div>
                        <span className={step.completed ? 'text-green-600 font-medium' : 'text-gray-500'}>
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-600">
                    <p className="font-semibold text-gray-900">{order.shippingAddress.name}</p>
                    <p>{order.shippingAddress.address}</p>
                    <p>{order.shippingAddress.city} - {order.shippingAddress.pincode}</p>
                    <p>{order.shippingAddress.phone}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Order Items */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Items</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 pb-4 border-b last:border-b-0">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-gray-600">
                          Qty: {item.quantity} | Size: {item.size} | Color: {item.color}
                        </p>
                        <p className="font-semibold text-brand-600">₹{item.price}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Order Total */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{order.subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>₹{order.shipping}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-3">
                    <span>Total:</span>
                    <span>₹{order.total}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-600">Payment Method:</span>
                    <span>{order.paymentMethod}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="space-y-3">
                <Link to="/products" className="block">
                  <Button className="w-full bg-brand-600 hover:bg-brand-700">
                    Continue Shopping
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Download Invoice
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderSummary;
