import { HmCloneHero } from '../components/hm-clone/HmCloneHero'
import { HmCloneAudience } from '../components/hm-clone/HmCloneAudience'
import { HmClonePhases } from '../components/hm-clone/HmClonePhases'
import { HmCafeAbout } from '../components/hm-clone/HmCafeAbout'
import { HmCafeBenefits } from '../components/hm-clone/HmCafeBenefits'
import { HmCafeInvite } from '../components/hm-clone/HmCafeInvite'
import { HmCafeStickyCta } from '../components/hm-clone/HmCafeStickyCta'
import { LpFimDoRealizadorIdentificacao } from '../components/lp-fim/LpFimDoRealizadorIdentificacao'
import { LpFimDoRealizadorDiagnostico } from '../components/lp-fim/LpFimDoRealizadorDiagnostico'
import { LpFimDoRealizadorApresentacao } from '../components/lp-fim/LpFimDoRealizadorApresentacao'
import { LpFimDoRealizadorMetodologia } from '../components/lp-fim/LpFimDoRealizadorMetodologia'
import { LpFimDoRealizadorBeneficios } from '../components/lp-fim/LpFimDoRealizadorBeneficios'
import { LpFimDoRealizadorParaQuem } from '../components/lp-fim/LpFimDoRealizadorParaQuem'
import { LpFimDoRealizadorAutoridade } from '../components/lp-fim/LpFimDoRealizadorAutoridade'
import { LpFimDoRealizadorConviteFinal } from '../components/lp-fim/LpFimDoRealizadorConviteFinal'
import { LpFimStickyCta } from '../components/lp-fim/LpFimStickyCta'
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
 * @param {{
 *   showPhases?: boolean;
 *   showAudience?: boolean;
 *   heroHeadline?: string;
 *   heroSubheadline?: string;
 *   heroFormSubmitLabel?: string;
 *   heroMicrocopy?: string;
 *   heroHideLogo?: boolean;
 *   heroHighlightCard?: boolean;
 *   heroCenterCard?: boolean;
 *   isCafeFlow?: boolean;
 * }} props
 * `showPhases` — só em `/lp`. `showAudience` — só na raiz `/` (oculto em `/lp`).
 */
export default function HighTicketHmClonePage({
  showPhases = false,
  showAudience = true,
  heroHeadline,
  heroSubheadline,
  heroFormSubmitLabel,
  heroMicrocopy,
  heroHideLogo,
  heroHighlightCard,
  heroCenterCard,
  isCafeFlow = false,
}) {
  async function handleLeadSubmit(data) {
    return submitLead(data)
  }

  const isLp = showPhases

  return (
    <div className="hm-clone-root min-h-screen bg-[#020202] text-white antialiased">
      <HmCloneHero
        onSubmitLead={handleLeadSubmit}
        headline={heroHeadline}
        subheadline={heroSubheadline}
        formSubmitLabel={heroFormSubmitLabel}
        microcopy={heroMicrocopy}
        hideLogo={heroHideLogo}
        hideLogoText={heroHideLogo}
        highlightCard={heroHighlightCard}
        centerCard={heroCenterCard}
      />
      {isLp ? (
        <>
          <LpFimDoRealizadorIdentificacao />
          <LpFimDoRealizadorDiagnostico />
          <LpFimDoRealizadorApresentacao />
          <LpFimDoRealizadorMetodologia />
          <LpFimDoRealizadorBeneficios />
          <LpFimDoRealizadorParaQuem />
          <LpFimDoRealizadorAutoridade />
          <LpFimDoRealizadorConviteFinal onScrollToCapture={scrollToHeroCapture} />
          <LpFimStickyCta onClick={scrollToHeroCapture} showAfterId="lp-fim-identificacao" />
        </>
      ) : (
        <>
          {showAudience ? <HmCloneAudience onScrollToCapture={scrollToHeroCapture} showCta={!isCafeFlow} /> : null}
          {isCafeFlow ? <HmCafeAbout /> : null}
          {isCafeFlow ? <HmCafeBenefits /> : null}
          {isCafeFlow ? <HmCafeInvite /> : null}
          <HmCloneAuthority onScrollToCapture={scrollToHeroCapture} showCta={!isCafeFlow} />
          {isCafeFlow ? <HmCafeStickyCta onClick={scrollToHeroCapture} /> : null}
        </>
      )}
      <HmCloneFooter />
    </div>
  )
}
