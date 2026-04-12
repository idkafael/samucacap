import { motion } from 'framer-motion'
import { CafeIcon } from './CafeIcon'

const ITEMS = [
  'Você para de viver em conflito entre trabalho e família',
  'Começa a ter clareza do que fazer todos os dias',
  'Diminui a autossabotagem',
  'Sente mais consistência nas suas ações',
  'Começa a ver evolução real, não só tentativa',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.16, 1, 0.3, 1] },
  },
}

export function HmCafeBenefits() {
  return (
    <section className="hm-cafe-benefits relative bg-[#020202] px-5 pb-20 pt-2 sm:px-6 sm:pb-28 sm:pt-4 overflow-hidden">
      <CafeIcon className="hm-wm hm-wm--tr" />
      <div className="mx-auto max-w-xl sm:max-w-2xl">

        {/* Kicker */}
        <p className="hm-cafe-benefits-kicker">TRANSFORMAÇÕES</p>

        {/* Heading */}
        <h2 className="hm-cafe-benefits-heading">
          O que começa a mudar quando você participa
        </h2>

        {/* Gold rule */}
        <div className="hm-cafe-benefits-rule" aria-hidden="true" />

        {/* Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {ITEMS.map((text, i) => (
            <motion.div key={text} className="hm-cafe-benefits-item" variants={itemVariants}>
              <span className="hm-cafe-benefits-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="hm-cafe-benefits-text">{text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
