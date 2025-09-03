// Asset path constants for easy management
export const ASSETS = {
  // Images
  IMAGES: {
    PROFILE_PLACEHOLDER: '/assets/images/profile-placeholder.svg',
    LOGO: '/logo.png',
    // Add your actual images here when you upload them
    // PROFILE: '/assets/images/profile.jpg',
    // HERO_BACKGROUND: '/assets/images/hero-bg.jpg',
  },
  
  // Icons
  ICONS: {
    GITHUB: '/assets/icons/github.svg',
    LINKEDIN: '/assets/icons/linkedin.svg',
    // Add more icons as needed
    // TWITTER: '/assets/icons/twitter.svg',
    // EMAIL: '/assets/icons/email.svg',
  },
  
  // Documents
  DOCUMENTS: {
    // RESUME: '/assets/documents/resume.pdf',
    // CV: '/assets/documents/cv.pdf',
  },
  
  // Fonts (if using local fonts)
  FONTS: {
    // CUSTOM_FONT: '/assets/fonts/custom-font.woff2',
  }
} as const

// Helper function to get asset URL
export const getAssetUrl = (path: string): string => {
  return path.startsWith('/') ? path : `/${path}`
}

// Type for asset categories
export type AssetCategory = keyof typeof ASSETS
