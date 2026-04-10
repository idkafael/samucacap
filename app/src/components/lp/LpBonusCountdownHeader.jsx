import { useEffect, useState } from 'react'
import { LP_BONUS_END_ISO } from './lpBonusEnd'

function pad2(n) {
  return String(Math.max(0, n)).padStart(2, '0')
}

function useCountdown(targetMs) {
  const [now, setNow] = useState(() => Date.now())
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])
  const diff = Math.max(0, targetMs - now)
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function TimeSeparator() {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 pb-4 sm:pb-4.5" aria-hidden>
      <span className="size-0.5 rounded-full bg-gold sm:size-1" />
      <span className="size-0.5 rounded-full bg-gold sm:size-1" />
    </div>
  )
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-0.5 sm:gap-1">
      <div className="flex min-w-[2.25rem] items-center justify-center rounded border border-gold/50 bg-black px-1 py-1 sm:min-w-[2.65rem] sm:px-1.5 sm:py-1.5">
        <span className="font-body text-base font-bold tabular-nums leading-none text-gold sm:text-lg">
          {pad2(value)}
        </span>
      </div>
      <span className="font-body text-[0.5rem] font-bold uppercase tracking-[0.1em] text-gold sm:text-[0.55rem] sm:tracking-[0.12em]">
        {label}
      </span>
    </div>
  )
}

/** Barra de countdown fixa no topo — versão compacta. */
export function LpBonusCountdownHeader() {
  const targetMs = new Date(LP_BONUS_END_ISO).getTime()
  const { days, hours, minutes, seconds } = useCountdown(targetMs)

  return (
    <header className="fixed inset-x-0 top-0 z-[50] border-b border-gold/15 bg-[#111111]/98 px-2.5 pb-1.5 pt-[max(0.375rem,env(safe-area-inset-top))] backdrop-blur-sm sm:px-4 sm:pb-2">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1.5 sm:flex-row sm:justify-center sm:gap-x-3 md:gap-x-4">
        <p className="text-center font-body text-[0.58rem] font-bold uppercase leading-none tracking-[0.12em] text-white-cream/92 sm:mr-3 sm:text-left sm:text-[0.65rem] sm:tracking-[0.14em] md:mr-4">
          OS BÔNUS ENCERRAM EM:
        </p>

        <span className="hidden h-7 w-px shrink-0 bg-gold/50 sm:block md:h-7" aria-hidden />

        <div className="flex flex-wrap items-end justify-center gap-x-px gap-y-0.5 sm:ml-3 sm:gap-x-0.5 md:ml-4">
          <TimeUnit value={days} label="Dias" />
          <TimeSeparator />
          <TimeUnit value={hours} label="Horas" />
          <TimeSeparator />
          <TimeUnit value={minutes} label="Min" />
          <TimeSeparator />
          <TimeUnit value={seconds} label="Seg" />
        </div>
      </div>
    </header>
  )
}
