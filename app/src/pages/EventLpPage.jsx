import { PageBackground } from '../components/PageBackground'
import { Depoimentos } from '../components/Depoimentos'
import { LpBonusCountdownHeader } from '../components/lp/LpBonusCountdownHeader'
import { LpBonusPropositoSection } from '../components/lp/LpBonusPropositoSection'
import { LpEventAuthorityHeader } from '../components/lp/LpEventAuthorityHeader'
import { LpEventComunicacao } from '../components/lp/LpEventComunicacao'
import { LpEventMessaging } from '../components/lp/LpEventMessaging'
import { LpFixedCtaAfterMessaging } from '../components/lp/LpFixedCtaAfterMessaging'
import { Footer } from '../components/Footer'

/** Convite ao evento — rota `/lp` (sem captura) + prova social em vídeo. */
export default function EventLpPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-[3.35rem] sm:pt-[3.65rem] md:pt-16">
      <PageBackground />
      <LpBonusCountdownHeader />
      <LpEventAuthorityHeader />
      <LpEventComunicacao />
      <LpEventMessaging />
      <LpBonusPropositoSection />
      <Depoimentos />
      <Footer compact />
      <LpFixedCtaAfterMessaging />
    </main>
  )
}
