import { useState } from 'react'
import { HmCloneHero } from '../components/hm-clone/HmCloneHero'
import { HmCloneAudience } from '../components/hm-clone/HmCloneAudience'
import { HmCloneAuthority } from '../components/hm-clone/HmCloneAuthority'
import { HmCloneFooter } from '../components/hm-clone/HmCloneFooter'
import { HmCloneFormModal } from '../components/hm-clone/HmCloneFormModal'
import { submitLead } from '../services/leads'
import '../components/hm-clone/hm-clone.css'

/** Conteúdo da `/lp` — réplica visual da referência; único asset raster é o hero em `/public/images/aceleracao-hero-desktop.png`. */
export default function HighTicketHmClonePage() {
  const [formOpen, setFormOpen] = useState(false)

  async function handleLeadSubmit(data) {
    return submitLead(data)
  }

  return (
    <div className="hm-clone-root min-h-screen bg-[#020202] text-white antialiased">
      <HmCloneHero onSubmitLead={handleLeadSubmit} />
      <HmCloneAudience onOpenForm={() => setFormOpen(true)} />
      <HmCloneAuthority onOpenForm={() => setFormOpen(true)} />
      <HmCloneFooter />
      <HmCloneFormModal open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  )
}
