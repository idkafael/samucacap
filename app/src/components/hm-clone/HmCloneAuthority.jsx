import { motion } from 'framer-motion'
import { HmCloneWaveDivider } from './HmCloneWaveDivider'

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

/** @param {{ onScrollToCapture: () => void; showCta?: boolean }} props */
export function HmCloneAuthority({ onScrollToCapture, showCta = true }) {
  return (
    <section className="bg-[#020202]">
      <HmCloneWaveDivider />

      <div className="mx-auto max-w-3xl px-4 pb-12 pt-4 sm:px-6 sm:pb-16 md:pb-20 md:pt-6">

        {/* Foto */}
        <motion.div
          className="hm-authority-photo-wrap mx-auto mb-10 sm:mb-12"
          {...inView(0)}
        >
          <img
            src="/images/icon.jpg"
            alt="Samuel Souza"
            width={800}
            height={1000}
            loading="lazy"
            decoding="async"
            className="hm-authority-photo"
          />
        </motion.div>

        {/* Kicker */}
        <motion.p className="hm-section-kicker" {...inView(0.05)}>
          SOBRE O MENTOR
        </motion.p>

        {/* Heading */}
        <motion.h2 className="hm-section-heading" {...inView(0.1)}>
          Quem é Samuel Souza?
        </motion.h2>

        <div className="hm-section-rule mx-auto" aria-hidden="true" />

        {/* Bio */}
        <motion.p className="hm-authority-bio" {...inView(0.15)}>
          Samuel Souza, o Samuca, é mentor e estrategista com quase duas décadas ajudando empresários e equipes
          a alinhar propósito, liderança e performance. Ele acredita que o CNPJ espelha a frequência do CPF:
          quando o líder eleva consciência, corpo e mentalidade, o negócio deixa de reagir ao caos e passa a
          vibrar em outro patamar.
        </motion.p>

        <motion.p className="hm-authority-bio" style={{ marginTop: '1.25rem' }} {...inView(0.19)}>
          Nesse encontro você terá o Samuel frente a frente e poderá tirar dúvidas diretamente com ele.
        </motion.p>

        {/* CTA */}
        {showCta ? (
          <motion.div
            className="mt-10 flex justify-center sm:mt-12"
            {...inView(0.28)}
          >
            <button
              type="button"
              onClick={onScrollToCapture}
              className="hm-clone-btn-cta inline-flex min-h-[3.25rem] cursor-pointer items-center justify-center rounded-[10px] px-6 py-3 text-center text-base font-semibold leading-none tracking-tight text-white sm:min-h-[3.5rem] sm:px-9 sm:text-lg md:text-[22px]"
              aria-label="Ir para o formulário de inscrição no topo da página"
            >
              QUERO PARTICIPAR DO ENCONTRO
            </button>
          </motion.div>
        ) : null}
      </div>

      <HmCloneWaveDivider flip />
    </section>
  )
}
