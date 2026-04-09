import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from './SectionDivider'

const items = [
  {
    title: 'Falta de alinhamento entre CPF e CNPJ',
    text: 'A energia do dono é a energia da empresa. O CNPJ nunca vibra acima do CPF.',
  },
  {
    title: 'Cultura fraca',
    text: 'Sem cultura, há confusão. Onde não existe propósito, as pessoas agem por interesse.',
  },
  {
    title: 'Lideranças desenergizadas',
    text: 'Quando o líder não inspira, o time apenas cumpre tarefas.',
  },
  {
    title: 'Comunicação desalinhada',
    text: 'Ruídos e fofocas drenam energia. Feedback transforma cobrança em cuidado.',
  },
  {
    title: 'Falta de consciência de corpo, mente e alma',
    text: 'A empresa é um organismo vivo. Se um adoece, o todo enfraquece.',
  },
  {
    title: 'Falta de constância e intencionalidade',
    text: 'Constância é fazer mesmo sem vontade. Intencionalidade é agir sem esperar ordens.',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Dores() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section id="dores" className="relative z-[1] px-5 py-10 md:px-6 md:py-14">
      <SectionDivider />
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-white-cream">
            Por que sua empresa ainda não chegou lá?
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-white2 md:text-lg">
            Identifique os 6 bloqueios que impedem sua empresa de operar em Alta Frequência.
          </p>
        </motion.div>

        <motion.ul
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {items.map((item, i) => (
            <motion.li
              key={item.title}
              variants={cardVariant}
              className="relative border-l-4 border-gold bg-dark px-6 py-6 md:px-8 md:py-7"
            >
              <span className="font-condensed text-5xl font-semibold leading-none text-gold/35 md:text-6xl">
                {i + 1}
              </span>
              <h3 className="mt-3 font-body text-lg font-semibold uppercase tracking-wide text-white-cream md:text-xl">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-white2 md:text-base">
                {item.text}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
