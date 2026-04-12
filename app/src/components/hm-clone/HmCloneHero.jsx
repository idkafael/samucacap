import { HmCloneHeroCaptureForm } from './HmCloneHeroCaptureForm'
import { HmCloneLogoMark } from './HmCloneLogoMark'
import { IconCheckCircle } from './IconCheckCircle'

const HERO_BG = 'https://i.imgur.com/nW4ciZm.jpg'
const HERO_BG_MOBILE = HERO_BG

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
 *   headline?: string
 *   subheadline?: string
 *   hideLogoText?: boolean
 *   formSubmitLabel?: string
 *   highlightCard?: boolean
 *   hideLogo?: boolean
 *   microcopy?: string
 *   showCalendar?: boolean
 *   centerCard?: boolean
 * }} props
 */
export function HmCloneHero({
  onSubmitLead,
  headline,
  subheadline,
  hideLogoText = false,
  formSubmitLabel,
  highlightCard = false,
  hideLogo = false,
  microcopy,
  showCalendar = true,
  centerCard = false,
}) {
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
      <div className="relative z-0 h-[min(44vh,400px)] w-full overflow-hidden sm:h-[min(40vh,340px)] lg:hidden">
        <img
          src={HERO_BG_MOBILE}
          alt=""
          className="absolute left-0 top-[-45px] h-[calc(100%+45px)] w-full object-cover object-top"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-black" />
      </div>

      <div className="hm-hero-content-wrap relative z-10 w-full -mt-[50px] lg:mt-0">
        <div
          className={`mx-auto flex w-full max-w-7xl flex-col px-4 pb-14 pt-0 sm:px-6 sm:pb-16 sm:pt-0 lg:min-h-[min(100svh,56rem)] lg:px-10 lg:pb-20 lg:pt-14 ${
            centerCard ? 'items-center lg:items-start' : 'lg:flex-row lg:items-start'
          }`}
        >
        <div
          className={`mx-auto w-full max-w-xl ${
            highlightCard ? 'hm-cafe-hero-card px-5 py-7 sm:px-8 sm:py-9' : ''
          } lg:mx-0`}
        >
          {hideLogo ? null : (
            <div className="mb-1.5 flex w-full justify-center lg:mb-5 lg:justify-start">
              <HmCloneLogoMark hideText={hideLogoText} />
            </div>
          )}

          <h1 className="hm-hero-h1 m-0 text-center text-[1.75rem] text-[var(--hm-hero-heading)] sm:text-[2.2rem] lg:text-left lg:text-[2.6rem]">
            {headline ?? (
              <>
                Acesse os funis que te farão escalar para{' '}
                <span className="text-[var(--hm-hero-orange)]">+7 dígitos com High Ticket</span> sem inflar o CAC
              </>
            )}
          </h1>

          {subheadline ? (
            <p className="hm-hero-sub mx-auto mt-4 max-w-2xl text-center text-[1rem] leading-relaxed text-[var(--hm-hero-copy)] sm:mt-5 sm:text-[1.05rem] lg:mx-0 lg:mt-6 lg:text-left">
              {subheadline}
            </p>
          ) : (
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
          )}

          <div id="lp-hero-captura" className="scroll-mt-4">
            <HmCloneHeroCaptureForm onSubmitLead={onSubmitLead} submitLabel={formSubmitLabel} />
          </div>

          {microcopy ? (
            <p className="mt-4 text-center text-[0.85rem] font-semibold leading-snug text-[var(--hm-hero-copy)] sm:mt-5 sm:text-sm lg:text-left">
              {microcopy}
            </p>
          ) : null}

          {showCalendar ? (
            <div className="mt-5 flex flex-col items-center gap-2 sm:mt-6 lg:items-start">
              <div className="flex items-center gap-2.5 rounded-full border border-[var(--hm-hero-orange)]/30 bg-[var(--hm-hero-orange)]/10 px-4 py-2">
                <IconCalendar className="h-4 w-4 shrink-0 text-[var(--hm-hero-orange)]" aria-hidden />
                <p className="m-0 text-[0.82rem] font-bold uppercase leading-none tracking-wide text-[var(--hm-hero-heading)]">
                  A partir do dia <span className="text-[var(--hm-hero-orange)]">16 de Abril</span>
                </p>
              </div>
              <p className="m-0 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--hm-hero-copy)]/60">
                De segunda a sexta · ao vivo no Instagram
              </p>
            </div>
          ) : null}
        </div>
        </div>
      </div>
    </section>
  )
}
