import { HmClonePhasesRadarChart } from './HmClonePhasesRadarChart'

/** Imagens das fases 2 e 3 — troque por assets finais quando tiver. */
const IMG_FASE_TRILHA = '/images/samuca.jpg'
const IMG_FASE_PRESENCIAL = '/images/place%20(3).webp'

function TimelineNode() {
  return (
    <span
      className="hm-clone-phases-timeline-node absolute left-[6px] top-[0.35rem] z-[1] h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2"
      aria-hidden
    />
  )
}

/** @param {{ children: import('react').ReactNode; className?: string }} props */
function PhaseBlock({ children, className = '' }) {
  return <div className={`relative pb-14 pl-9 sm:pb-20 sm:pl-11 ${className}`}>{children}</div>
}

export function HmClonePhases() {
  return (
    <section
      id="lp-fases"
      className="hm-clone-phases py-14 sm:py-20"
      aria-labelledby="hm-phases-heading"
    >
      <div className="mx-auto max-w-xl px-4 sm:max-w-2xl sm:px-6">
        <div className="relative">
          <div className="hm-clone-phases-timeline-line absolute bottom-0 left-[6px] top-0 z-0 w-px" aria-hidden />

          <PhaseBlock>
            <TimelineNode />
            <p className="hm-clone-phases-kicker m-0 text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs">
              FASE 1
            </p>
            <div className="mt-6">
              <HmClonePhasesRadarChart />
            </div>
            <h2
              id="hm-phases-heading"
              className="hm-clone-phases-title mt-8 text-2xl font-semibold uppercase leading-[1.15] tracking-[0.02em] sm:mt-10 sm:text-3xl md:text-[2rem]"
            >
              Diagnóstico
              <br />
              personalizado
            </h2>
            <p className="hm-clone-phases-copy mt-5 text-[0.95rem] leading-relaxed sm:mt-6 sm:text-[1.05rem]">
              Antes do programa, você passa por uma entrevista de aplicação e geramos o seu Radar de 9 Pontos. Uma análise
              visual do seu momento atual nas três dimensões da tríade. É o mapa que define sua jornada de edificação.
            </p>
          </PhaseBlock>

          <PhaseBlock>
            <TimelineNode />
            <p className="hm-clone-phases-kicker m-0 text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs">
              FASE 2
            </p>
            <div className="hm-clone-phases-media-frame mt-6 overflow-hidden rounded-2xl border shadow-[0_20px_56px_rgba(0,0,0,0.55),0_4px_16px_rgba(197,160,89,0.07)] sm:rounded-[1.25rem]">
              <img
                src={IMG_FASE_TRILHA}
                alt="Trilha online (aulas preparatórias)"
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover"
              />
            </div>
            <h3 className="hm-clone-phases-title mt-8 text-2xl font-semibold uppercase leading-[1.15] tracking-[0.02em] sm:mt-10 sm:text-3xl md:text-[2rem]">
              Trilha online
            </h3>
            <p className="hm-clone-phases-copy mt-5 text-[0.95rem] leading-relaxed sm:mt-6 sm:text-[1.05rem]">
              Antes do presencial, você acessa aulas exclusivas com Samuel Souza para ativar seu diagnóstico e chegar
              pronto para os 3 dias. Curtas, objetivas e feitas para quem não tem tempo a perder.
            </p>
          </PhaseBlock>

          <PhaseBlock className="pb-6 sm:pb-8">
            <TimelineNode />
            <p className="hm-clone-phases-kicker m-0 text-[11px] font-bold uppercase tracking-[0.28em] sm:text-xs">
              FASE 3
            </p>
            <div className="hm-clone-phases-media-frame mt-6 overflow-hidden rounded-2xl border shadow-[0_20px_56px_rgba(0,0,0,0.55),0_4px_16px_rgba(197,160,89,0.07)] sm:rounded-[1.25rem]">
              <img
                src={IMG_FASE_PRESENCIAL}
                alt="Encontro presencial"
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover"
              />
            </div>
            <h3 className="hm-clone-phases-title mt-8 text-2xl font-semibold uppercase leading-[1.15] tracking-[0.02em] sm:mt-10 sm:text-3xl md:text-[2rem]">
              Encontro presencial
            </h3>
            <p className="hm-clone-phases-copy mt-5 text-[0.95rem] leading-relaxed sm:mt-6 sm:text-[1.05rem]">
              Três dias em Alphaville com um grupo seleto de pares e mentores que já navegaram os mesmos desafios. Não é
              palestra. É onde decisões reais são tomadas e direções de vida são edificadas.
            </p>
            <p className="hm-clone-phases-meta mt-8 text-[11px] font-bold uppercase tracking-[0.22em] sm:mt-10 sm:text-xs">
              21, 22 E 23 · MAIO 2026 · ALPHAVILLE, SP
            </p>
          </PhaseBlock>
        </div>
      </div>
    </section>
  )
}
