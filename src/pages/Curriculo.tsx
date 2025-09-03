import { useLanguage } from '../contexts/LanguageContext'

function Curriculo() {
  const { t } = useLanguage()

  return (
    <div className="bg-black text-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">{t('resume.name')}</h1>
          <div className="text-gray-300 space-y-1">
            <p><strong>{t('resume.address')}</strong></p>            
          </div>
        </div>
        
        <div className="space-y-12">
          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-2">
              {t('resume.summary')}
            </h2>
            <div className="bg-gray-900 p-6 border border-gray-800">
              <p className="text-gray-300 leading-relaxed">
                {t('resume.summaryText')}
              </p>
            </div>
          </section>
          
          {/* Education & Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-2">
              {t('resume.education')}
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-lg font-semibold">{t('resume.edu1.title')}</h3>
                  <span className="text-gray-400">{t('resume.edu1.year')}</span>
                </div>
                <p className="text-gray-300">{t('resume.edu1.institution')}</p>
              </div>
              
              <div className="bg-gray-900 p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-lg font-semibold">{t('resume.edu2.title')}</h3>
                  <span className="text-gray-400">{t('resume.edu2.year')}</span>
                </div>
                <p className="text-gray-300">{t('resume.edu2.institution')}</p>
              </div>
              
              <div className="bg-gray-900 p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-lg font-semibold">{t('resume.edu3.title')}</h3>
                  <span className="text-gray-400">{t('resume.edu3.year')}</span>
                </div>
                <p className="text-gray-300">{t('resume.edu3.institution')}</p>
              </div>
              
              <div className="bg-gray-900 p-6 border border-gray-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-lg font-semibold">{t('resume.edu4.title')}</h3>
                  <span className="text-gray-400">{t('resume.edu4.year')}</span>
                </div>
                <p className="text-gray-300">{t('resume.edu4.institution')}</p>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-2">
              {t('resume.experience')}
            </h2>
            <div className="space-y-8">
              
              {/* First Position */}
              <div className="bg-gray-900 p-6 border border-gray-800">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{t('resume.exp1.company')} – {t('resume.exp1.location')}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h4 className="text-lg font-semibold">{t('resume.exp1.title')}</h4>
                    <span className="text-gray-400 italic">{t('resume.exp1.period')}</span>
                  </div>
                </div>
                <ul className="text-gray-300 space-y-3">
                  <li>• {t('resume.exp1.desc1')}</li>
                  <li>• {t('resume.exp1.desc2')}</li>
                  <li>• {t('resume.exp1.desc3')}</li>
                  <li>• {t('resume.exp1.desc4')}</li>
                </ul>
                
                <div className="mt-6">
                  <p className="font-semibold text-white mb-3">{t('resume.exp1.promoted')}</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• {t('resume.exp1.desc5')}</li>
                    <li>• {t('resume.exp1.desc6')}</li>
                    <li>• {t('resume.exp1.desc7')}</li>
                    <li>• {t('resume.exp1.desc8')}</li>
                  </ul>
                </div>
              </div>
              
              {/* Second Position */}
              <div className="bg-gray-900 p-6 border border-gray-800">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{t('resume.exp2.company')} – {t('resume.exp2.location')}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h4 className="text-lg font-semibold">{t('resume.exp2.title')}</h4>
                    <span className="text-gray-400 italic">{t('resume.exp2.period')}</span>
                  </div>
                </div>
                <ul className="text-gray-300 space-y-3">
                  <li>• {t('resume.exp2.desc1')}</li>
                  <li>• {t('resume.exp2.desc2')}</li>
                  <li>• {t('resume.exp2.desc3')}</li>
                  <li>• {t('resume.exp2.desc4')}</li>
                </ul>
              </div>
              
              {/* Third Position */}
              <div className="bg-gray-900 p-6 border border-gray-800">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{t('resume.exp3.company')} – {t('resume.exp3.location')}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <h4 className="text-lg font-semibold">{t('resume.exp3.title')}</h4>
                    <span className="text-gray-400 italic">{t('resume.exp3.period')}</span>
                  </div>
                </div>
                <ul className="text-gray-300 space-y-3">
                  <li>• {t('resume.exp3.desc1')}</li>
                  <li>• {t('resume.exp3.desc2')}</li>
                  <li>• {t('resume.exp3.desc3')}</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-2">
              {t('resume.skills')}
            </h2>
            
            {/* Core Competencies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('resume.skills.core')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold mb-3">{t('resume.skills.languages.title')}</h4>
                  <p className="text-gray-300">JavaScript, TypeScript, PHP, HTML, CSS</p>
                </div>
                
                <div className="bg-gray-900 p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold mb-3">{t('resume.skills.frontend.title')}</h4>
                  <p className="text-gray-300">ReactJS, Angular, NextJS, Gatsby</p>
                </div>
                
                <div className="bg-gray-900 p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold mb-3">{t('resume.skills.backend.title')}</h4>
                  <p className="text-gray-300">NodeJS, NestJS, AdonisJS</p>
                </div>
                
                <div className="bg-gray-900 p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold mb-3">{t('resume.skills.databases.title')}</h4>
                  <p className="text-gray-300">PostgreSQL, MySQL, MongoDB</p>
                </div>
                
                <div className="bg-gray-900 p-6 border border-gray-800 md:col-span-2">
                  <h4 className="text-lg font-semibold mb-3">{t('resume.skills.infrastructure.title')}</h4>
                  <p className="text-gray-300">Linux, Nginx, Apache, DNS, FTP, SSH, Git, Redis</p>
                </div>
              </div>
            </div>
            
            {/* Additional Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{t('resume.skills.additional')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold mb-3">{t('resume.skills.languages.title')}</h4>
                  <p className="text-gray-300">Python, Java, C#</p>
                </div>
                
                <div className="bg-gray-900 p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold mb-3">Front-End</h4>
                  <p className="text-gray-300">VueJS</p>
                </div>
                
                <div className="bg-gray-900 p-6 border border-gray-800 md:col-span-2">
                  <h4 className="text-lg font-semibold mb-3">{t('resume.skills.tools.title')}</h4>
                  <p className="text-gray-300">Unity, N8N, Chatwoot, ChatGPT API, Microsoft Azure</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Languages Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-2">
              {t('resume.languages')}
            </h2>
            <div className="bg-gray-900 p-6 border border-gray-800">
              <div className="space-y-2">
                <p className="text-gray-300">• {t('resume.languages.portuguese')}</p>
                <p className="text-gray-300">• {t('resume.languages.english')}</p>
              </div>
            </div>
          </section>
          
          {/* Download CV Button */}
               
        </div>
      </div>
    </div>
  )
}

export default Curriculo
