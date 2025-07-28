import express from 'express';
import User from '../models/User.js';
import { authenticateToken } from './auth.js';

const router = express.Router();

// Update user preferences
router.put('/preferences', authenticateToken, async (req: any, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { preferences: req.body },
      { new: true }
    ).select('-gmailTokens');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Invalid preferences data' });
  }
});

// Get user dashboard stats
router.get('/dashboard', authenticateToken, async (req: any, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-gmailTokens');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({
      user,
      lastEmailScan: user.lastEmailScan,
      isActive: user.isActive
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
