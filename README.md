# 🚀 Portfolio Website - GitHub Style

A stunning portfolio website inspired by hitesh.ai, built with pure HTML, CSS, JavaScript, and jQuery.

## ✨ Features

- **GitHub-style Dark Theme** - Professional dark mode design
- **Fully Responsive** - Works perfectly on all devices
- **Smooth Animations** - Fade-ins, hover effects, and scroll animations
- **Dynamic Content** - All data loaded from JavaScript objects
- **No Backend Required** - Pure frontend implementation
- **jQuery Powered** - Smooth interactions and animations

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── Style/
│   └── style.css       # All styles and animations
├── js/
│   └── main.js         # JavaScript with all data and functionality
├── images/
│   └── profile.jpg     # Your profile picture (add your own)
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Update Your Information

Open `js/main.js` and edit the `portfolioData` object:

#### Personal Info (in HTML)
Edit `index.html` lines 50-75:
- Name
- Username
- Bio
- Social media links
- Email address

#### Projects
```javascript
projects: [
    {
        title: "Your Project Name",
        description: "Project description",
        icon: "fab fa-discord",  // Font Awesome icon
        badge: "Public",
        tags: ["JavaScript", "React", "Node.js"],
        stars: 127,
        forks: 23,
        link: "https://github.com/sanchitbishwakarma/project"
    }
]
```

#### Skills
```javascript
skills: [
    {
        name: "JavaScript",
        icon: "fab fa-js",
        level: "Expert",
        percentage: 95,
        color: "#f0db4f"
    }
]
```

#### Platforms (YouTube, Blog, etc.)
```javascript
platforms: [
    {
        name: "YouTube Channel",
        icon: "fab fa-youtube",
        description: "Your channel description",
        subscribers: "12.5K",
        videos: 145,
        link: "https://youtube.com/@yourchannel"
    }
]
```

### 2. Add Your Images

#### Profile Picture
- Add your profile picture to `images/profile.jpg`
- Recommended size: 400x400px
- Format: JPG or PNG

#### Project Images (Optional)
If you want project thumbnails:
1. Uncomment the image line in `main.js` (line 85)
2. Add images to `images/` folder
3. Update the `image` property in each project

### 3. Update Social Links

Edit `index.html` lines 60-74:
```html
<a href="https://twitter.com/sanchitbishwakarma" target="_blank" class="social-link">
    <i class="fab fa-twitter"></i>
</a>
```

Replace with your actual social media URLs.

### 4. Color Customization

Edit `Style/style.css` CSS variables (lines 6-18):
```css
:root {
    --bg-primary: #0d1117;
    --text-link: #58a6ff;
    --accent-primary: #238636;
    /* ... more colors */
}
```

## 🚀 How to Run

### Option 1: Direct Open
Simply open `index.html` in your browser!

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 📱 Responsive Breakpoints

- **Desktop**: 1280px and above
- **Tablet**: 768px - 1279px
- **Mobile**: Below 768px

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📦 Dependencies

All dependencies are loaded via CDN:
- **jQuery 3.6.0** - DOM manipulation and animations
- **Font Awesome 6.4.0** - Icons
- **Google Fonts (Inter)** - Typography

## 🎨 Font Awesome Icons

Find more icons at [fontawesome.com](https://fontawesome.com/icons):
- `fab fa-github` - GitHub
- `fab fa-twitter` - Twitter
- `fab fa-linkedin` - LinkedIn
- `fas fa-envelope` - Email
- And 1000+ more!

## 💡 Tips

1. **Profile Image**: Use a professional photo with good lighting
2. **Projects**: Showcase your best 4-6 projects
3. **Skills**: List skills you're genuinely proficient in
4. **Links**: Make sure all links are working
5. **Content**: Keep descriptions concise and impactful

## 🐛 Troubleshooting

### Images not showing?
- Check file paths are correct
- Ensure images are in the `images/` folder
- Check file extensions match (jpg vs jpeg)

### Animations not working?
- Make sure jQuery is loaded (check browser console)
- Clear browser cache
- Check for JavaScript errors in console

### Mobile menu not working?
- Ensure jQuery is loaded
- Check that `main.js` is properly linked

## 🔧 Advanced Customization

### Add More Sections
1. Add HTML section in `index.html`
2. Add styles in `style.css`
3. Add navigation link in navbar

### Change Animation Speed
Edit `style.css` line 24:
```css
--transition-fast: 0.2s ease;
--transition-normal: 0.3s ease;
```

### Add More Projects
Just add more objects to the `projects` array in `main.js`!

## 📄 License

Free to use for personal portfolios. Give credit if you want! 😊

## 🤝 Credits

- Design inspired by [hitesh.ai](https://hitesh.ai)
- Built with ❤️ using HTML, CSS, JavaScript & jQuery

---

**Made by Sanchit Bishwakarma** | [GitHub](https://github.com/sanchitbishwakarma) | [LinkedIn](https://linkedin.com/in/sanchitbishwakarma)
