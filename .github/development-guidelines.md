# SubTrackr Development Guidelines

## Project Overview
SubTrackr is a full-stack subscription management platform that helps users track, manage, and optimize their recurring subscriptions. The application consists of:

- **Frontend**: React + TypeScript + Material-UI + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB (NoSQL)
- **Authentication**: Google OAuth

## Architecture Guidelines

### Frontend (React + Material-UI)
- Use Material-UI components consistently
- Follow the established dark theme design system
- Implement responsive design patterns
- Use TypeScript for all components
- Follow React best practices with hooks and functional components
- Use React Router for navigation
- Implement proper error boundaries and loading states

### Backend (Node.js + Express)
- Use TypeScript for all server code
- Implement RESTful API endpoints
- Use Mongoose for MongoDB interactions
- Implement proper authentication middleware
- Use environment variables for configuration
- Implement proper error handling and logging
- Follow security best practices

### Database (MongoDB)
- Use Mongoose schemas for data modeling
- Implement proper indexes for performance
- Use proper validation at the schema level
- Follow MongoDB best practices for document design

## Key Features to Implement
1. **Subscription Management**: CRUD operations for subscriptions
2. **Email Integration**: Gmail API integration for auto-detection
3. **Analytics Dashboard**: Spending insights and visualizations
4. **Smart Reminders**: Configurable notification system
5. **User Preferences**: Customizable settings and preferences
6. **Data Export**: CSV/JSON export functionality

## Code Style Guidelines
- Use consistent naming conventions (camelCase for variables, PascalCase for components)
- Write descriptive variable and function names
- Add proper TypeScript types for all functions and variables
- Use async/await for asynchronous operations
- Implement proper error handling with try-catch blocks
- Add JSDoc comments for complex functions

## Security Considerations
- Never commit sensitive data like API keys
- Use environment variables for all configuration
- Implement proper input validation and sanitization
- Use HTTPS in production
- Implement rate limiting and security headers
- Follow OWASP security guidelines
