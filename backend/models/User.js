
// User model for VastraKart
// This will be replaced with Supabase database schema

const UserModel = {
  // User types: 'customer', 'vendor', 'admin'
  id: 'uuid',
  email: 'string',
  password: 'string', // hashed
  firstName: 'string',
  lastName: 'string',
  userType: 'enum', // customer, vendor, admin
  phone: 'string',
  address: {
    street: 'string',
    city: 'string',
    state: 'string',
    zipCode: 'string',
    country: 'string'
  },
  isVerified: 'boolean',
  isActive: 'boolean',
  createdAt: 'timestamp',
  updatedAt: 'timestamp',
  
  // Vendor specific fields
  businessName: 'string', // only for vendors
  businessLicense: 'string', // only for vendors
  isApproved: 'boolean', // only for vendors
  approvedAt: 'timestamp' // only for vendors
};

module.exports = UserModel;
