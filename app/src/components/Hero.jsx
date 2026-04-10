import { motion } from 'framer-motion'
import { CapturaForm } from './CapturaForm'

export function Hero({ onSubmitLead }) {
  return (
    <section
      id="inicio"
      className="relative z-[1] flex min-h-[100dvh] flex-col bg-black"
    >
      {/* Bloco da foto: termina antes da dobra; o card “encosta” no limite (estilo referência) */}
      <div className="relative h-[min(68svh,34rem)] w-full shrink-0 sm:h-[min(64svh,38rem)] md:h-[min(62svh,40rem)]">
        <img
          src="/images/samuca.jpg"
          alt="Samuel Souza — mentor do Grupo Alta Frequência"
          className="absolute inset-0 h-full w-full object-cover object-[center_8%] sm:object-[center_6%]"
          width={960}
          height={1280}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_65%_at_50%_12%,rgba(201,168,76,0.14),transparent_58%)]"
          aria-hidden
        />
        {/* Reforço só na base da foto — onde o card encosta */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-black/80 via-black/35 to-transparent"
          aria-hidden
        />
      </div>

      {/* Captura ligéiramente entre o fim da imagem e a área escura abaixo */}
      <div className="relative z-[2] -mt-11 flex flex-1 flex-col px-4 sm:-mt-12 sm:px-5 md:-mt-14">
        <motion.div
          id="captura"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[min(100%,19.5rem)] rounded-xl border border-gold/50 bg-[#121212]/96 p-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.82)] backdrop-blur-md sm:max-w-[21rem] sm:p-4 md:max-w-[23rem]"
        >
          <CapturaForm onSubmitLead={onSubmitLead} embedded />
        </motion.div>

        <div className="min-h-4 flex-1" aria-hidden />

        <p className="mx-auto max-w-[18rem] pb-[max(4.75rem,env(safe-area-inset-bottom))] text-center font-body text-[0.62rem] uppercase leading-relaxed tracking-wider text-gold/85 sm:max-w-none sm:text-xs md:pb-10">
          +100 mil pessoas impactadas · +1.000 empresas · 18 anos
        </p>
      </div>
    </section>
  )
}
