# Sanchit Bishwakarma - Modern GitHub-Style Portfolio

A high-performance, modular portfolio website that mirrors the GitHub UI aesthetics while providing a unique personal branding experience.

## ✨ Key Features

### 🧩 Modular Architecture (New!)
- **Component-Based HTML**: UI is broken down into reusable HTML fragments (Navbar, Sidebar, Footer, Sub-nav) loaded dynamically.
- **ES6 JavaScript Modules**: Logic is decoupled into dedicated modules for API, Rendering, Animations, and Feature management.
- **Atomic CSS**: Styles are organized into a tiered hierarchy (Base, Layout, Components, Utils) for extreme maintainability.

### 🌓 Dynamic Theming
- **Dual Theme Support**: Seamlessly toggle between GitHub Dark and Light modes.
- **Persistent Choice**: User preference is automatically saved in `localStorage`.
- **Fluid Transitions**: Smooth color transitions applied across the entire design system.

### 📊 Live GitHub Integration
- **Real-Time API Fetching**: Integration with GitHub REST API for public repositories and starred projects.
- **Dynamic Counters**: Live counts for Repositories and Stars fetched directly from the user profile.
- **Smart Caching**: Local caching of the "Overview" view for instant, zero-latency tab switching.

### 📱 Premium Responsive Design
- **Fluid Typography**: Responsive font scaling using CSS `clamp()` and rem units for perfect readability.
- **Context-Aware Layouts**: sidebar intelligently hides on mobile when viewing dynamic lists (Repos/Stars) to maximize screen space.
- **Smooth Interaction**: Native-feeling smooth scroll and hover micro-animations.

### 🎬 Professional Motion Design
- **Entrance Orchestration**: Staggered fade-in and slide-up entrance effects for all major UI blocks.
- **Animated Counters**: Ticking animation for contribution totals and analytics.

---

## 🛠️ Tech Stack

- **Core**: HTML5, CSS3 (Modular), JavaScript (ES6 Modules)
- **Libraries**: jQuery for component loading, DOM manipulation, and AJAX.
- **Icons**: Font Awesome 6.x for GitHub, YouTube, and brand iconography.
- **API**: GitHub REST API for live data integration.

---

## 📂 Project Structure

- `index.html` - Minimal shell that orchestrates component loading.
- `components/` - Reusable HTML fragments.
- `assets/css/` - Tiered CSS architecture (Base, Layout, Components, Utils).
- `assets/js/` - Modular logic (Core, Components, Features).
- `assets/js/app.js` - Central hub and component loader.
- `assets/js/data.js` - Local static data for legacy support.

---

## 🚀 Performance & SEO
- **Asynchronous Loading**: Components load in parallel for faster perceived performance.
- **Clean Codebase**: Removed all hardcoded decorative comments in favor of a clean, modular structure.
- **SEO Ready**: Full meta-tag support, Open Graph integration, and semantic HTML5.
