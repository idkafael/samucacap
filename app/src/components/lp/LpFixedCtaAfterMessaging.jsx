import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SECTION_ID = 'lp-messaging'

function scrollToHash(e, hash) {
  e.preventDefault()
  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
}

/** Botão fixo tipo pílula — só aparece após rolar além de #lp-messaging. */
export function LpFixedCtaAfterMessaging({
  href = '#bonus-proposito',
  label = 'Quero construir riqueza',
}) {
  const [show, setShow] = useState(false)

  const update = useCallback(() => {
    const el = document.getElementById(SECTION_ID)
    if (!el) {
      setShow(false)
      return
    }
    const rect = el.getBoundingClientRect()
    setShow(rect.bottom < 0)
  }, [])

  useEffect(() => {
    const t = window.setTimeout(update, 0)
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.clearTimeout(t)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="lp-fixed-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[42] flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3"
        >
          <a
            href={href}
            onClick={(e) => scrollToHash(e, href)}
            className="pointer-events-auto flex w-full max-w-lg items-center justify-center rounded-full bg-gold py-4 px-6 font-body text-[1.0625rem] font-semibold uppercase leading-none tracking-[0.035em] text-black antialiased sm:py-[1.15rem] sm:px-10 sm:text-lg md:text-[1.125rem]"
          >
            {label}
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
