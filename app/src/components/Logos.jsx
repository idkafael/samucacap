import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from './SectionDivider'
import { clientLogos } from '../data/clientLogos'

function altFromLogoPath(src) {
  const file = src.split('/').pop() || ''
  const base = file.replace(/\.webp$/i, '')
  const cleaned = base.replace(/^imgi_\d+_/, '').replace(/[-_]+/g, ' ').trim()
  if (!cleaned) return 'Logo parceiro'
  return `Logo ${cleaned}`
}

/** Base: 32s por volta equivalente a 6 logos; escala com a quantidade; fator menor que 1 acelera. */
const MARQUEE_BASE_SEC = 32
const MARQUEE_BASE_COUNT = 6
const MARQUEE_DURATION_SCALE = 0.88

export function Logos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const row = [...clientLogos, ...clientLogos]
  const marqueeDurationSec =
    ((MARQUEE_BASE_SEC * clientLogos.length) / MARQUEE_BASE_COUNT) * MARQUEE_DURATION_SCALE

  return (
    <section id="logos" className="relative z-[1] px-0 py-10 md:py-14">
      <div className="px-5 md:px-6">
        <SectionDivider />
      </div>
      <div ref={ref} className="mx-auto max-w-6xl px-5 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-white-cream"
        >
          Quem já passou pela Alta Frequência
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mt-12 overflow-hidden border-y border-gold/10 py-6"
        >
          <div
            className="flex w-max animate-marquee"
            style={{ animationDuration: `${marqueeDurationSec}s` }}
          >
            {row.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="mx-5 flex h-20 w-36 shrink-0 items-center justify-center md:mx-8 md:h-24 md:w-44"
              >
                <img
                  src={src}
                  alt={altFromLogoPath(src)}
                  className="max-h-16 max-w-full object-contain grayscale opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0 md:max-h-[4.5rem]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
