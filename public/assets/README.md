# Assets Folder Structure

This folder contains static assets that will be served directly from the website root URL.

## Folder Structure

```
public/
├── assets/
│   ├── images/          # Profile photos, hero images, project screenshots
│   ├── icons/           # Custom icons, social media icons
│   ├── documents/       # PDFs, resumes, downloadable files
│   └── fonts/           # Custom web fonts (if not using CDN)
├── favicon.svg          # Website favicon
└── robots.txt           # SEO robots file
```

## Usage Examples

### In React Components
```jsx
// Images
<img src="/assets/images/profile.jpg" alt="Profile" />
<img src="/assets/images/projects/project1.png" alt="Project 1" />

// Icons
<img src="/assets/icons/github.svg" alt="GitHub" />
<img src="/assets/icons/linkedin.svg" alt="LinkedIn" />

// Documents
<a href="/assets/documents/resume.pdf" download>Download Resume</a>
```

### In CSS/Tailwind
```css
.hero-bg {
  background-image: url('/assets/images/hero-background.jpg');
}
```

### Direct URLs
All files in this folder are accessible directly via URL:
- `https://yuridamata.com.br/assets/images/profile.jpg`
- `https://yuridamata.com.br/assets/documents/resume.pdf`
- `https://yuridamata.com.br/favicon.svg`

## Best Practices

1. **Image Optimization**: Compress images before adding them
2. **Naming Convention**: Use kebab-case for file names
3. **File Formats**: 
   - Images: JPG, PNG, WebP, SVG
   - Icons: SVG preferred
   - Documents: PDF, DOCX
4. **Size Limits**: Keep individual files under 5MB for good performance

## Supported File Types

- **Images**: .jpg, .jpeg, .png, .gif, .svg, .webp
- **Documents**: .pdf, .doc, .docx, .txt
- **Fonts**: .woff, .woff2, .ttf, .otf
- **Data**: .json, .xml, .csv
- **Other**: Any static file type
