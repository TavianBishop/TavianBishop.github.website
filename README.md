# Tavian Bishop - Portfolio Website

A modern, beautiful portfolio website showcasing my work as a Computer Science student and IT professional. Features a refined minimalist design with dynamic accents, smooth animations, and interactive elements.

## About Me

I'm Tavian Bishop, a Computer Science student at Nicholls State University (Expected 2026) with hands-on experience in technical support and software development through roles at Oceaneering, Best Buy, and Budweiser.

**Contact:**
- Email: Bishopcoding@gmail.com
- Phone: (225) 290-8707
- Location: Thibodaux, Louisiana
- LinkedIn: [linkedin.com/in/tavian-bishop-891a39361](https://www.linkedin.com/in/tavian-bishop-891a39361)
- GitHub: [github.com/tavianbishop](https://github.com/tavianbishop)
- Portfolio: [tavianbishop.github.io](https://tavianbishop.github.io/)

## Features

- 🎨 Modern, elegant design with custom typography (Crimson Pro & JetBrains Mono)
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 📄 Resume upload functionality
- 🚀 Dynamic project showcase
- 📊 Skills visualization with progress bars
- 📮 Contact form
- ⚡ Fast and lightweight
- 🎯 SEO-friendly structure

## Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal introduction with stats and resume upload
3. **Experience** - Timeline of professional experience
4. **Projects** - Showcase of featured projects with ability to add more
5. **Skills** - Technical skills with visual progress indicators
6. **Contact** - Contact information and message form

## Setup Instructions

### Option 1: GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Upload all files (index.html, styles.css, script.js, README.md)
3. Go to repository Settings → Pages
4. Select branch (main/master) and root folder
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Local Development

1. Clone or download the repository
2. Open `index.html` in your web browser
3. No build process required - it's pure HTML, CSS, and JavaScript!

### Option 3: Deploy to Netlify/Vercel

1. Create an account on Netlify or Vercel
2. Connect your GitHub repository or drag and drop the files
3. Site will be deployed automatically

## Customization Guide

### Personal Information

Edit `index.html` and update:

1. **Title & Meta Tags** (lines 5-6):
   ```html
   <title>Your Name - Software Engineer</title>
   ```

2. **Logo** (line 23):
   ```html
   <a href="#home" class="logo">YN</a>
   ```

3. **Hero Section** (lines 38-44):
   - Update hero title
   - Modify subtitle description
   
4. **About Section** (lines 58-76):
   - Write your personal introduction
   - Update stats (years of experience, projects, etc.)

5. **Experience Timeline** (lines 90-145):
   - Add/edit your work experience
   - Update job titles, companies, dates, and descriptions
   - Modify technology tags

6. **Projects** (lines 158-260):
   - Customize the three featured projects
   - Add project images (replace placeholder SVGs)
   - Update project links

7. **Skills** (lines 289-350):
   - Adjust skill percentages in `style` attributes
   - Add/remove skills and categories

8. **Contact Information** (lines 373-400):
   - Update email address
   - Add your LinkedIn URL
   - Add your GitHub username

### Styling

Edit `styles.css` to customize:

1. **Colors** (lines 1-9):
   ```css
   --color-accent: #00c896;  /* Change primary accent color */
   --color-bg: #0f0f0f;      /* Background color */
   ```

2. **Fonts**:
   - Current: Crimson Pro (display) + JetBrains Mono (code)
   - To change: Update Google Fonts link in HTML and CSS variables

3. **Spacing**:
   ```css
   --spacing-sm: 1rem;
   --spacing-md: 2rem;
   --spacing-lg: 4rem;
   ```

### Adding Your Resume

1. Click "Upload Resume" button in the About section
2. Select your PDF resume file
3. The download button will appear automatically

### Adding Projects

Use the "Add Your Own Projects" form at the bottom of the Projects section:
- Fill in project details
- Add technologies (comma-separated)
- Include demo and GitHub links (optional)

## File Structure

```
portfolio/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive features
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Tips for Best Results

1. **Images**: Replace placeholder SVGs with actual project screenshots
2. **Content**: Keep descriptions concise and impactful
3. **Links**: Update all placeholder URLs with real links
4. **SEO**: Update meta tags and add Open Graph tags
5. **Analytics**: Add Google Analytics or similar tracking

## Features You Can Add

- Blog section
- Testimonials
- Dark/light mode toggle
- Language switcher
- Downloadable resume button
- GitHub activity feed
- Social media integration

## License

This template is free to use for personal and commercial projects.

## Credits

Built with:
- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript
- Google Fonts (Crimson Pro, JetBrains Mono)

---

**Need help?** Feel free to open an issue or reach out!

Made with ❤️ for developers
