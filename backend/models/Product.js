
// Product model for VastraKart
// This will be replaced with Supabase database schema

const ProductModel = {
  id: 'uuid',
  vendorId: 'uuid', // Foreign key to User
  title: 'string',
  description: 'text',
  category: 'string', // Men, Women, Kids, Accessories
  subCategory: 'string', // T-Shirt, Dress, Jacket, etc.
  price: 'decimal',
  originalPrice: 'decimal',
  discount: 'integer', // percentage
  images: 'array', // array of image URLs
  sizes: 'array', // [S, M, L, XL, XXL]
  colors: 'array', // [Red, Blue, Green]
  stock: 'integer',
  sku: 'string',
  brand: 'string',
  material: 'string',
  isActive: 'boolean',
  isApproved: 'boolean', // admin approval
  approvedAt: 'timestamp',
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
  
  // SEO fields
  metaTitle: 'string',
  metaDescription: 'string',
  tags: 'array'
};

module.exports = ProductModel;
