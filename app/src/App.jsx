import { PageBackground } from './components/PageBackground'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Dores } from './components/Dores'
import { Produto } from './components/Produto'
import { Autoridade } from './components/Autoridade'
import { Depoimentos } from './components/Depoimentos'
import { Logos } from './components/Logos'
import { Captura } from './components/Captura'
import { Footer } from './components/Footer'
import { submitLead } from './services/leads'

function App() {
  async function handleLeadSubmit(data) {
    return submitLead(data)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageBackground />
      <Navbar />
      <Hero />
      <Dores />
      <Produto />
      <Autoridade />
      <Depoimentos />
      <Logos />
      <Captura onSubmitLead={handleLeadSubmit} />
      <Footer />
    </main>
  )
}

export default App
