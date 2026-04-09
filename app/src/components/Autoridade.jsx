import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from './SectionDivider'

const credenciais = [
  '18 anos de experiência',
  '2 graduações: Administração e Teologia',
  '3 MBAs: Coaching, PNL, Gestão de Pessoas',
  'Mestrado em Inteligência Emocional Corporativa',
  '+100 mil pessoas impactadas',
  '+1.000 empresas ativadas',
]

export function Autoridade() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="autoridade" className="relative z-[1] px-5 py-10 md:px-6 md:py-14">
      <SectionDivider />
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-white-cream"
        >
          Sobre seu mentor
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-md lg:mx-0"
          >
            <div className="rounded-[2px] border-2 border-gold bg-dark">
              <div className="relative aspect-[3/4] max-h-[520px] overflow-hidden">
                <img
                  src="/images/samuca.jpg"
                  alt="Samuel Souza — mentor do Grupo Alta Frequência"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={960}
                  height={1280}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-white2"
          >
            <p className="font-body text-sm font-semibold uppercase tracking-wide text-gold">
              Sobre seu mentor
            </p>
            <h3 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] font-light text-gold">
              Samuel Souza
            </h3>
            <p className="mt-1 font-body text-lg font-medium text-white-cream">Samuca</p>

            <div className="mt-6 space-y-4 text-sm leading-relaxed md:text-base">
              <p>
                Samuel Souza — Samuca — é mentor e estrategista com trajetória de quase duas décadas
                ajudando empresários e equipes a alinhar propósito, liderança e performance. Ele
                acredita que o CNPJ espelha a frequência do CPF: quando o líder eleva consciência,
                corpo e mentalidade, o negócio deixa de reagir ao caos e passa a vibrar em outro
                patamar.
              </p>
              <p>
                Sua formação une Administração e Teologia a MBAs em Coaching, PNL e Gestão de
                Pessoas, além de Mestrado em Inteligência Emocional Corporativa, sempre aplicados na
                prática com mais de 100 mil pessoas impactadas e milhares de empresas ativadas no
                Brasil.
              </p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2">
              {credenciais.map((c) => (
                <li
                  key={c}
                  className="rounded-sm border border-gold/40 bg-gold/10 px-3 py-2 font-body text-sm font-medium leading-snug text-gold-light"
                >
                  {c}
                </li>
              ))}
            </ul>

            <a
              href="https://instagram.com/osamucasouza"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex font-body text-base font-medium text-gold transition-colors hover:text-gold-light"
            >
              @osamucasouza
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
