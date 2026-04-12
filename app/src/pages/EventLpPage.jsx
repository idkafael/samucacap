import { useLocation } from 'react-router-dom'
import HighTicketHmClonePage from './HighTicketHmClonePage'

/**
 * Raiz `/`: audiência (“Esse encontro…”) + sem fases.
 * `/lp`: sem audiência + seção `#lp-fases`.
 */
export default function EventLpPage() {
  const { pathname } = useLocation()
  const path = pathname.replace(/\/$/, '') || '/'
  const isLp = path === '/lp'
  // Raiz `/` mantém o estado atual; `/lp` muda apenas o Hero (primeira dobra).
  const rootHeroHeadline = 'COMECE SEU DIA COM CLAREZA, DIREÇÃO E PODER DE FREQUÊNCIA'
  const rootHeroSubheadline =
    'Todos os dias, ao vivo pela manhã, você vai entender por que está travado mesmo tentando…'

  const lpHeroHeadline = 'O FIM DO REALIZADOR FRUSTRADO'
  const lpHeroSubheadline =
    'Descubra por que você tenta crescer, se esforça, busca conhecimento… mas continua travado e como desenvolver o poder de realização necessário para avançar de verdade na vida'

  return (
    <HighTicketHmClonePage
      showPhases={isLp}
      showAudience={!isLp}
      isCafeFlow={!isLp}
      heroHeadline={isLp ? lpHeroHeadline : rootHeroHeadline}
      heroSubheadline={isLp ? lpHeroSubheadline : rootHeroSubheadline}
      heroFormSubmitLabel={isLp ? 'QUERO PARTICIPAR DO EVENTO' : 'ENTRAR NO GRUPO DO CAFÉ COM FREQUÊNCIA'}
      heroHideLogo={true}
      heroHighlightCard={true}
      heroCenterCard={isLp}
    />
  )
}
