import { motion } from 'framer-motion'

const stagger = {
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

function scrollToCaptura(e) {
  e.preventDefault()
  document.getElementById('captura')?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative z-[1] flex min-h-screen flex-col pt-[4.5rem] lg:flex-row lg:items-stretch"
    >
      <div className="relative z-[1] mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-5 py-12 md:px-6 lg:flex-row lg:items-center lg:gap-16 lg:py-16">
        <motion.div
          className="flex flex-1 flex-col justify-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="mb-6 font-body text-sm font-medium uppercase tracking-wide text-gold-light md:text-base"
          >
            Ecossistema de gestão, treinamentos e mentorias B2B
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-[clamp(2rem,6vw,5rem)] font-light leading-[1.08] text-white-cream"
          >
            O seu CNPJ nunca vai vibrar
            <br />
            <span className="italic text-white2">acima do seu CPF.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl font-body text-base leading-relaxed text-white2 md:text-lg"
          >
            Empresários que operam em alta frequência constroem negócios lucrativos, times engajados e
            uma vida com propósito.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10">
            <motion.a
              href="#captura"
              onClick={scrollToCaptura}
              className="inline-block rounded-sm bg-gold px-8 py-3.5 text-center font-body text-sm font-semibold uppercase tracking-wide text-black shadow-[0_0_24px_rgba(201,168,76,0.25)] md:text-base"
              whileHover={{ scale: 1.03, boxShadow: '0 0 32px rgba(201,168,76,0.4)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              Quero entrar na alta frequência
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border border-gold/25 bg-black/40 px-4 py-3 font-body text-sm leading-snug text-white2 md:text-base"
          >
            <span className="text-gold">✦</span>
            <span>+100 mil pessoas impactadas</span>
            <span className="hidden text-gold/50 sm:inline">✦</span>
            <span>+1.000 empresas</span>
            <span className="hidden text-gold/50 md:inline">✦</span>
            <span className="w-full text-white-cream md:w-auto">18 anos de experiência</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-1 justify-center lg:justify-end"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full max-w-sm">
            <div
              className="rounded-[2px] p-px"
              style={{
                background:
                  'linear-gradient(145deg, #c9a84c 0%, #8a6a1e 45%, #e8c97a 100%)',
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-dark">
                <img
                  src="/images/samuca.jpg"
                  alt="Samuel Souza — mentor do Grupo Alta Frequência"
                  className="absolute inset-0 h-full w-full object-cover"
                  width={960}
                  height={1280}
                  loading="eager"
                  decoding="async"
                />
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-1/4 max-w-[120px]"
                  style={{
                    background:
                      'linear-gradient(90deg, #080808 0%, rgba(8,8,8,0.65) 55%, transparent 100%)',
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
