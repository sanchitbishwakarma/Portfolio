# 🔥 GitHub Profile Clone - Built with HTML + CSS + JS + jQuery + AJAX + JSON

## ✅ EXACTLY What You Asked For

No frameworks. No magic. Just **clean fundamentals**.

---

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main structure
├── css/
│   └── style.css          # GitHub dark theme (exact colors)
├── js/
│   └── app.js             # AJAX + animations
├── data/
│   ├── projects.json      # Pinned projects data
│   ├── youtube.json       # YouTube channels data
│   └── activity.json      # Activity timeline data
└── images/
    └── Profile_Sanchit.jpg
```

---

## 🎯 How It Works

### 1. **Layout** (Flexbox + Grid)

```css
.container {
  display: flex;  /* Sidebar + Content */
}

.pinned-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);  /* 2 columns */
}
```

### 2. **Theme** (GitHub Dark - Exact Colors)

```css
:root {
  --bg: #0d1117;
  --card: #161b22;
  --border: #30363d;
  --text: #c9d1d9;
  --link: #58a6ff;
}
```

### 3. **Data Loading** (AJAX like React fetch)

```javascript
$.getJSON("data/projects.json", function(data) {
  data.forEach(project => {
    // Render project card
  });
});
```

---

## ✨ Features Implemented

- ✅ **Exact GitHub layout** (Sidebar + Content)
- ✅ **Dark theme** (Matching GitHub colors)
- ✅ **Pinned projects** (Loaded via AJAX from JSON)
- ✅ **YouTube section** (Loaded via AJAX)
- ✅ **Contribution graph** (Generated with JS)
- ✅ **Activity timeline** (Loaded via AJAX)
- ✅ **Hover effects** (Border glow, lift animation)
- ✅ **Responsive** (Mobile, Tablet, Desktop)
- ✅ **Animated counter** (Contribution count)

---

## 🎨 Design Principles

### Hover Effects
```css
.project-card:hover {
  border-color: var(--link);
  transform: translateY(-4px);
}
```

### Smooth Transitions
```css
.project-card {
  transition: 0.3s ease;
}
```

### Grid Layout
```css
.pinned-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
```

---

## 📝 How to Customize

### Add Your Projects

Edit `data/projects.json`:

```json
{
  "title": "Your Project",
  "description": "Description here",
  "language": "JavaScript",
  "languageColor": "#f0db4f",
  "stars": 100,
  "forks": 20,
  "image": "https://..."
}
```

### Change Colors

Edit `css/style.css`:

```css
:root {
  --link: #58a6ff;  /* Change link color */
  --green: #238636; /* Change accent */
}
```

---

## 🚀 Why This Approach Works

### ✅ **Organized Like a Framework**
- Separate data (JSON)
- Separate styles (CSS)
- Separate logic (JS)

### ✅ **Dynamic Like React**
- AJAX data loading
- Component-like rendering
- State management

### ✅ **Professional**
- Clean code structure
- Reusable patterns
- Maintainable

---

## 🚀 Next Steps

1. **Add your real data** to JSON files
2. **Customize colors** in CSS
3. **Add more sections** (repos, stars, etc.)
4. **Deploy** to GitHub Pages

---

**Made with fundamentals. Built to last.**
