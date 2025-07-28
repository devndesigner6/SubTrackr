import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  cost: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'USD'
    }
  },
  billingCycle: {
    type: String,
    enum: ['monthly', 'yearly', 'weekly', 'quarterly', 'one-time'],
    required: true
  },
  nextBillingDate: {
    type: Date,
    required: true
  },
  lastBillingDate: Date,
  category: {
    type: String,
    enum: ['entertainment', 'productivity', 'finance', 'health', 'education', 'software', 'other'],
    default: 'other'
  },
  status: {
    type: String,
    enum: ['active', 'cancelled', 'paused', 'trial'],
    default: 'active'
  },
  provider: String,
  website: String,
  logo: String,
  tags: [String],
  reminderSettings: {
    enabled: {
      type: Boolean,
      default: true
    },
    daysBefore: {
      type: Number,
      default: 3
    },
    methods: [{
      type: String,
      enum: ['email', 'sms', 'push']
    }]
  },
  autoDetected: {
    type: Boolean,
    default: false
  },
  sourceEmail: {
    messageId: String,
    subject: String,
    from: String,
    date: Date
  },
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

subscriptionSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model('Subscription', subscriptionSchema);
