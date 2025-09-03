# Site Configuration Guide

This document explains how to configure the visibility of different sections and features on your personal website.

## Configuration File

The main configuration is located at: `src/config/siteConfig.ts`

## Available Configuration Options

### Hero Section
```typescript
hero: {
  showCallToActionButtons: true,  // Show/hide the "Read Blog" and "View Projects" buttons
  showBlogButton: true,           // Show/hide the "Read Blog" button specifically
  showProjectsButton: true,       // Show/hide the "View Projects" button specifically
}
```

### Social Media Links
```typescript
socialMedia: {
  showGitHub: true,        // Show/hide GitHub icon
  showLinkedIn: true,      // Show/hide LinkedIn icon
  showTwitter: false,      // Show/hide Twitter icon
  showInstagram: false,    // Show/hide Instagram icon
  showYouTube: false,      // Show/hide YouTube icon
}
```

### Resume/CV Section
```typescript
resume: {
  showResumeButton: true,      // Show/hide "View Resume" button in about section
  showResumeInHeader: true,    // Show/hide resume link in header navigation
}
```

### Portfolio/Projects Section
```typescript
projects: {
  showProjectsSection: true,      // Show/hide entire projects section
  showPersonalWebsite: true,      // Show/hide personal website project card
  showComingSoonProjects: true,   // Show/hide "coming soon" project placeholders
  maxProjectsToShow: 3,          // Maximum number of projects to display
}
```

### About Section
```typescript
about: {
  showAboutSection: true,   // Show/hide entire about section
  showSkillsCards: true,    // Show/hide skills cards (Frontend, Backend, Tools)
}
```

### Header Navigation
```typescript
navigation: {
  showBlogLink: true,      // Show/hide blog link in header
  showResumeLink: true,    // Show/hide resume link in header
}
```

### Contact Information
```typescript
contact: {
  showContactInfo: false,   // Show/hide contact section (not implemented yet)
  showEmail: false,         // Show/hide email display
  showPhone: false,         // Show/hide phone display
}
```

## Social Media URLs

Update the social media URLs in the `SOCIAL_LINKS` object:

```typescript
export const SOCIAL_LINKS = {
  github: 'https://github.com/yuridamata',
  linkedin: 'https://linkedin.com/in/yuridamata',
  twitter: 'https://twitter.com/yuridamata',
  instagram: 'https://instagram.com/yuridamata',
  youtube: 'https://youtube.com/@yuridamata',
}
```

## Project Data

Configure your projects in the `PROJECTS_DATA` array:

```typescript
export const PROJECTS_DATA = [
  {
    id: 'personal-website',
    enabled: true,
    githubUrl: 'https://github.com/yuridamata/yuridamata-website',
    liveUrl: 'https://yuridamata.com',
  },
  // Add more projects as needed
]
```

## How to Use

1. **Before Building**: Edit the configuration values in `src/config/siteConfig.ts`
2. **Build the Site**: Run `npm run build` to create the production build
3. **Deploy**: The built site will reflect your configuration choices

## Examples

### Hide Social Media
```typescript
socialMedia: {
  showGitHub: false,
  showLinkedIn: false,
  showTwitter: false,
  showInstagram: false,
  showYouTube: false,
}
```

### Show Only Blog Button
```typescript
hero: {
  showCallToActionButtons: true,
  showBlogButton: true,
  showProjectsButton: false,
}
```

### Hide Projects Section Completely
```typescript
projects: {
  showProjectsSection: false,
  showPersonalWebsite: false,
  showComingSoonProjects: false,
  maxProjectsToShow: 0,
}
```

### Minimal Header Navigation
```typescript
navigation: {
  showBlogLink: false,
  showResumeLink: false,
}
```

## Notes

- Changes require a rebuild (`npm run build`) to take effect
- All configurations are type-safe with TypeScript
- The configuration supports both Portuguese and English languages automatically
- Some features like contact information are prepared for future implementation
