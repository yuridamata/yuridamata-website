import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Curriculo from './pages/Curriculo'
import ChroniclesOfTheVeil from './pages/ChroniclesOfTheVeil'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculo" element={<Curriculo />} />
            <Route path="/chronicles-of-the-veil" element={<ChroniclesOfTheVeil />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
