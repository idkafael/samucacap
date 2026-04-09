import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#dores', label: 'Dores' },
  { href: '#produto', label: 'Produto' },
  { href: '#autoridade', label: 'Mentor' },
  { href: '#depoimentos', label: 'Cases' },
  { href: '#logos', label: 'Clientes' },
  { href: '#captura', label: 'Contato' },
]

function scrollToCaptura(e) {
  e.preventDefault()
  document.getElementById('captura')?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/20 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
        <a
          href="#inicio"
          className="group flex shrink-0 items-baseline gap-1.5 text-white-cream"
          onClick={() => setOpen(false)}
        >
          <span className="font-body text-sm font-semibold tracking-wide text-white-cream sm:text-base">
            GRUPO ALTA FREQUÊNCIA
          </span>
          <span className="font-body text-base leading-none text-gold sm:text-lg">⚡</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-body text-sm font-medium uppercase tracking-wide text-white2 transition-colors hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#captura"
            onClick={scrollToCaptura}
            className="hidden rounded-sm bg-gold px-4 py-2 font-body text-sm font-semibold uppercase tracking-wide text-black shadow-[0_0_0_1px_rgba(201,168,76,0.4)] sm:inline-block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            Falar com consultor
          </motion.a>

          <button
            type="button"
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              className="h-0.5 w-6 rounded-full bg-gold"
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="h-0.5 w-6 rounded-full bg-gold"
              animate={open ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="h-0.5 w-6 rounded-full bg-gold"
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="border-t border-gold/15 bg-black/95 lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.nav
              className="flex flex-col gap-1 px-5 py-4"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                closed: {},
              }}
              aria-label="Mobile"
            >
              {navLinks.map(({ href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  className="border-b border-white/5 py-3 font-body text-base font-medium uppercase tracking-wide text-white-cream"
                  variants={{
                    closed: { opacity: 0, x: -12 },
                    open: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#captura"
                className="mt-3 rounded-sm bg-gold py-3 text-center font-body text-sm font-semibold uppercase tracking-wide text-black"
                variants={{
                  closed: { opacity: 0, y: 8 },
                  open: { opacity: 1, y: 0 },
                }}
                onClick={(e) => {
                  scrollToCaptura(e)
                  setOpen(false)
                }}
              >
                Falar com consultor
              </motion.a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
