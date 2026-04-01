# Allan Larsen - Portfolio Website

Modern, fancy portfolio website showcasing my latest projects in financial systems and AI-powered applications.

## Features

- ✨ **Modern Design**: Windows 11-inspired glassmorphism and gradients
- 🎯 **Popup Notification**: Automatic popup after 2 seconds showcasing latest work
- 🚀 **Smooth Animations**: Fade-in effects, parallax scrolling, smooth navigation
- 📱 **Fully Responsive**: Mobile-first design with beautiful breakpoints
- 🎨 **Beautiful UI**: Gradient text, glow effects, and professional styling
- ⚡ **Pure Frontend**: Just HTML, CSS, and JavaScript - no build tools needed

## Projects Featured

1. **PhaseForge Scout** - Phase-aware stock discovery with live data integration
2. **CashFlowCompass** - DCF and Reverse DCF valuation calculator
3. **SophiasTrendChoice** - Fashion outfit builder with Virtual Try-On AI
4. **PhaseForge Platform** - Comprehensive indicator test suite

## Tech Stack

- HTML5
- CSS3 (Custom properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter + Playfair Display)

## Local Development

Simply open `index.html` in your browser:

```bash
open index.html
```

Or use a simple HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (if you have http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Adding Screenshots

Place project screenshots in the `images/` folder:

- `phaseforge-scout.png` - PhaseForge Scout screenshot
- `phaseforge-scout-hero.png` - PhaseForge Scout hero image (for popup)
- `cashflowcompass.png` - CashFlowCompass screenshot  
- `sophiastrendchoice.png` - SophiasTrendChoice screenshot
- `phaseforge.png` - PhaseForge Platform screenshot

Images will fallback to `placeholder.png` if not found.

## Customization

### Colors

Edit CSS custom properties in `css/style.css`:

```css
:root {
    --primary: #5eb3ff;      /* Main blue */
    --secondary: #6dd4bd;    /* Teal accent */
    --accent: #a68aff;       /* Purple accent */
    --bg: #0a1628;           /* Dark background */
}
```

### Popup Delay

Edit `js/script.js`:

```javascript
setTimeout(function() {
    showPopup();
}, 2000); // Change 2000 to desired milliseconds
```

### Content

All content is in `index.html` - edit sections directly.

## Features Explained

### Popup System
- Shows automatically 2 seconds after page load
- Highlights latest project (PhaseForge Scout)
- Dismissible with:
  - Click × button
  - Press ESC key
  - Click outside modal
  - Click "View Project" or "Maybe Later"

### Animations
- Hero section fade-in sequence
- Parallax background on scroll
- Intersection Observer for project cards
- Smooth scroll navigation
- Hover effects on all interactive elements

### Responsive Design
- Desktop: Full grid layout with featured project spanning 2 columns
- Tablet: Adjusted grid, single column for featured project
- Mobile: Stack layout, simplified navigation

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Allan Larsen. All rights reserved.

## Contact

- Email: allan.larsen@hotmail.com
- GitHub: [@allanldk](https://github.com/allanldk)
- Location: Denmark

---

**Built with passion • Powered by .NET & AI**
