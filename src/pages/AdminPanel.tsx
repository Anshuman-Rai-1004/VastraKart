
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Users, Package, ShoppingCart } from "lucide-react";

const AdminPanel = () => {
  // Mock data
  const pendingVendors = [
    { id: 1, name: "Fashion Hub", email: "vendor@fashionhub.com", joinDate: "2024-01-15" },
    { id: 2, name: "Style Store", email: "contact@stylestore.com", joinDate: "2024-01-16" }
  ];

  const pendingProducts = [
    { 
      id: 1, 
      title: "Designer Kurta", 
      vendor: "Fashion Hub", 
      price: 1299, 
      category: "Men",
      submittedDate: "2024-01-15"
    },
    { 
      id: 2, 
      title: "Silk Saree", 
      vendor: "Style Store", 
      price: 4999, 
      category: "Women",
      submittedDate: "2024-01-16"
    }
  ];

  const stats = [
    { title: "Total Vendors", count: 25, icon: Users },
    { title: "Total Products", count: 150, icon: Package },
    { title: "Total Orders", count: 89, icon: ShoppingCart }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Panel</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.count}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-brand-600" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="vendors" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="vendors">Vendor Approvals</TabsTrigger>
            <TabsTrigger value="products">Product Approvals</TabsTrigger>
          </TabsList>

          <TabsContent value="vendors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Vendor Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                {pendingVendors.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">No pending vendor approvals</p>
                ) : (
                  <div className="space-y-4">
                    {pendingVendors.map((vendor) => (
                      <div key={vendor.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{vendor.name}</h3>
                          <p className="text-sm text-gray-600">{vendor.email}</p>
                          <p className="text-sm text-gray-500">Applied: {vendor.joinDate}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Product Approvals</CardTitle>
              </CardHeader>
              <CardContent>
                {pendingProducts.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">No pending product approvals</p>
                ) : (
                  <div className="space-y-4">
                    {pendingProducts.map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{product.title}</h3>
                          <p className="text-sm text-gray-600">by {product.vendor}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge variant="outline">{product.category}</Badge>
                            <span className="text-sm font-medium text-brand-600">₹{product.price}</span>
                          </div>
                          <p className="text-sm text-gray-500">Submitted: {product.submittedDate}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AdminPanel;
