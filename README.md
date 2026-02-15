# Sanchit Bishwakarma - Modern GitHub-Style Portfolio

A high-performance, responsive portfolio website that mirrors the GitHub UI aesthetics while providing a unique personal branding experience.

## ✨ Key Features

### 🌓 Dynamic Theming
- **Dual Theme Support**: Seamlessly toggle between GitHub Dark and Light modes.
- **Persistent Choice**: User preference is automatically saved in `localStorage`.
- **Fluid Transitions**: Smooth color transitions applied to all UI components.

### 📊 Live GitHub Integration
- **AJAX Fetching**: Real-time integration with the GitHub API to fetch public repositories and starred projects.
- **Dynamic Counters**: Live counts for Repositories and Stars fetched directly from the user profile.
- **Overview Caching**: Instant switching between dynamic tabs (Repo/Stars) and the static overview using local caching.

### 📱 Premium Responsive Design
- **Fluid Typography**: Responsive font scaling using CSS `clamp()` and rem units for perfect readability on any screen size.
- **Mobile Optimized**: Intelligent sidebar management that hides profile details on mobile to maximize content space for dynamic lists.
- **Custom Grid Layouts**: Adaptive Flexbox and CSS Grid systems for project cards and platforms.

### 🎬 Professional Motion Design
- **Entrance Animations**: Staggered fade-in and slide-up entrance effects for all major sections (sidebar, headers, content cards, footer).
- **Interactive Micro-animations**: Smooth hover transitions on project cards and social icons.
- **Animated Counters**: Ticking animation for contribution totals.

---

## 🛠️ Tech Stack

- **Core**: HTML5, CSS3 (Vanilla), JavaScript (ES6+)
- **Libraries**: jQuery for powerful DOM manipulation and AJAX handling.
- **Icons**: Font Awesome 6.x for GitHub, YouTube, and brand iconography.
- **API**: GitHub REST API for dynamic content.

---

## 📂 Project Structure

- `index.html` - The central hub of the application.
- `assets/css/style.css` - Custom design system with theme variables and responsive utility.
- `assets/js/app.js` - Core logic, API handlers, tab management, and animations.
- `assets/js/data.js` - Static local data for YouTube, platforms, and activity timeline.
- `assets/img/` - Optimized assets, channel avatars, and platform icons.

---

## 🚀 Performance & SEO
- **No Dependencies**: Lightweight architecture with minimal overhead.
- **CORS-Proof**: Strategic mix of local data and authorized API calls.
- **SEO Ready**: Comprehensive meta tags and Open Graph support for social visibility.
