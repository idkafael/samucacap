import { motion } from 'framer-motion'
import { SectionDivider } from '../SectionDivider'

const PLACE_IMAGES = [1, 2, 3, 4, 5].map(
  (n) => `/images/${encodeURIComponent(`place (${n}).webp`)}`,
)

/**
 * Manifesto + grid masonry (place 1–5). Countdown fica no LpBonusCountdownHeader.
 */
export function LpBonusPropositoSection() {
  return (
    <section
      id="bonus-proposito"
      className="scroll-mt-[5.5rem] md:scroll-mt-28 relative z-[1] px-5 py-10 md:px-6 md:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <SectionDivider />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-[clamp(1.5rem,4.2vw,2.35rem)] font-light leading-snug text-white-cream">
            É possível e esse{' '}
            <span className="font-semibold text-white-cream">é o meu propósito:</span>
          </h2>
          <p className="mt-6 font-body text-sm leading-relaxed text-white-cream/92 md:text-base md:leading-relaxed">
            Passei décadas construindo negócios reais e aprendi que empresa sem família sólida e fé firme
            é só ruído. Hoje reúno líderes nas mesas certas para abrir perguntas que mudam trajetórias.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-12 flex gap-3 sm:mt-14 sm:gap-4 md:mt-16"
        >
          <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-4">
            <div className="relative min-h-[200px] flex-[2] overflow-hidden rounded-2xl ring-1 ring-gold/15 sm:min-h-[260px] md:min-h-[320px]">
              <img
                src={PLACE_IMAGES[0]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative min-h-[140px] flex-1 overflow-hidden rounded-2xl ring-1 ring-gold/15 sm:min-h-[180px]">
              <img
                src={PLACE_IMAGES[3]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-4">
            <div className="relative min-h-[120px] flex-1 overflow-hidden rounded-2xl ring-1 ring-gold/15 sm:min-h-[160px]">
              <img
                src={PLACE_IMAGES[1]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative min-h-[200px] flex-[2] overflow-hidden rounded-2xl ring-1 ring-gold/15 sm:min-h-[260px] md:min-h-[300px]">
              <img
                src={PLACE_IMAGES[2]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative min-h-[120px] flex-1 overflow-hidden rounded-2xl ring-1 ring-gold/15 sm:min-h-[150px]">
              <img
                src={PLACE_IMAGES[4]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
