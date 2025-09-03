import { useLanguage } from '../contexts/LanguageContext'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Damata Tech. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
