import express from 'express';
import Subscription from '../models/Subscription.js';
import { authenticateToken } from './auth.js';

const router = express.Router();

// Get all subscriptions for user
router.get('/', authenticateToken, async (req: any, res) => {
  try {
    const subscriptions = await Subscription.find({ userId: req.user.userId })
      .sort({ nextBillingDate: 1 });
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new subscription
router.post('/', authenticateToken, async (req: any, res) => {
  try {
    const subscription = new Subscription({
      ...req.body,
      userId: req.user.userId
    });
    await subscription.save();
    res.status(201).json(subscription);
  } catch (error) {
    res.status(400).json({ message: 'Invalid subscription data' });
  }
});

// Update subscription
router.put('/:id', authenticateToken, async (req: any, res) => {
  try {
    const subscription = await Subscription.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.json(subscription);
  } catch (error) {
    res.status(400).json({ message: 'Invalid subscription data' });
  }
});

// Delete subscription
router.delete('/:id', authenticateToken, async (req: any, res) => {
  try {
    const subscription = await Subscription.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.json({ message: 'Subscription deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get subscription analytics
router.get('/analytics', authenticateToken, async (req: any, res) => {
  try {
    const subscriptions = await Subscription.find({ userId: req.user.userId });
    
    const totalMonthly = subscriptions.reduce((total, sub) => {
      if (sub.status === 'active') {
        switch (sub.billingCycle) {
          case 'monthly':
            return total + sub.cost.amount;
          case 'yearly':
            return total + (sub.cost.amount / 12);
          case 'quarterly':
            return total + (sub.cost.amount / 3);
          case 'weekly':
            return total + (sub.cost.amount * 4.33);
          default:
            return total;
        }
      }
      return total;
    }, 0);
    
    const totalYearly = totalMonthly * 12;
    
    const categoriesData = subscriptions.reduce((acc: any, sub) => {
      if (sub.status === 'active') {
        acc[sub.category] = (acc[sub.category] || 0) + sub.cost.amount;
      }
      return acc;
    }, {});
    
    res.json({
      totalMonthly: totalMonthly.toFixed(2),
      totalYearly: totalYearly.toFixed(2),
      totalSubscriptions: subscriptions.length,
      activeSubscriptions: subscriptions.filter(s => s.status === 'active').length,
      categoriesData,
      upcomingRenewals: subscriptions
        .filter(s => s.status === 'active')
        .sort((a, b) => new Date(a.nextBillingDate).getTime() - new Date(b.nextBillingDate).getTime())
        .slice(0, 5)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
