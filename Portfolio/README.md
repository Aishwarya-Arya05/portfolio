# 🚀 Aishwarya Arya - Portfolio Website

A thoroughly customized, highly interactive, and visually striking portfolio website built to showcase my skills, projects, and achievements as a Developer & Designer. 

This project deviates from standard, template-based aesthetics by embracing a bespoke **Cyber Aurora Neon** dark mode design, advanced component physics, and synchronized interactive elements.

## ✨ Distinguishing Features

- **Cyber Aurora Theme**: Distinctive deep Midnight Slate background (`#020617`) illuminated by vibrant Neon Teal (`#2dd4bf`) and Neon Rose (`#fb7185`) gradients.
- **Glassmorphism & Frosted UI**: Premium blurred backgrounds on navigation docks, skill cards, and layout elements mimicking macOS depth-mapping.
- **Micro-interactions & Physics**: Powered by **Framer Motion**, offering perfectly synchronized scroll-reveal entries, 3D hover-lifts, and responsive tilt mechanics.
- **Custom Liquid Cursor**: Replaces the standard browser pointer with an animated, magnetic indigo tracker that smartly highlights interactive components.
- **3D Canvas Background**: Built with `@react-three/fiber` to dynamically render thousands of color-themed orbital stars and sparkles.
- **Dynamic Hero Section**: Contains floating orbital technology icons (React, NodeJS, MongoDB) continuously revolving around the main profile image.
- **SEO & Performance Optimized**: Utilizes modern semantic component splitting, lightweight parcel bundling, and optimized assets.

---

## 📂 Project & Path Structure

Here is an outline of the primary codebase directory paths to help navigate the ecosystem:

```text
Portfolio/
├── index.html                  # Main entry page & global font imports (Space Grotesk & Inter)
├── index.js                    # React root renderer and primary App component hub
├── package.json                # Project dependencies (Framer Motion, Three.js, Tailwind, etc.)
├── tailwind.config.js          # Tailwind styling rules and configurations
└── src/                        # Core Application Source Code
    ├── index.css               # Global theme variables, animations, and CSS configurations
    ├── CustomCursor.js         # The interactive magnetic UI cursor component
    ├── ThemeContext.js         # Light/Dark mode state management
    ├── Loader.js               # Initial startup animation sequence
    ├── Background3D.js         # Interactive Three.js canvas (Stars & Sparkles)
    ├── navbar.js               # Floating macOS-style glass navigation dock
    ├── About.js                # Hero section handling introduction text
    ├── body.js                 # Hero section hosting the profile image and orbital tech icons
    ├── techStack.js            # Hover-reactive cards showcasing categorized technical skills
    ├── projects.js             # Featured development projects with GitHub integration links
    ├── education.js            # Interactive alternating timeline component documenting academics
    ├── achievements.js         # Competitive programming and problem-solving badges
    ├── certificates.js         # Downloadable course completions and software simulations
    ├── codingProfiles.js       # Dynamic links to Leetcode, CodeChef, and HackerRank
    ├── contact.js              # Secure contact form synced to EmailJS
    ├── ChatBot/                # Directory housing AI chat assistant components
    └── image/                  # Static image assets (Profile pics, etc.)
```

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19, JavaScript (ES6+), HTML5
- **Styling**: Tailwind CSS v4, Vanilla CSS (Keyframe animations)
- **Animations & Physics**: Framer Motion, GSAP
- **3D Rendering**: Three.js, React Three Fiber, React Three Drei
- **Backend Sync**: EmailJS integrated contact form
- **Bundler**: Parcel v2

---

## 🚀 Getting Started Locally

Follow these quick steps to run the portfolio on your own machine.

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn installed

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Aishwarya-Arya05/portfolio.git
cd portfolio/Portfolio
```

2. **Install all dependencies**
```bash
npm install
```

3. **Start the Development Server**
Launch the hot-reloading local server using Parcel.
```bash
npm run dev
```

4. **Open in your Browser**
Navigate to `http://localhost:1234` in your browser to view the application in action.

---

## 🌐 Deployment
When ready to push to production (like Vercel or Netlify), bundle the optimized assets using: 
```bash
npm run build
```

---

**Designed and Built with 💻 by Aishwarya Arya**
