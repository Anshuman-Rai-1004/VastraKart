
// Authentication routes for VastraKart
// This will be replaced with Supabase Edge Functions

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/auth/register
router.post('/register', authController.register);

// POST /api/auth/login
router.post('/login', authController.login);

// POST /api/auth/logout
router.post('/logout', authController.logout);

// GET /api/auth/verify/:token
router.get('/verify/:token', authController.verifyEmail);

// POST /api/auth/forgot-password
router.post('/forgot-password', (req, res) => {
  // TODO: Implement forgot password functionality
  res.status(200).json({ message: 'Password reset email sent' });
});

// POST /api/auth/reset-password
router.post('/reset-password', (req, res) => {
  // TODO: Implement password reset functionality
  res.status(200).json({ message: 'Password reset successful' });
});

module.exports = router;
