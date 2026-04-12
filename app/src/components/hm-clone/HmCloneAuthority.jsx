import { motion } from 'framer-motion'
import { HmCloneWaveDivider } from './HmCloneWaveDivider'
import { CafeIcon } from './CafeIcon'

/**
 * Collage (mesma ordem do layout):
 * [0] esq. cima 4/3 — icon | [1] esq. baixo 4/3 — jXIljsi
 * [2] dir. cima 5/3 — NdEW5op | [3] dir. baixo tall — ALOQJlA
 */
const AUTHORITY_COLLAGE_SRC = [
  '/images/icon.jpg',
  'https://i.imgur.com/jXIljsi.jpg',
  'https://i.imgur.com/NdEW5op.jpg',
  'https://i.imgur.com/ALOQJlA.jpg',
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

/** @param {{ onScrollToCapture: () => void; showCta?: boolean }} props */
export function HmCloneAuthority({ onScrollToCapture, showCta = true }) {
  return (
    <section className="relative bg-[#020202] overflow-hidden">
      <CafeIcon className="hm-wm hm-wm--mid-r" />
      <HmCloneWaveDivider />

      <div className="mx-auto max-w-3xl px-4 pt-4 sm:px-6 md:pt-6 pb-3 sm:pb-4 md:pb-5">

        {/* Galeria */}
        <motion.div
          className="hm-authority-collage-wrap mx-auto mb-10 sm:mb-12"
          {...inView(0)}
        >
          <div
            className="hm-authority-collage"
            role="group"
            aria-label="Fotos de Samuel Souza"
          >
            {/* Coluna esquerda: portrait (cima) + landscape (baixo) */}
            <div className="hm-authority-collage-col">
              <div className="hm-authority-collage-slot hm-authority-collage-slot--portrait">
                <img
                  src={AUTHORITY_COLLAGE_SRC[0]}
                  alt=""
                  className="hm-authority-collage-img hm-authority-collage-img--focus-upper"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="hm-authority-collage-slot hm-authority-collage-slot--landscape">
                <img
                  src={AUTHORITY_COLLAGE_SRC[1]}
                  alt=""
                  className="hm-authority-collage-img hm-authority-collage-img--focus-upper hm-authority-collage-img--zoom-landscape-esq"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Coluna direita: landscape (cima) + portrait (baixo) */}
            <div className="hm-authority-collage-col">
              <div className="hm-authority-collage-slot hm-authority-collage-slot--landscape">
                <img
                  src={AUTHORITY_COLLAGE_SRC[2]}
                  alt=""
                  className="hm-authority-collage-img hm-authority-collage-img--focus-fullbody"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="hm-authority-collage-slot hm-authority-collage-slot--portrait">
                <img
                  src={AUTHORITY_COLLAGE_SRC[3]}
                  alt=""
                  className="hm-authority-collage-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
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
          Samuel Souza, o Samuca, é mentor, advisor, escritor bestseller e fundador do Grupo Alta Frequência, um
          ecossistema de mentorias, treinamentos e gestão que já impactou mais de mil empresas e mais de cem mil
          pessoas.
        </motion.p>

        {/* CTA — logo abaixo da bio */}
        {showCta ? (
          <motion.div
            className="mt-6 flex justify-center pb-6 sm:mt-7 sm:pb-8 md:pb-10"
            {...inView(0.2)}
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
    </section>
  )
}
