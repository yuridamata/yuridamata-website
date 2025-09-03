import { Link } from 'react-router-dom'
import { ASSETS } from '../constants/assets'
import { useLanguage } from '../contexts/LanguageContext'
import { SITE_CONFIG } from '../config/siteConfig'
import LanguageSwitcher from './LanguageSwitcher'

function Header() {
  const { t } = useLanguage()

  return (
    <header className="bg-black shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={ASSETS.IMAGES.LOGO} 
                alt="Damata Tech Logo" 
                className="h-12 w-auto"
              />
              <div className="text-white">
                <span className="text-2xl font-bold">_Damata</span>
                <br />
                <span className="text-2xl font-bold">Tech_</span>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                <Link
                  to="/"
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t('nav.home')}
                </Link>
                {SITE_CONFIG.navigation.showBlogLink && (
                  <a
                    href="/blog"
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {t('nav.blog')}
                  </a>
                )}
                {SITE_CONFIG.navigation.showResumeLink && SITE_CONFIG.resume.showResumeInHeader && (
                  <Link
                    to="/curriculo"
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {t('nav.resume')}
                  </Link>
                )}
                {SITE_CONFIG.navigation.showGameProject && (
                  <Link
                    to="/chronicles-of-the-veil"
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    🎮 Game Project
                  </Link>
                )}
              </div>
            </div>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
