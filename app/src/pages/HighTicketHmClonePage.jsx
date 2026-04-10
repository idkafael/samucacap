import { HmCloneHero } from '../components/hm-clone/HmCloneHero'
import { HmCloneAudience } from '../components/hm-clone/HmCloneAudience'
import { HmClonePhases } from '../components/hm-clone/HmClonePhases'
import { HmCloneAuthority } from '../components/hm-clone/HmCloneAuthority'
import { HmCloneFooter } from '../components/hm-clone/HmCloneFooter'
import { submitLead } from '../services/leads'
import '../components/hm-clone/hm-clone.css'

function scrollToHeroCapture() {
  const el = document.getElementById('lp-hero-captura')
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.setTimeout(() => {
    document.getElementById('hm-hero-email')?.focus({ preventScroll: true })
  }, 450)
}

/**
 * @param {{ showPhases?: boolean; showAudience?: boolean }} props
 * `showPhases` — só em `/lp`. `showAudience` — só na raiz `/` (oculto em `/lp`).
 */
export default function HighTicketHmClonePage({ showPhases = false, showAudience = true }) {
  async function handleLeadSubmit(data) {
    return submitLead(data)
  }

  return (
    <div className="hm-clone-root min-h-screen bg-[#020202] text-white antialiased">
      <HmCloneHero onSubmitLead={handleLeadSubmit} />
      {showAudience ? <HmCloneAudience onScrollToCapture={scrollToHeroCapture} /> : null}
      {showPhases ? <HmClonePhases /> : null}
      <HmCloneAuthority onScrollToCapture={scrollToHeroCapture} />
      <HmCloneFooter />
    </div>
  )
}
