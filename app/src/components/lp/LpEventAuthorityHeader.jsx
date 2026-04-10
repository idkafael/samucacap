import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Hero do evento — igual ao print: retrato em destaque + marca sobreposta (sem formulário).
 */
export function LpEventAuthorityHeader() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative z-[1] w-full pt-[max(0.5rem,env(safe-area-inset-top))]"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="relative mx-auto w-full max-w-2xl"
      >
        <div className="relative aspect-[3/4] max-h-[min(48dvh,360px)] w-full overflow-hidden sm:max-h-[min(52dvh,420px)] md:max-h-[min(62dvh,520px)]">
          <img
            src="/images/samuca.jpg"
            alt="Samuel Souza — Alta Frequência"
            className="h-full w-full object-cover object-[center_8%] sm:object-[center_6%]"
            width={960}
            height={1280}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/12 via-transparent to-black/20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/88 via-black/40 to-transparent sm:h-[42%]"
            aria-hidden
          />

          <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-10 text-center sm:px-5 sm:pb-5 sm:pt-14 md:pb-8 md:pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-body text-[clamp(1.35rem,5.8vw,2.4rem)] font-bold leading-[1.02] tracking-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_4px_20px_rgba(0,0,0,0.65)]"
            >
              <span className="text-white-cream">Alta </span>
              <span className="text-white-cream">
                Frequ<span className="font-semibold text-gold-light">ê</span>ncia
              </span>
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
