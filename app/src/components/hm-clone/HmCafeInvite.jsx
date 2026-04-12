import { motion } from 'framer-motion'

const ITEMS = [
  'Acesso às lives diárias',
  'Avisos e links das transmissões',
  'Conteúdos complementares',
  'Direcionamentos práticos',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: [0.16, 1, 0.3, 1] } },
}

export function HmCafeInvite() {
  return (
    <section className="hm-cafe-invite bg-[#020202] px-5 pb-10 pt-2 sm:px-6 sm:pb-12 sm:pt-4 md:pb-14">
      <div className="mx-auto max-w-xl sm:max-w-2xl">

        <p className="hm-section-kicker">O QUE VOCÊ RECEBE</p>

        <h2 className="hm-section-heading">
          Participe do Café com Frequência
        </h2>

        <p className="hm-about-description">
          Entre no grupo exclusivo e tenha acesso a:
        </p>

        <div className="hm-section-rule mx-auto" aria-hidden="true" />

        <motion.div
          className="hm-invite-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {ITEMS.map((text, i) => (
            <motion.div key={text} className="hm-invite-card" variants={itemVariants}>
              <span className="hm-invite-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="hm-invite-text">{text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
