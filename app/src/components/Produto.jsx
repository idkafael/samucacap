import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from './SectionDivider'

function scrollToCaptura(e) {
  e.preventDefault()
  document.getElementById('captura')?.scrollIntoView({ behavior: 'smooth' })
}

const bullets = ['[Benefício 1]', '[Benefício 2]', '[Benefício 3]', '[Benefício 4]']

export function Produto() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="produto" className="relative z-[1] px-5 py-10 md:px-6 md:py-14">
      <SectionDivider />
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-white-cream"
        >
          O que você vai encontrar
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-12 max-w-2xl border border-gold/30 bg-dark px-6 py-10 md:px-12 md:py-14"
        >
          <span className="inline-block bg-gold px-3 py-1.5 font-body text-sm font-bold uppercase tracking-wide text-black">
            Em breve
          </span>
          <h3 className="mt-6 font-display text-3xl font-light text-gold md:text-4xl">
            [Nome do produto]
          </h3>
          <p className="mt-4 font-body text-white2">
            [Descrição do produto será adicionada aqui]
          </p>
          <ul className="mt-6 space-y-3 font-body text-sm text-white-cream md:text-base">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {b}
              </li>
            ))}
          </ul>
          <motion.a
            href="#captura"
            onClick={scrollToCaptura}
            className="mt-10 block w-full rounded-sm bg-gold py-3.5 text-center font-body text-sm font-semibold uppercase tracking-wide text-black"
            whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(201,168,76,0.35)' }}
            whileTap={{ scale: 0.98 }}
          >
            Quero saber mais
          </motion.a>
        </motion.div>

        <p className="mt-10 text-center font-body text-sm text-white2/80">
          Mais produtos do ecossistema serão apresentados após o cadastro.
        </p>
      </div>
    </section>
  )
}
