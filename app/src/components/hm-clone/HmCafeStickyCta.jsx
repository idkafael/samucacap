import { useEffect, useState } from 'react'

/**
 * CTA fixo: aparece a partir da seção #hm-cafe-about e rola para #lp-hero-captura.
 *
 * @param {{ onClick: () => void }} props
 */
export function HmCafeStickyCta({ onClick }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let raf = 0

    const compute = () => {
      const about = document.getElementById('hm-cafe-about')
      const capture = document.getElementById('lp-hero-captura')
      if (!about || !capture) return

      const aboutTop = about.getBoundingClientRect().top
      const captureTop = capture.getBoundingClientRect().top

      const shouldShow = aboutTop <= 0 && captureTop < -40
      setVisible(shouldShow)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="hm-cafe-sticky-cta pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-5">
      <div className="pointer-events-auto mx-auto w-full max-w-xl">
        <div className="hm-sticky-cta-shell">
          <button
            type="button"
            onClick={onClick}
            className="hm-clone-btn-cta flex w-full min-h-[3.25rem] cursor-pointer items-center justify-center rounded-[999px] px-6 py-3 text-center text-base font-semibold leading-none tracking-tight text-white sm:min-h-[3.5rem] sm:text-lg md:text-[20px]"
          >
            ENTRAR NO GRUPO DO CAFÉ COM FREQUÊNCIA
          </button>
        </div>
      </div>
    </div>
  )
}
