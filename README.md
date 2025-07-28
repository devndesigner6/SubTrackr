# SubTrackr 🚀

**Never miss a subscription deadline or waste money on forgotten auto-renewals**

![SubTrackr Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)

---

## 🌟 Overview

SubTrackr is a modern subscription management platform that helps you take control of your digital subscriptions. Built with React and Material-UI, it provides a clean, intuitive interface to track, manage, and optimize all your recurring payments.

### ✨ Key Features

🔍 **Smart Subscription Tracking**
- Comprehensive dashboard with real-time insights
- Category-based organization
- Status tracking (Active, Paused, Cancelled)

📊 **Advanced Analytics**
- Monthly and yearly spending trends
- Visual charts and graphs
- Category breakdown analysis
- Cost optimization insights

⏰ **Intelligent Reminders**
- Customizable notification settings
- Multiple reminder channels
- Renewal date tracking

🎨 **Modern Interface**
- Dark theme design
- Responsive across all devices
- Smooth animations and transitions
- Glassmorphism UI effects

---

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern JavaScript library
- **TypeScript** - Type-safe development
- **Material-UI v5** - Component library
- **Vite** - Fast build tool
- **Recharts** - Data visualization
- **React Router** - Navigation

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/subtrackr.git
   cd subtrackr
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server && npm install
   ```

3. **Environment Setup**
   
   Create `.env` in root directory:
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_GOOGLE_CLIENT_ID=your-google-client-id
   ```
   
   Create `server/.env`:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/subtrackr
   JWT_SECRET=your-secret-key
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. **Start Development**
   ```bash
   # Start frontend (from root)
   npm run dev
   
   # Start backend (in another terminal)
   npm run server
   ```

5. **Open Application**
   
   Navigate to `http://localhost:5173`

---

## 📱 Features in Detail

### Dashboard
- **Real-time Overview**: See all your subscriptions at a glance
- **Spending Analytics**: Track monthly and yearly expenses
- **Quick Actions**: Add subscriptions, scan emails, view reports
- **Upcoming Renewals**: Never miss a payment deadline

### Subscription Management
- **Add/Edit Subscriptions**: Complete CRUD operations
- **Category Organization**: Entertainment, Software, Productivity, etc.
- **Status Tracking**: Active, paused, or cancelled subscriptions
- **Bulk Operations**: Manage multiple subscriptions efficiently

### Analytics Dashboard
- **Spending Trends**: Visualize spending patterns over time
- **Category Breakdown**: See where your money goes
- **Cost Optimization**: Identify savings opportunities
- **Export Data**: Download reports in various formats

### Settings & Preferences
- **Profile Management**: Update personal information
- **Notification Settings**: Customize alert preferences
- **Privacy Controls**: Manage data and security settings
- **Theme Customization**: Personalize your experience

---

## 🎨 Design Philosophy

SubTrackr embraces modern design principles:

- **Minimalist Interface**: Clean, uncluttered layouts
- **Dark Theme**: Reduced eye strain for extended use
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Micro-interactions**: Smooth animations and feedback
- **Accessibility**: WCAG compliant for all users

---

## � Project Organization

The project follows a clean and intuitive structure:

- **Frontend**: Built with React and TypeScript, featuring modern components and responsive design
- **Backend**: Node.js server with Express framework and MongoDB integration
- **Authentication**: Secure Google OAuth implementation with JWT tokens
- **Database**: MongoDB for flexible data storage with Mongoose ODM
- **Development**: Configured with Vite for fast builds and hot reloading

---

## 🔧 Development

### Available Scripts

```bash
# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Backend
npm run server       # Start backend server
cd server && npm run dev     # Backend development mode
cd server && npm run build   # Build backend
```

### Code Style

- **ESLint**: Enforces consistent code style
- **TypeScript**: Type safety throughout the application
- **Prettier**: Automatic code formatting
- **Conventional Commits**: Standardized commit messages

---

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in your hosting platform

### Backend (Railway/Heroku)
1. Push to your repository
2. Connect to your hosting platform
3. Set environment variables
4. Deploy automatically on push

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- Recharts for beautiful data visualizations
- MongoDB for flexible data storage
- The open-source community for inspiration

---

## 📞 Contact

**Developer**: Hemanth Peddada  
**Email**: hemanth.peddada@example.com  
**LinkedIn**: [Hemanth Peddada](https://linkedin.com/in/hemanthpeddada)  
**Portfolio**: [Your Portfolio](https://hemanthpeddada.dev)

---

<div align="center">
  <p><strong>Built with ❤️ by Hemanth Peddada</strong></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
