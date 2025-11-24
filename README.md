<div align="center">

# 🚀 CodeFlow AI

### AI-Powered Development Platform

_Build faster, smarter, and better with intelligent code completion, automated testing, and smart debugging._

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

[Live Demo](https://rohan-prasen.github.io/codeflow-ai) • [Report Bug](https://github.com/rohan-prasen/codeflow-ai/issues) • [Request Feature](https://github.com/rohan-prasen/codeflow-ai/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Scripts](#-scripts)
- [Components](#-components)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**CodeFlow AI** is a modern, responsive landing page showcasing an AI-powered development platform. Built with cutting-edge technologies, this project demonstrates professional web development practices, elegant UI/UX design, and seamless user interactions.

### ✨ Key Highlights

- **🎨 Modern Design**: Glassmorphism effects, gradient overlays, and smooth animations
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop viewports
- **⚡ Lightning Fast**: Built with Vite for instant hot module replacement (HMR)
- **♿ Accessible**: Semantic HTML and ARIA-compliant components
- **🎭 Interactive**: Dynamic code examples with syntax highlighting
- **🎯 SEO Optimized**: Clean structure and semantic markup for better search rankings

---

## 🚀 Features

### 🎯 Core Features

| Feature                     | Description                                                   |
| --------------------------- | ------------------------------------------------------------- |
| **AI Code Completion**      | Real-time intelligent code suggestions powered by advanced AI |
| **Automated Testing**       | Generate comprehensive test suites automatically              |
| **Smart Debugging**         | AI-powered error detection and resolution suggestions         |
| **Responsive Design**       | Seamless experience across all devices                        |
| **Interactive Code Editor** | Live syntax highlighting with theme support                   |
| **Smooth Animations**       | Custom CSS animations for enhanced UX                         |

### 🎨 UI Components

- **Hero Section**: Eye-catching introduction with animated gradients and interactive code viewer
- **Features Section**: Alternating layout showcasing core capabilities with live code examples
- **Pricing Section**: Flexible pricing tiers with hover effects and highlighted popular plan
- **Testimonials**: Customer feedback with professional card layouts
- **Responsive Navigation**: Mobile-friendly hamburger menu with smooth transitions
- **Footer**: Comprehensive footer with social links and navigation

---

## 🛠️ Tech Stack

<div align="center">

### Frontend

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

### Libraries & Tools

[![Lucide React](https://img.shields.io/badge/Lucide_Icons-0.554.0-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![React Syntax Highlighter](https://img.shields.io/badge/Syntax_Highlighter-15.6.6-000000?style=for-the-badge&logo=javascript&logoColor=white)](https://react-syntax-highlighter.github.io/react-syntax-highlighter/)
[![ESLint](https://img.shields.io/badge/ESLint-9.39.1-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

</div>

### 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "tailwindcss": "^4.1.17",
  "lucide-react": "^0.554.0",
  "react-syntax-highlighter": "^15.6.6",
  "vite": "^7.2.2"
}
```

---

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 or higher) or **yarn**
- **Git** - [Download](https://git-scm.com/)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/rohan-prasen/codeflow-ai.git
cd fullstack
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**

Navigate to `http://localhost:5173` to view the application.

---

## 📁 Project Structure

```
fullstack/
├── public/
│   └── react.svg              # React logo asset
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar with mobile menu
│   │   ├── Hero.jsx           # Hero section with code viewer
│   │   ├── Features.jsx       # Features showcase section
│   │   ├── Pricing.jsx        # Pricing plans section
│   │   ├── Testimonials.jsx   # Customer testimonials
│   │   └── Footer.jsx         # Footer component
│   ├── data/
│   │   └── CodeExamples.js    # Code snippets and floating card data
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # Application entry point
│   └── index.css              # Global styles and animations
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
├── package.json               # Project dependencies
└── README.md                  # Project documentation
```

---

## 📜 Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build production-ready bundle            |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint to check code quality         |

---

## 🧩 Components

### Navbar

- Responsive navigation with mobile hamburger menu
- Smooth scroll to sections
- Logo with home link
- Glassmorphism backdrop effect

### Hero

- Interactive code viewer with tabbed navigation
- Mouse-tracking gradient effect
- Animated headings with gradient text
- Floating feature cards
- Custom scrollbar styling

### Features

- Alternating left/right layout
- Live code snippets with syntax highlighting
- Hover effects with gradient borders
- IDE-style code presentation

### Pricing

- Three-tier pricing structure
- "Most Popular" badge with star icon
- Feature comparison with checkmarks
- Hover animations and gradient effects

### Testimonials

- Customer feedback cards
- Profile images and roles
- Quote styling with gradient accents
- Responsive two-column layout

### Footer

- Company information
- Social media links
- Navigation links
- Copyright notice

---

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Update `vite.config.js`**

```javascript
export default {
  base: "/codeflow-ai/", // Replace with your repo name
};
```

2. **Install gh-pages**

```bash
npm install --save-dev gh-pages
```

3. **Add deployment scripts to `package.json`**

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**

```bash
npm run deploy
```

5. **Configure GitHub Pages**

Go to your repository → Settings → Pages → Select `gh-pages` branch

Your site will be live at: `https://your-username.github.io/codeflow-ai`

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/codeflow-ai)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/codeflow-ai)

---

## 🎨 Customization

### Color Scheme

The project uses a modern dark theme with blue/cyan accents. To customize colors, modify the Tailwind classes in components:

- **Primary**: `blue-400`, `blue-500`, `blue-600`
- **Secondary**: `cyan-400`, `cyan-500`
- **Background**: `slate-900`, `slate-950`
- **Text**: `white`, `gray-300`, `gray-400`

### Animations

Custom animations are defined in `src/index.css`:

```css
.animate-in {
  animation-fill-mode: both;
}
.slide-in-from-top {
  animation-name: slideInFromTop;
}
.slide-in-from-bottom {
  animation-name: slideInFromBottom;
}
.duration-700 {
  animation-duration: 700ms;
}
.ease-out {
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Code Style

- Follow ESLint rules configured in the project
- Use functional components with hooks
- Write clean, self-documenting code
- Add comments for complex logic

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Rohan Prasen Kedari**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rohan-prasen-kedari)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rohan-prasen)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:rohanprasenkedari@gmail.com)

**Project Link**: [https://github.com/rohan-prasen/codeflow-ai](https://github.com/rohan-prasen/codeflow-ai)

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Made with ❤️ and React**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=rohan-prasen.codeflow-ai)

</div>
