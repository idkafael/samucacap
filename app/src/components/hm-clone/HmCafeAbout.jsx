import { motion } from 'framer-motion'
import { CafeIcon } from './CafeIcon'

const ITEMS = [
  'Clareza sobre o que realmente importa',
  'Ajustes práticos de mentalidade e comportamento',
  'Direcionamento para sua vida pessoal e profissional',
  'Explicações simples sobre frequência e consciência',
  'Aplicações reais para sair do ciclo de travamento',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] } },
}

export function HmCafeAbout() {
  return (
    <section
      id="hm-cafe-about"
      className="hm-cafe-about relative bg-[#020202] px-5 pb-20 pt-2 sm:px-6 sm:pb-24 sm:pt-4 md:pb-28 overflow-hidden"
    >
      <CafeIcon className="hm-wm hm-wm--bl" />
      <div className="mx-auto max-w-xl sm:max-w-2xl">

        <p className="hm-section-kicker">O PROGRAMA</p>

        <h2 className="hm-section-heading">
          O que é o Café com Frequência
        </h2>

        <p className="hm-about-description">
          Um encontro diário, ao vivo, onde você começa o seu dia com direção clara.
          De segunda a sexta, pela manhã, você vai receber:
        </p>

        <div className="hm-section-rule mx-auto" aria-hidden="true" />

        <motion.div
          className="hm-about-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {ITEMS.map((text) => (
            <motion.div key={text} className="hm-about-item" variants={itemVariants}>
              <span className="hm-about-dot" aria-hidden="true" />
              <p className="hm-about-text">{text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
