import { PageBackground } from '../components/PageBackground'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'
import { FloatingCaptura } from '../components/FloatingCaptura'
import { submitLead } from '../services/leads'

/** Convite ao Grupo Alta Frequência — rota `/`. */
export default function HomePage() {
  async function handleLeadSubmit(data) {
    return submitLead(data)
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <PageBackground />
      <Hero onSubmitLead={handleLeadSubmit} />
      <Footer />
      <FloatingCaptura />
    </main>
  )
}
