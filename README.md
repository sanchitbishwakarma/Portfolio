# Portfolio

A modern, clean portfolio website built with HTML, CSS, and jQuery.

## Tech Stack & Implementation

### 🏗️ HTML (Structure)
- **Primary Layout**: Built using semantic HTML5 elements (`<nav>`, `<aside>`, `<main>`).
- **Components**: Documented the navbar, sidebar profile, and main content sections.
- **Metadata**: Implemented SEO tags, Open Graph (OG) tags for social sharing, and responsive viewport settings.

### 🎨 CSS (Styling)
- **Design System**: Used CSS Variables (`:root`) for the GitHub Dark theme.
- **Layouts**: Heavy use of **Flexbox** for alignment and **CSS Grid** for project/platform cards.
- **Responsive Design**: Custom Media Queries to ensure a seamless experience across mobile, tablet, and desktop.
- **Animations**: CSS transitions for smooth hover effects and border glows.

### ⚙️ JavaScript (Logic)
- **Data Rendering**: Custom functions to iterate through data and inject HTML dynamically.
- **Contribution Graph**: Logic to generate 365 days of activity with random intensity levels.
- **Animated Counter**: Used `setInterval` logic to create a ticking number effect for contribution counts.
- **Data Management**: Organized data into local constants to avoid CORS issues while maintaining a clean "JSON-like" structure.

### 🚀 jQuery (Interactivity)
- **DOM Manipulation**: Simplifies selecting and updating elements (e.g., `$("#pinnedProjects").html(html)`).
- **Event Handling**: Used for mobile menu toggles and specialized hover interactions.
- **Staggered Animations**: Leveraged `.animate()` and `.delay()` to create professional, sequential fade-in effects for project cards on load.

---

## Project Structure
- `index.html` - Main landing page
- `assets/` - Contains all static assets (CSS, JS, Images)
- `assets/css/` - Custom styling
- `assets/js/` - Logic (`app.js`) and Dynamic Data (`data.js`)
- `assets/img/` - Profile images, icons, and brand assets
