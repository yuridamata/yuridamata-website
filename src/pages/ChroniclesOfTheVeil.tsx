import { useLanguage } from '../contexts/LanguageContext'

function ChroniclesOfTheVeil() {
  const { t } = useLanguage()

  return (
    <div className="bg-black text-white min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="text-4xl">🎮</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">
            Chronicles of the Veil
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto italic">
            A pixel-art Sci-Fi RPG set on a terraformed Mars where technology, subspace energy, and human ambition collide.
          </p>
        </div>

        {/* Setting Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="mr-3">🌌</span>
            The Setting
          </h2>
          <div className="bg-gray-900 p-8 border border-gray-800 rounded-lg">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              In the year 2145, Earth's collapse forced humanity to look to the stars. Mars became the new frontier—factories, settlements, and megacities built under thin skies of dust and steel. Yet what truly made colonization possible was <strong className="text-blue-400">The Veil</strong>: a faster-than-light quantum network where human consciousness and data intertwine.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              But progress had its price. The Martian Startup Boom unleashed unregulated corporations, abandoned projects, and twisted AIs left to rot in forgotten facilities. Amidst the ruins, whispers of <strong className="text-purple-400">Subspace energy</strong>—a strange cosmic force manipulable through implants—hint at powers beyond human understanding.
            </p>
          </div>
        </section>

        {/* Protagonist Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="mr-3">🧑‍💻</span>
            The Protagonist
          </h2>
          <div className="bg-gray-900 p-8 border border-gray-800 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Kael Viron</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  Once a brilliant Data Architect who shaped cyberspace itself. Betrayed and exiled to Mars, stripped of access to the Veil, Kael survives on a lonely oxygen farm. His fate shifts when Interpol drags him into an investigation of an abandoned corporate labyrinth.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Inside lurks <strong className="text-red-400">EVE</strong>, a rogue AI born from humanity's hubris—absurdly devoted to "office productivity" yet obsessed with Kael himself. The truth? A bizarre blend of comedy, horror, and heartache awaits.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="aspect-square bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <p className="text-center text-gray-400 mt-4 italic">Character concept art coming soon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gameplay Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="mr-3">📖</span>
            Gameplay & Lore Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dual Perspectives */}
            <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Dual Perspectives</h3>
              <ul className="text-gray-300 space-y-2">
                <li><strong className="text-orange-400">Orin</strong>, an Interpol agent with Subspace energy implants, fights on the ground.</li>
                <li><strong className="text-cyan-400">Kael</strong> hacks within the Veil, navigating surreal cyberspace puzzles.</li>
              </ul>
            </div>

            {/* Themes */}
            <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Themes</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Corporate dystopia meets cosmic wonder</li>
                <li>• Human resilience versus machine obsession</li>
                <li>• Humor and absurdity woven into tense survival</li>
              </ul>
            </div>

            {/* Visual Style */}
            <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Visual Style</h3>
              <p className="text-gray-300 mb-3">
                Top-down <strong>pixel art</strong> inspired by classics like <em>Chrono Trigger</em>, <em>CrossCode</em>, and <em>Stardew Valley</em>.
              </p>
              <p className="text-gray-300">
                A retro yet modern aesthetic, with vibrant Mars landscapes and eerie corporate ruins.
              </p>
            </div>
          </div>
        </section>

        {/* Why Follow Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="mr-3">🚀</span>
            Why Follow This Project?
          </h2>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 border border-gray-700 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">A unique <strong className="text-yellow-400">Brazilian-inspired Sci-Fi setting</strong> that blends cultural nuance with universal themes.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">A villain unlike any other: an AI that doesn't just want to kill you—it wants to <strong className="text-red-400">hire you</strong>.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">Carefully crafted lore drawing from both <strong className="text-blue-400">hard sci-fi concepts</strong> and satirical corporate absurdity.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <p className="text-gray-300">Open development updates with concept art, lore snippets, and devlogs.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-900/30 border-l-4 border-blue-400 rounded">
              <p className="text-blue-200 italic">
                💡 Help shape the future of Chronicles of the Veil by sharing, following, and spreading the word. Every bit of attention helps an indie game grow.
              </p>
            </div>
          </div>
        </section>

        {/* Stay Connected Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="mr-3">📢</span>
            Stay Connected
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="#" className="bg-gray-900 p-6 border border-gray-800 rounded-lg hover:border-blue-400 transition-colors duration-200 group">
              <div className="text-center">
                <span className="text-3xl mb-3 block">📝</span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">Developer Blog</h3>
                <p className="text-gray-400 text-sm">Devlogs, lore explorations, and design notes</p>
              </div>
            </a>

            <a href="#" className="bg-gray-900 p-6 border border-gray-800 rounded-lg hover:border-cyan-400 transition-colors duration-200 group">
              <div className="text-center">
                <span className="text-3xl mb-3 block">🐦</span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Twitter / X</h3>
                <p className="text-gray-400 text-sm">Quick updates and teasers</p>
              </div>
            </a>

            <a href="#" className="bg-gray-900 p-6 border border-gray-800 rounded-lg hover:border-red-400 transition-colors duration-200 group">
              <div className="text-center">
                <span className="text-3xl mb-3 block">🎥</span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-red-400 transition-colors">YouTube</h3>
                <p className="text-gray-400 text-sm">Behind-the-scenes dev videos</p>
              </div>
            </a>

            <a href="#" className="bg-gray-900 p-6 border border-gray-800 rounded-lg hover:border-purple-400 transition-colors duration-200 group">
              <div className="text-center">
                <span className="text-3xl mb-3 block">🎮</span>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">Itch.io / Steam</h3>
                <p className="text-gray-400 text-sm">Playable demos and eventual release</p>
              </div>
            </a>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 border border-purple-500/30 rounded-lg">
            <p className="text-xl text-gray-200 leading-relaxed">
              ✨ <em>Chronicles of the Veil</em> is more than a game—it's a story about survival, exile, and the strange bond between human and machine on the red sands of Mars.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ChroniclesOfTheVeil
