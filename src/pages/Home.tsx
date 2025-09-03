import { ASSETS } from '../constants/assets'
import { useLanguage } from '../contexts/LanguageContext'
import { SITE_CONFIG, SOCIAL_LINKS, PROJECTS_DATA } from '../config/siteConfig'

function Home() {
  const { t } = useLanguage()

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Profile Image */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-60 h-60 bg-no-repeat   p-1">
                  <img 
                    src="/favicon.svg" 
                    alt="Yuri da Mata" 
                    className="w-full h-full  bg-transparent"
                  />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">_Damata</span>
              <br />
              <span className="text-white">Tech_</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            
            {/* CTA Buttons */}
            {SITE_CONFIG.hero.showCallToActionButtons && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                {SITE_CONFIG.hero.showBlogButton && (
                  <a
                    href="/blog"
                    className="bg-white text-black px-8 py-3 text-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                  >
                    {t('hero.readBlog')}
                  </a>
                )}
                {SITE_CONFIG.hero.showProjectsButton && SITE_CONFIG.projects.showProjectsSection && (
                  <a
                    href="#projects"
                    className="border border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200"
                  >
                    {t('hero.viewProjects')}
                  </a>
                )}
              </div>
            )}
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-8">
              {SITE_CONFIG.socialMedia.showGitHub && (
                <a 
                  href={SOCIAL_LINKS.github}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src={ASSETS.ICONS.GITHUB} 
                    alt="GitHub" 
                    className="w-8 h-8 filter invert opacity-60 hover:opacity-100 transition-opacity"
                  />
                </a>
              )}
              {SITE_CONFIG.socialMedia.showLinkedIn && (
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src={ASSETS.ICONS.LINKEDIN} 
                    alt="LinkedIn" 
                    className="w-8 h-8 filter invert opacity-60 hover:opacity-100 transition-opacity"
                  />
                </a>
              )}
              {SITE_CONFIG.socialMedia.showTwitter && (
                <a 
                  href={SOCIAL_LINKS.twitter}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-8 h-8 fill-current opacity-60 hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      {SITE_CONFIG.about.showAboutSection && (
        <div className="py-24 border-t border-gray-800" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
                <p className="text-lg text-gray-300 mb-6">
                  {t('about.description1')}
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  {t('about.description2')}
                </p>
                {SITE_CONFIG.resume.showResumeButton && (
                  <a 
                    href="/curriculo"
                    className="inline-block bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition-colors duration-200"
                  >
                    {t('about.viewResume')}
                  </a>
                )}
              </div>
              {SITE_CONFIG.about.showSkillsCards && (
                <div className="space-y-6">
                  <div className="bg-gray-900 p-6 border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3">{t('skills.frontend')}</h3>
                    <p className="text-gray-300">React, TypeScript, Tailwind CSS, Next.js, Vite</p>
                  </div>
                  <div className="bg-gray-900 p-6 border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3">{t('skills.backend')}</h3>
                    <p className="text-gray-300">Node.js, Python, PostgreSQL, MongoDB, REST APIs</p>
                  </div>
                  <div className="bg-gray-900 p-6 border border-gray-800">
                    <h3 className="text-xl font-semibold mb-3">{t('skills.tools')}</h3>
                    <p className="text-gray-300">Git, Docker, AWS, Vercel, Linux, Agile</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Projects Section */}
      {SITE_CONFIG.projects.showProjectsSection && (
        <div className="py-24 border-t border-gray-800" id="projects">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">{t('projects.title')}</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {t('projects.description')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Personal Website Project */}
              {SITE_CONFIG.projects.showPersonalWebsite && PROJECTS_DATA.find(p => p.id === 'personal-website')?.enabled && (
                <div className="bg-gray-900 border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-200">
                  <div className="h-48 bg-gray-800 mb-6 flex items-center justify-center">
                    <span className="text-gray-500">{t('projects.projectScreenshot')}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{t('projects.personalWebsite')}</h3>
                  <p className="text-gray-300 mb-4">
                    {t('projects.personalWebsiteDesc')}
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href={PROJECTS_DATA.find(p => p.id === 'personal-website')?.githubUrl || '#'} 
                      className="text-white hover:text-gray-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={ASSETS.ICONS.GITHUB} alt="GitHub" className="w-5 h-5 filter invert" />
                    </a>
                    <a 
                      href={PROJECTS_DATA.find(p => p.id === 'personal-website')?.liveUrl || '#'} 
                      className="text-white hover:text-gray-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              )}

              {/* Chronicles of the Veil Game Project */}
              {PROJECTS_DATA.find(p => p.id === 'chronicles-of-the-veil')?.enabled && (
                <div className="bg-gray-900 border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-200">
                  <div className="h-48 bg-gradient-to-br from-purple-900 to-blue-900 mb-6 flex items-center justify-center">
                    <span className="text-6xl">🎮</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Chronicles of the Veil
                  </h3>
                  <p className="text-gray-300 mb-4">
                    A pixel-art Sci-Fi RPG set on terraformed Mars where technology and human ambition collide.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="/chronicles-of-the-veil" 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-purple-600 transition-colors text-sm font-medium"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              )}
              
              {/* Coming Soon Projects */}
              {SITE_CONFIG.projects.showComingSoonProjects && 
                Array.from({ length: Math.max(0, SITE_CONFIG.projects.maxProjectsToShow - 2) }, (_, index) => (
                  <div key={index} className="bg-gray-900 border border-gray-800 p-6 hover:border-gray-600 transition-colors duration-200">
                    <div className="h-48 bg-gray-800 mb-6 flex items-center justify-center">
                      <span className="text-gray-500">{t('projects.comingSoon')}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{t('projects.projectName')}</h3>
                    <p className="text-gray-300 mb-4">
                      {t('projects.projectDesc')}
                    </p>
                    <div className="flex space-x-4">
                      <span className="text-gray-500">{t('projects.inDevelopment')}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
