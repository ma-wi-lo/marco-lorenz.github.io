# marco-lorenz.github.io

Academic website for Marco Lorenz, M.A. - Digital Scholar theme with Dark/Light Mode.

## Overview

Professional academic website featuring research, publications, CV, and contact information for Marco Lorenz, M.A., researcher at BBF | Bibliothek für Bildungsgeschichtliche Forschung (DIPF).

**Live Site:** [https://marco-lorenz.github.io](https://marco-lorenz.github.io)

## Features

- **Dark/Light Mode Toggle** with localStorage persistence
- **Responsive Design** optimized for mobile, tablet, and desktop
- **ORCID Integration** (ORCID iD: 0000-0002-0903-2100)
- **Semantic HTML5** with accessibility features
- **Fast Loading** - Vanilla HTML/CSS/JavaScript (no frameworks)
- **GitHub Pages Ready** - Deploy-ready static site

## Design Concept: "Digital Scholar"

### Color Scheme

**Dark Mode (Default):**
- Background: `#0d0d0d` (very dark black)
- Text: `#e8e8e8` (off-white)
- Accent: `#2d5016` (moss green)
- Secondary: `#666666`
- Code: `#3a6b35`

**Light Mode:**
- Background: `#fafaf8` (cream/off-white)
- Text: `#1a1a1a` (dark gray)
- Accent: `#2d5016` (moss green)
- Secondary: `#888888`
- Code: `#2d5016`

### Typography

- **Headings:** Crimson Text (Serif) - via Google Fonts
- **Body:** Inter (Sans-Serif) - via Google Fonts
- **Code:** JetBrains Mono (Monospace) - via Google Fonts

### Layout

- Centered content with max-width of 720px for optimal readability
- Sticky navigation with smooth transitions
- Clean, minimalist design with generous whitespace

## File Structure

```
/
├── index.html              # Homepage with bio
├── research.html           # Research & projects
├── publications.html       # Publications with ORCID integration
├── cv.html                # Curriculum Vitae
├── contact.html           # Contact information
├── css/
│   └── style.css          # Main stylesheet with Dark/Light Mode
├── js/
│   └── theme-toggle.js    # Theme switching logic
├── assets/                # Assets directory (for future use)
└── README.md             # This file
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties (CSS variables) for theming
- **Vanilla JavaScript** - No dependencies, lightweight
- **Google Fonts** - Typography
- **ORCID API** - Publication integration

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/marco-lorenz/marco-lorenz.github.io.git
   cd marco-lorenz.github.io
   ```

2. Open in browser:
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # Using PHP
   php -S localhost:8000

   # Or simply open index.html in your browser
   ```

3. Navigate to `http://localhost:8000`

## Deployment

This site is configured for automatic deployment via **GitHub Pages**.

### Setup GitHub Pages:

1. Go to repository Settings → Pages
2. Source: Deploy from branch `main` (or `master`)
3. Folder: `/ (root)`
4. Save

The site will be available at: `https://marco-lorenz.github.io`

### Custom Domain (Optional):

To use a custom domain like `marco-lorenz.de`:

1. Add a `CNAME` file with your domain:
   ```
   marco-lorenz.de
   ```

2. Configure DNS:
   - For apex domain (`marco-lorenz.de`):
     ```
     A Record: 185.199.108.153
     A Record: 185.199.109.153
     A Record: 185.199.110.153
     A Record: 185.199.111.153
     ```
   - For subdomain (`www.marco-lorenz.de`):
     ```
     CNAME: marco-lorenz.github.io
     ```

3. Enable "Enforce HTTPS" in GitHub Pages settings

## Customization

### Update Content

Edit the HTML files directly to update:
- Bio text (index.html)
- Research projects (research.html)
- Publications (publications.html)
- CV entries (cv.html)
- Contact information (contact.html)

### Modify Colors

Edit CSS variables in `css/style.css`:

```css
:root {
  --bg-color: #fafaf8;
  --text-color: #1a1a1a;
  --accent-color: #2d5016;
  /* ... */
}
```

### Change Fonts

Replace Google Fonts import in `css/style.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

## Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Respects `prefers-reduced-motion`
- Alt text for images

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Performance

- No external dependencies or frameworks
- Minimal CSS and JavaScript
- Optimized for fast loading
- Efficient theme switching

## License

© 2025 Marco Lorenz, M.A. All rights reserved.

## Contact

For questions or suggestions regarding this website:

- ORCID: [0000-0002-0903-2100](https://orcid.org/0000-0002-0903-2100)
- Institution: BBF | DIPF
- Website: [marco-lorenz.github.io](https://marco-lorenz.github.io)

---

Built with ❤️ for academia and open science.
