import { HmCloneHeroCaptureForm } from './HmCloneHeroCaptureForm'
import { HmCloneLogoMark } from './HmCloneLogoMark'
import { IconCheckCircle } from './IconCheckCircle'
import { CafeIcon } from './CafeIcon'

const HERO_BG = 'https://i.imgur.com/UACNYcH.jpg'
const HERO_BG_MOBILE = 'https://i.imgur.com/00Rjgqe.jpg'

const BULLETS = [
  'Funis de CAC zero',
  'Veja os principais funis para usar em 2026',
  'Como escalar com múltiplos funis rodando simultaneamente',
]

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
  centerCard = false,
}) {
  return (
    <section className="hm-hero-section relative isolate overflow-hidden lg:min-h-[min(100svh,56rem)]">
      {/* Desktop: fundo em tela cheia + gradiente lateral */}
      <div
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-no-repeat lg:block"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundPosition: '58% 18%',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black via-black/70 to-transparent lg:block lg:via-black/45 xl:via-black/28" />

      {/* Watermark decorativo — xícara vetorizada (desktop only, tem foto no mobile) */}
      <CafeIcon className="hm-wm hm-wm--br hidden lg:block" />

      {/* Mobile: topo da imagem alinhado ao topo do site; cover corta de baixo, não da cabeça */}
      <div className="relative z-0 h-[min(48vh,420px)] w-full overflow-hidden sm:h-[min(44vh,380px)] lg:hidden">
        <img
          src={HERO_BG_MOBILE}
          alt=""
          className="absolute left-0 top-[-28px] h-[calc(100%+28px)] w-full object-cover object-top"
          decoding="async"
        />
        {/* Gradiente duplo: fade suave no topo, dissolve totalmente para preto nos 40% finais */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black" style={{ backgroundImage: 'linear-gradient(to bottom, rgb(0 0 0 / 0.08) 0%, rgb(0 0 0 / 0.18) 40%, rgb(0 0 0 / 0.72) 72%, rgb(0 0 0 / 1) 100%)' }} />
      </div>

      <div className="hm-hero-content-wrap relative z-10 w-full -mt-[110px] lg:mt-0">
        <div
          className={`mx-auto flex w-full max-w-7xl flex-col px-4 pb-14 pt-0 sm:px-6 sm:pb-16 sm:pt-0 lg:min-h-[min(100svh,56rem)] lg:px-10 lg:pb-16 lg:pt-10 ${
            centerCard ? 'items-center lg:items-center' : 'lg:flex-row lg:items-center'
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
        </div>
        </div>
      </div>
    </section>
  )
}
