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
  return <HighTicketHmClonePage showPhases={isLp} showAudience={!isLp} />
}
