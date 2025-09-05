# Contributing to Portfolio Website

Thank you for your interest in contributing to this portfolio website! This document provides guidelines and information for contributors.

## 🤖 AI-Assisted Development

This project was created with significant AI assistance using Claude (Anthropic). We welcome contributions that enhance the AI-assisted development workflow and demonstrate the power of human-AI collaboration.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio-website.git
   cd portfolio-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   - Main site: `http://localhost:5173`
   - Admin panel: `http://localhost:5173/admin`

## 📝 How to Contribute

### Types of Contributions

1. **Bug Fixes**
   - Fix existing issues
   - Improve error handling
   - Enhance performance

2. **New Features**
   - Add new components
   - Enhance admin functionality
   - Improve user experience

3. **Documentation**
   - Improve README
   - Add code comments
   - Create tutorials

4. **AI Integration**
   - Enhance AI-assisted development features
   - Improve AI tool documentation
   - Add AI-powered functionality

### Contribution Process

1. **Create an Issue**
   - Describe the problem or feature request
   - Use appropriate labels
   - Provide context and examples

2. **Fork the Repository**
   ```bash
   git fork https://github.com/ORIGINAL_OWNER/portfolio-website.git
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow existing code style
   - Add tests if applicable
   - Update documentation

5. **Test Your Changes**
   ```bash
   npm run build
   npm run preview
   npm run lint
   ```

6. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

7. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**
   - Provide a clear description
   - Link related issues
   - Include screenshots if applicable

## 📋 Code Style Guidelines

### TypeScript
- Use strict type checking
- Define interfaces for all data structures
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### React
- Use functional components with hooks
- Implement proper error boundaries
- Follow React best practices
- Use TypeScript for all components

### Tailwind CSS
- Use utility classes consistently
- Create custom components for repeated patterns
- Follow responsive design principles
- Use semantic color names

### File Organization
```
src/
├── components/
│   ├── admin/          # Admin dashboard components
│   ├── layout/         # Layout components
│   ├── sections/       # Main page sections
│   └── ui/             # Reusable UI components
├── lib/                # Utilities and data
├── pages/              # Page components
└── assets/             # Images and static files
```

## 🧪 Testing

### Manual Testing
- Test on different screen sizes
- Verify admin panel functionality
- Check local storage persistence
- Test deployment build

### Automated Testing
```bash
# Run linting
npm run lint

# Build test
npm run build

# Preview test
npm run preview
```

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for functions
- Include inline comments for complex logic
- Document component props and usage
- Update README for new features

### AI Tools Documentation
- Document any new AI integrations
- Update AI_TOOLS_USED.md
- Explain AI-assisted development processes
- Share AI prompts and workflows

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment Information**
   - Operating System
   - Browser version
   - Node.js version

2. **Steps to Reproduce**
   - Clear, numbered steps
   - Expected vs actual behavior
   - Screenshots or videos

3. **Additional Context**
   - Error messages
   - Console logs
   - Related issues

## 💡 Feature Requests

When requesting features, please include:

1. **Problem Description**
   - What problem does this solve?
   - Who would benefit from this feature?

2. **Proposed Solution**
   - How should this feature work?
   - Any design mockups or examples?

3. **Alternatives Considered**
   - Other ways to solve this problem
   - Why this approach is preferred

## 🤖 AI-Assisted Contributions

We encourage contributions that leverage AI tools:

### AI Code Generation
- Use AI to generate boilerplate code
- Document AI prompts and workflows
- Share AI-assisted development techniques

### AI Documentation
- Use AI to improve documentation
- Generate code examples
- Create tutorials and guides

### AI Testing
- Use AI to generate test cases
- Automate testing workflows
- Improve test coverage

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## 📞 Support

If you need help contributing:

1. Check existing issues and discussions
2. Read the documentation
3. Join our community discussions
4. Contact maintainers

---

**Thank you for contributing to this AI-assisted portfolio project! 🎉**
