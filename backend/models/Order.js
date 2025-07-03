
// Order model for VastraKart
// This will be replaced with Supabase database schema

const OrderModel = {
  id: 'uuid',
  customerId: 'uuid', // Foreign key to User
  orderNumber: 'string', // unique order identifier
  items: 'array', // array of order items
  totalAmount: 'decimal',
  discountAmount: 'decimal',
  taxAmount: 'decimal',
  shippingAmount: 'decimal',
  finalAmount: 'decimal',
  status: 'enum', // pending, confirmed, shipped, delivered, cancelled
  paymentStatus: 'enum', // pending, paid, failed, refunded
  paymentMethod: 'string',
  shippingAddress: {
    firstName: 'string',
    lastName: 'string',
    phone: 'string',
    street: 'string',
    city: 'string',
    state: 'string',
    zipCode: 'string',
    country: 'string'
  },
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
  deliveredAt: 'timestamp'
};

const OrderItemModel = {
  id: 'uuid',
  orderId: 'uuid', // Foreign key to Order
  productId: 'uuid', // Foreign key to Product
  vendorId: 'uuid', // Foreign key to User (vendor)
  quantity: 'integer',
  price: 'decimal', // price at time of order
  size: 'string',
  color: 'string',
  status: 'enum' // pending, confirmed, shipped, delivered, cancelled
};

module.exports = { OrderModel, OrderItemModel };
