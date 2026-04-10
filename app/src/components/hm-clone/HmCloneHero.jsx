import { HmCloneHeroCaptureForm } from './HmCloneHeroCaptureForm'
import { HmCloneLogoMark } from './HmCloneLogoMark'
import { IconCheckCircle } from './IconCheckCircle'

const HERO_BG = '/images/aceleracao-hero-desktop.png'
const HERO_BG_MOBILE = '/images/mobile.png'

const BULLETS = [
  'Funis de CAC zero',
  'Veja os principais funis para usar em 2026',
  'Como escalar com múltiplos funis rodando simultaneamente',
]

function IconCalendar({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v2H3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zm13 8H4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10z" />
    </svg>
  )
}

/**
 * @param {{
 *   onSubmitLead: (data: { email: string, whatsapp: string }) => Promise<{ ok?: boolean, error?: string }>
 * }} props
 */
export function HmCloneHero({ onSubmitLead }) {
  return (
    <section className="hm-hero-section relative isolate overflow-hidden lg:min-h-[min(100svh,56rem)]">
      {/* Desktop: fundo em tela cheia + gradiente lateral */}
      <div
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-[position:72%_center] bg-no-repeat lg:block"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black via-black/80 to-transparent lg:block lg:via-black/55 xl:via-black/35" />

      {/* Mobile: topo da imagem alinhado ao topo do site; cover corta de baixo, não da cabeça */}
      <div className="relative z-0 h-[min(52vh,440px)] w-full overflow-hidden sm:h-[min(46vh,390px)] lg:hidden">
        <img
          src={HERO_BG_MOBILE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-top"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black" />
      </div>

      <div className="hm-hero-content-wrap relative z-10 w-full">
        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 pb-14 pt-2 sm:px-6 sm:pb-16 sm:pt-3 lg:min-h-[min(100svh,56rem)] lg:flex-row lg:items-start lg:px-10 lg:pb-20 lg:pt-14">
        <div className="mx-auto w-full max-w-xl lg:mx-0">
          <div className="mb-1.5 flex w-full justify-center lg:mb-5 lg:justify-start">
            <HmCloneLogoMark />
          </div>

          <h1 className="m-0 text-center text-[1.65rem] font-bold leading-snug tracking-[-0.06em] text-[var(--hm-hero-heading)] sm:text-4xl sm:leading-[1.15] lg:text-left lg:text-[36px] lg:leading-[1.2]">
            Acesse os funis que te farão escalar para{' '}
            <span className="text-[var(--hm-hero-orange)]">+7 dígitos com High Ticket</span> sem inflar o CAC
          </h1>

          <ul className="mx-auto mt-4 max-w-lg space-y-0 sm:mt-6 lg:mt-7 lg:mx-0 lg:max-w-none">
            {BULLETS.map((label) => (
              <li
                key={label}
                className="flex gap-3 border-b border-[color:var(--hm-hero-divider)] py-2.5 text-left text-[0.95rem] leading-snug text-[var(--hm-hero-copy)] first:pt-0 sm:text-base"
              >
                <IconCheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-[var(--hm-hero-bullet)]" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <HmCloneHeroCaptureForm onSubmitLead={onSubmitLead} />

          <div className="mt-4 flex items-start justify-center gap-2 text-left sm:mt-5 lg:justify-start">
            <IconCalendar className="mt-0.5 h-5 w-5 shrink-0 text-[var(--hm-hero-blue)]" aria-hidden />
            <p className="m-0 text-[0.8125rem] font-bold uppercase leading-snug tracking-wide text-[var(--hm-hero-copy)] sm:text-sm">
              <span className="text-[var(--hm-hero-blue)]">23/03</span>, às 18h, sala fechada do{' '}
              <span className="text-[var(--hm-hero-heading)]">Zoom</span>
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
