import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LpIconCalendar, LpIconClock, LpIconLive } from './LpGoldIcons'

const iconClass = 'h-5 w-5 shrink-0 text-gold sm:h-6 sm:w-6 md:h-7 md:w-7'

/** Detalhes do evento — três blocos lado a lado, grupo centralizado; ícones em dourado. */
export function LpEventComunicacao() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section
      ref={ref}
      id="evento-info"
      className="relative z-[1] px-4 py-5 sm:px-5 md:px-6 md:py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-lg space-y-3 md:max-w-xl"
      >
        <div className="mx-auto grid w-full max-w-md grid-cols-3 justify-items-center gap-x-2 sm:max-w-lg sm:gap-x-4 md:max-w-xl md:gap-x-6">
          <Cell icon={<LpIconCalendar className={iconClass} />}>17 de Abril</Cell>
          <Cell icon={<LpIconClock className={iconClass} />}>das 9h às 18h</Cell>
          <Cell icon={<LpIconLive className={iconClass} />}>
            100% online e ao vivo no Zoom
          </Cell>
        </div>

        <div className="flex w-full justify-center pt-0.5">
          <p className="rounded-full border border-gold px-3 py-1.5 text-center font-condensed text-[0.58rem] font-bold uppercase leading-tight tracking-[0.1em] text-gold sm:px-4 sm:py-2 sm:text-[0.65rem] sm:tracking-[0.12em]">
            Evento ao vivo. Sem replay. Sem gravação
          </p>
        </div>
      </motion.div>
    </section>
  )
}

function Cell({ icon, children }) {
  return (
    <div className="flex min-w-0 w-full flex-col items-center justify-center gap-1.5 text-center sm:gap-2">
      <span className="flex justify-center">{icon}</span>
      <p className="w-full max-w-[7.5rem] font-body text-[0.62rem] font-semibold leading-tight text-gold text-balance sm:max-w-[8.5rem] sm:text-xs md:max-w-[11rem] md:text-sm">
        {children}
      </p>
    </div>
  )
}
