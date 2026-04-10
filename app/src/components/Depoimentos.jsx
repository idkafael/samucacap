import { useEffect, useRef, useState, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion, useInView } from 'framer-motion'
import { SectionDivider } from './SectionDivider'

/** Troque `src` pelo caminho em /public (ex: /videos/depo-1.mp4). Deixe vazio para placeholder. */
const depoimentosVideo = [
  {
    src: '',
    name: '[Nome do empresário]',
    company: '[Nome da empresa]',
    result: '[Ex.: resultado em 6 meses]',
  },
  {
    src: '',
    name: '[Nome do empresário]',
    company: '[Nome da empresa]',
    result: '[Resultado]',
  },
  {
    src: '',
    name: '[Nome do empresário]',
    company: '[Nome da empresa]',
    result: '[Resultado]',
  },
  {
    src: '',
    name: '[Nome do empresário]',
    company: '[Nome da empresa]',
    result: '[Resultado]',
  },
  {
    src: '',
    name: '[Nome do empresário]',
    company: '[Nome da empresa]',
    result: '[Resultado]',
  },
]

function PlayGlyph({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.5" className="text-gold/50" />
      <path
        d="M26 20 L46 32 L26 44 Z"
        fill="currentColor"
        className="text-gold/90"
      />
    </svg>
  )
}

function VideoDepoimentoCard({ item, isActive }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el || !item.src) return
    if (isActive) {
      el.play().catch(() => {})
    } else {
      el.pause()
    }
  }, [isActive, item.src])

  return (
    <article className="flex w-full flex-col items-stretch">
      <div
        className={`relative mx-auto aspect-[9/16] w-[min(300px,82vw)] max-h-[min(68vh,560px)] overflow-hidden rounded-md border bg-dark2 shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow] duration-300 ${
          isActive ? 'border-gold/55 shadow-[0_0_0_1px_rgba(201,168,76,0.25)]' : 'border-gold/20'
        }`}
      >
        {item.src ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover object-center"
            src={item.src}
            controls
            playsInline
            preload="metadata"
            muted
            aria-label={`Depoimento em vídeo, ${item.name}`}
          />
        ) : (
          <div className="flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-dark to-black px-4 text-center">
            <PlayGlyph className="h-16 w-16 opacity-90" />
            <span className="font-body text-xs font-medium uppercase tracking-wide text-gold/75">
              [ Vídeo ]
            </span>
            <span className="max-w-[200px] font-body text-[0.7rem] leading-snug text-white2/60">
              Coloque o .mp4 em public/videos e preencha o campo src.
            </span>
          </div>
        )}
      </div>

      <div className="mt-4 px-1 text-center">
        <p className="font-body text-sm font-semibold text-white-cream">{item.name}</p>
        <p className="mt-0.5 font-body text-xs text-white2">{item.company}</p>
        <span className="mt-2 inline-block max-w-full rounded-sm border border-gold/45 bg-gold/10 px-2.5 py-1 font-body text-xs leading-snug text-gold">
          {item.result}
        </span>
      </div>
    </article>
  )
}

export function Depoimentos() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.12 })

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: false,
    skipSnaps: false,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    queueMicrotask(onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi || paused) return
    const id = window.setInterval(() => emblaApi.scrollNext(), 5000)
    return () => window.clearInterval(id)
  }, [emblaApi, paused])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi])

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="relative z-[1] px-5 py-10 md:px-6 md:py-14"
    >
      <SectionDivider />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-light text-white-cream">
            Quem já participou sabe
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative mt-10 md:mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden py-2" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {depoimentosVideo.map((item, i) => (
                <div
                  key={i}
                  className="min-w-0 shrink-0 grow-0 basis-full"
                >
                  <VideoDepoimentoCard item={item} isActive={i === selectedIndex} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 hidden justify-center gap-3 md:flex">
            <button
              type="button"
              onClick={scrollPrev}
              className="rounded-sm border border-gold/40 px-4 py-2 font-body text-sm font-medium text-gold transition-colors hover:bg-gold/10"
              aria-label="Vídeo anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="rounded-sm border border-gold/40 px-4 py-2 font-body text-sm font-medium text-gold transition-colors hover:bg-gold/10"
              aria-label="Próximo vídeo"
            >
              →
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2 md:hidden" role="tablist" aria-label="Vídeos">
            {depoimentosVideo.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === selectedIndex}
                className={`h-2 rounded-full transition-all ${
                  i === selectedIndex ? 'w-8 bg-gold' : 'w-2 bg-gold/30'
                }`}
                onClick={() => scrollTo(i)}
                aria-label={`Ir para o vídeo ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
