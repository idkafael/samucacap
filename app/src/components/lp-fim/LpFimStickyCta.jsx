import { useEffect, useState } from 'react'

/**
 * CTA fixo do /lp: aparece após a 1ª seção de conteúdo e rola para #lp-hero-captura.
 *
 * @param {{ onClick: () => void, showAfterId?: string }} props
 */
export function LpFimStickyCta({ onClick, showAfterId = 'lp-fim-identificacao' }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let raf = 0

    const compute = () => {
      const after = document.getElementById(showAfterId)
      const capture = document.getElementById('lp-hero-captura')
      if (!after || !capture) return

      const afterTop = after.getBoundingClientRect().top
      const captureTop = capture.getBoundingClientRect().top

      const shouldShow = afterTop <= 0 && captureTop < -40
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
  }, [showAfterId])

  if (!visible) return null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="pointer-events-auto mx-auto w-full max-w-xl">
        <button
          type="button"
          onClick={onClick}
          className="hm-clone-btn-cta flex w-full min-h-[3.25rem] cursor-pointer items-center justify-center rounded-[999px] px-6 py-3 text-center text-base font-semibold leading-none tracking-tight text-white sm:min-h-[3.5rem] sm:text-lg md:text-[20px]"
        >
          QUERO PARTICIPAR DO EVENTO
        </button>
      </div>
    </div>
  )
}

