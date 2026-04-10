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
    <div
      className="flex flex-col items-center justify-center gap-1 pb-5 sm:pb-6"
      aria-hidden
    >
      <span className="size-1 rounded-full bg-gold sm:size-1.5" />
      <span className="size-1 rounded-full bg-gold sm:size-1.5" />
    </div>
  )
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2">
      <div className="flex min-w-[2.65rem] items-center justify-center rounded-md border border-gold/55 bg-black px-1.5 py-2 sm:min-w-[3.1rem] sm:px-2 sm:py-2.5">
        <span className="font-body text-[1.125rem] font-bold tabular-nums leading-none text-gold sm:text-2xl">
          {pad2(value)}
        </span>
      </div>
      <span className="font-body text-[0.58rem] font-bold uppercase tracking-[0.12em] text-gold sm:text-[0.65rem]">
        {label}
      </span>
    </div>
  )
}

/** Barra de countdown fixa no topo (estilo header), como no print. */
export function LpBonusCountdownHeader() {
  const targetMs = new Date(LP_BONUS_END_ISO).getTime()
  const { days, hours, minutes, seconds } = useCountdown(targetMs)

  return (
    <header className="fixed inset-x-0 top-0 z-[50] border-b border-gold/15 bg-[#111111]/98 px-3 pb-2.5 pt-[max(0.625rem,env(safe-area-inset-top))] backdrop-blur-sm sm:px-5 sm:pb-3">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-0">
        <p className="text-center font-body text-[0.65rem] font-bold uppercase leading-tight tracking-[0.14em] text-white-cream/95 sm:mr-4 sm:text-left sm:text-xs sm:tracking-[0.18em] md:mr-5">
          OS BÔNUS ENCERRAM EM:
        </p>

        <span
          className="hidden h-9 w-px shrink-0 bg-gold/55 sm:block md:h-10"
          aria-hidden
        />

        <div className="flex flex-wrap items-end justify-center gap-x-0.5 gap-y-1 sm:ml-4 sm:gap-x-1 md:ml-5">
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
