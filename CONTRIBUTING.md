# Contributing to SubTrackr

Thank you for your interest in contributing to SubTrackr! This document provides guidelines and information for contributors.

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB
- Git

### Development Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/subtrackr.git`
3. Install dependencies: `npm install`
4. Install backend dependencies: `cd server && npm install`
5. Set up environment variables (see README.md)
6. Start development servers

## How to Contribute

### Reporting Bugs
- Use the GitHub Issues tab
- Provide detailed description
- Include steps to reproduce
- Add screenshots if applicable

### Suggesting Features
- Open an issue with "Feature Request" label
- Describe the feature and its benefits
- Provide mockups or examples if possible

### Code Contributions

#### Pull Request Process
1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Write or update tests if needed
4. Follow the coding standards
5. Commit with descriptive messages
6. Push to your fork
7. Create a Pull Request

#### Coding Standards
- Use TypeScript for all new code
- Follow existing code style
- Write meaningful variable and function names
- Add comments for complex logic
- Ensure responsive design for UI changes

#### Commit Messages
Use conventional commit format:
- `feat: add new feature`
- `fix: resolve bug`
- `docs: update documentation`
- `style: formatting changes`
- `refactor: code restructuring`
- `test: add or modify tests`

## Project Structure

```
subtrackr/
├── src/                # Frontend source
│   ├── components/     # Reusable components
│   ├── pages/         # Main pages
│   ├── contexts/      # React contexts
│   └── services/      # API services
├── server/            # Backend source
│   ├── src/
│   │   ├── models/    # Database models
│   │   └── routes/    # API routes
└── public/           # Static assets
```

## Development Guidelines

### Frontend
- Use Material-UI components
- Implement responsive design
- Follow React best practices
- Use TypeScript interfaces

### Backend
- Use Express.js patterns
- Implement proper error handling
- Use Mongoose for database operations
- Follow RESTful API design

### Testing
- Write unit tests for new features
- Test UI components
- Ensure API endpoints work correctly

## Review Process

All submissions require review. We use GitHub pull requests for this purpose. Here's what we look for:

- Code quality and style
- Functionality and correctness
- Performance considerations
- Security implications
- Documentation updates

## Questions?

Feel free to open an issue for any questions or join our community discussions.

Thank you for contributing to SubTrackr!
