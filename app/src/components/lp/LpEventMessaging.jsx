import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/** Proposta alinhada à copy do index (Grupo Alta Frequência / Autoridade). */
export function LpEventMessaging() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section
      ref={ref}
      id="lp-messaging"
      className="relative z-[1] px-4 pb-10 pt-3 sm:px-5 md:px-6 md:pb-20 md:pt-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-lg text-center md:max-w-xl"
      >
        <h2 className="font-condensed text-[clamp(1.02rem,3.65vw,1.9rem)] font-bold uppercase leading-[1.18] tracking-wide text-white-cream">
          <span className="text-gold">Propósito, liderança e performance </span>
          <span className="text-white-cream">na mesma frequência</span>
        </h2>

        <p className="mt-3 font-display font-light text-[0.9375rem] leading-[1.65] tracking-normal text-white2/92 sm:mt-4 sm:text-base sm:leading-[1.7] md:mt-6 md:text-[1.0625rem]">
          Samuel Souza, o Samuca, é mentor e estrategista com quase duas décadas ajudando empresários
          e equipes a alinhar propósito, liderança e performance. Ele acredita que o CNPJ espelha a
          frequência do CPF: quando o líder eleva consciência, corpo e mentalidade, o negócio deixa de
          reagir ao caos e passa a vibrar em outro patamar.
        </p>

        <p className="mt-3 font-body text-[0.62rem] font-semibold uppercase leading-relaxed tracking-wider text-gold/90 sm:mt-4 sm:text-xs md:mt-8 md:text-sm">
          +100 mil pessoas impactadas · +1.000 empresas · 18 anos
        </p>
      </motion.div>
    </section>
  )
}
