/**
 * Site Configuration
 * 
 * Control the visibility of different sections and features on the website.
 * Set these values to true/false to show/hide specific elements before build.
 */

export const SITE_CONFIG = {
  // Hero Section Elements
  hero: {
    showCallToActionButtons: false,
    showBlogButton: true,
    showProjectsButton: false,
  },

  // Social Media Links
  socialMedia: {
    showGitHub: false,
    showLinkedIn: false,
    showTwitter: false,
    showInstagram: false,
    showYouTube: false,
  },

  // Resume/CV Section
  resume: {
    showResumeButton: false,
    showResumeInHeader: false,
  },

  // Portfolio/Projects Section
  projects: {
    showProjectsSection: false,
    showPersonalWebsite: false,
    showComingSoonProjects: false,
    maxProjectsToShow: 3,
  },

  // About Section
  about: {
    showAboutSection: false,
    showSkillsCards: false,
  },

  // Header Navigation
  navigation: {
    showBlogLink: true,
    showResumeLink: false,
    showGameProject: false,
  },

  // Contact Information
  contact: {
    showContactInfo: false,
    showEmail: false,
    showPhone: false,
  },
} as const

// Social Media URLs
export const SOCIAL_LINKS = {
  github: 'https://github.com/yuridamata',
  linkedin: 'https://linkedin.com/in/yuridamata',
  twitter: 'https://twitter.com/yuridamata',
  instagram: 'https://instagram.com/yuridamata',
  youtube: 'https://youtube.com/@yuridamata',
} as const

// Project Data (you can expand this as needed)
export const PROJECTS_DATA = [
  {
    id: 'personal-website',
    enabled: true,
    githubUrl: 'https://github.com/yuridamata/yuridamata-website',
    liveUrl: 'https://yuridamata.com',
  },
  {
    id: 'chronicles-of-the-veil',
    enabled: true,
    title: 'Chronicles of the Veil',
    description: 'A pixel-art Sci-Fi RPG set on terraformed Mars',
    pageUrl: '/chronicles-of-the-veil',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 'project-3',
    enabled: false,
    githubUrl: '#',
    liveUrl: '#',
  },
] as const
