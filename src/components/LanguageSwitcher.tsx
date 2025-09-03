import { useLanguage } from '../contexts/LanguageContext'

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 text-sm font-medium transition-colors ${
          language === 'pt'
            ? 'text-white bg-gray-800 border border-gray-600'
            : 'text-gray-400 hover:text-white border border-transparent hover:border-gray-600'
        }`}
      >
        PT
      </button>
      <span className="text-gray-600">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-sm font-medium transition-colors ${
          language === 'en'
            ? 'text-white bg-gray-800 border border-gray-600'
            : 'text-gray-400 hover:text-white border border-transparent hover:border-gray-600'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher
