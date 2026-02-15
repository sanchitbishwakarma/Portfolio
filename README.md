# Sanchit Bishwakarma - Modern GitHub-Style Portfolio

A high-performance, modular portfolio website that mirrors the GitHub UI aesthetics while providing a unique personal branding experience.

## Key Features

### Modular Architecture
- **Component-Based HTML**: UI is broken down into reusable HTML fragments (Navbar, Sidebar, Footer, Sub-nav) loaded dynamically.
- **ES6 JavaScript Modules**: Logic is decoupled into dedicated modules for API, Rendering, Animations, and Feature management.
- **Atomic CSS**: Styles are organized into a tiered hierarchy (Base, Layout, Components, Utils) for extreme maintainability.

### Dynamic Theming
- **Dual Theme Support**: Seamlessly toggle between GitHub Dark and Light modes.
- **Persistent Choice**: User preference is automatically saved in `localStorage`.
- **Fluid Transitions**: Smooth color transitions applied across the entire design system.

### Live GitHub Integration
- **Real-Time API Fetching**: Integration with GitHub REST API for public repositories and starred projects.
- **Dynamic Counters**: Live counts for Repositories and Stars fetched directly from the user profile.
- **Smart Caching**: Local caching of the "Overview" view for instant, zero-latency tab switching.

### Premium Responsive Design
- **Fluid Typography**: Responsive font scaling using CSS `clamp()` and rem units for perfect readability.
- **Context-Aware Layouts**: sidebar intelligently hides on mobile when viewing dynamic lists (Repos/Stars) to maximize screen space.
- **Smooth Interaction**: Native-feeling smooth scroll and hover micro-animations.

### Professional Motion Design
- **Entrance Orchestration**: Staggered fade-in and slide-up entrance effects for all major UI blocks.
- **Animated Counters**: Ticking animation for contribution totals and analytics.

---

## 🛠️ Technology Breakdown

### HTML (The Structure)
- **Modular Shell**: Created a clean `index.html` structure that acts as a container for dynamic components.
- **Component System**: Extracted core pieces (Navbar, Sidebar, Footer, Sub-nav) into separate files for better organization.
- **Semantic Tags**: Used HTML5 semantic elements (`<main>`, `<aside>`, `<nav>`) to ensure accessibility and SEO.

### CSS (The Design & UI)
- **Aesthetic Styling**: implemented a professional GitHub-inspired design system with precise color palettes.
- **Atomic Architecture**: Decoupled styles into `base` (variables/reset), `layout` (structure), and `components` (cards/widgets).
- **Responsive Fluidity**: Engineered custom media queries and dynamic scaling (`clamp()`) to ensure the UI looks premium on mobile and desktop.
- **Animations**: Defined keyframes for fade-ins, spinners, and slide-up effects.

### JavaScript (The Logic & Manipulation)
- **ES6 Modules**: Organized logic into modules for clarity (e.g., `theme.js`, `tabs.js`).
- **Variable & Data Manipulation**: Handled the transformation of raw data from `data.js` into interactive UI elements.
- **State Management**: managed theme persistence (Dark/Light mode) using `localStorage`.

### jQuery (The Bridge)
- **Dynamic Loading**: Used it to inject modular HTML components into the main shell.
- **DOM Orchestration**: Simplified selecting and updating page elements in real-time.
- **Event Delegation**: Handled complex user interactions like tab switching and the status icon easter egg.

### AJAX (The Fetching)
- **Live GitHub Integration**: Fetched real-time user profile data and repository counts from the GitHub API.
- **Dynamic Data Streams**: Pulled list-based data for the "Repositories" and "Stars" tabs without page reloads.

---

## Project Structure

- `index.html` - Minimal shell that orchestrates component loading.
- `components/` - Reusable HTML fragments.
- `assets/css/` - Tiered CSS architecture (Base, Layout, Components, Utils).
- `assets/js/` - Modular logic (Core, Components, Features).
- `assets/js/app.js` - Central hub and component loader.
- `assets/js/data.js` - Local static data for legacy support.

---

## Performance & SEO
- **Asynchronous Loading**: Components load in parallel for faster perceived performance.
- **Clean Codebase**: Removed all hardcoded decorative comments in favor of a clean, modular structure.
- **SEO Ready**: Full meta-tag support, Open Graph integration, and semantic HTML5.
