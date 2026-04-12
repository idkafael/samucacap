import { motion } from 'framer-motion'

const TRIES = [
  'Tenta organizar a vida.',
  'Tenta crescer no trabalho.',
  'Tenta dar atenção pra família.',
]

const OUTCOMES = [
  'Ou você sacrifica o trabalho',
  'Ou você sacrifica a família',
  'Ou tenta equilibrar tudo… e não cresce em nada',
]

const CORE = 'Você sente que poderia mais… mas não consegue acessar isso.'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

/** @param {{ onScrollToCapture: () => void; showCta?: boolean }} props */
export function HmCloneAudience({ onScrollToCapture, showCta = true }) {
  return (
    <section className="hm-clone-audience bg-[#020202] px-5 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-16 md:pb-28">
      <div className="mx-auto max-w-xl sm:max-w-2xl">

        <motion.p
          className="hm-section-kicker"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          ISSO É PARA VOCÊ
        </motion.p>

        <motion.h2
          className="hm-section-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          Se você está tentando… mas não está avançando
        </motion.h2>

        <div className="hm-section-rule mx-auto" aria-hidden="true" />

        <motion.div
          className="hm-audience-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tentativas */}
          <motion.ul
            className="hm-audience-list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {TRIES.map((text) => (
              <motion.li key={text} className="hm-audience-item" variants={fadeUp}>
                <span className="hm-audience-dash" aria-hidden="true">—</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Virada */}
          <p className="hm-audience-pivot">Mas no final…</p>

          {/* Consequências */}
          <motion.ul
            className="hm-audience-list hm-audience-list--outcomes"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {OUTCOMES.map((text) => (
              <motion.li key={text} className="hm-audience-item hm-audience-item--outcome" variants={fadeUp}>
                <span className="hm-audience-dash hm-audience-dash--outcome" aria-hidden="true">×</span>
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Dor central */}
          <div className="hm-audience-core">
            <p className="hm-audience-core-label">E o pior:</p>
            <p className="hm-audience-core-text">{CORE}</p>
          </div>
        </motion.div>
      </div>

      {showCta ? (
        <div className="mx-auto mt-10 flex justify-center sm:mt-12 md:mt-14">
          <button
            type="button"
            onClick={onScrollToCapture}
            className="hm-clone-btn-cta inline-flex min-h-[3.25rem] cursor-pointer items-center justify-center rounded-[10px] px-7 py-3 text-center text-lg font-semibold leading-none tracking-tight text-white sm:min-h-[3.5rem] sm:px-10 sm:text-[22px]"
            aria-label="Ir para o formulário de inscrição no topo da página"
          >
            ENTRAR NO GRUPO DO CAFÉ COM FREQUÊNCIA
          </button>
        </div>
      ) : null}
    </section>
  )
}
