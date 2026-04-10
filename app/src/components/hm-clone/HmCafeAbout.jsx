function IconCup({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.25 8.5h10.5v4.75a5.25 5.25 0 0 1-5.25 5.25h0A5.25 5.25 0 0 1 6.25 13.25V8.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16.75 9.25h1.1a2.15 2.15 0 0 1 0 4.3h-1.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M7 20h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

const ITEMS = [
  'Clareza sobre o que realmente importa',
  'Ajustes práticos de mentalidade e comportamento',
  'Direcionamento para sua vida pessoal e profissional',
  'Explicações simples sobre frequência e consciência',
  'Aplicações reais para sair do ciclo de travamento',
]

export function HmCafeAbout() {
  return (
    <section
      id="hm-cafe-about"
      className="hm-cafe-about bg-[#020202] px-5 pb-20 pt-2 sm:px-6 sm:pb-24 sm:pt-4 md:pb-28"
    >
      <div className="mx-auto max-w-xl sm:max-w-2xl">
        <h2 className="m-0 text-center text-[1.55rem] font-bold leading-snug tracking-[-0.04em] text-white sm:text-4xl lg:text-[36px]">
          O que é o Café com Realização
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[1.02rem] leading-relaxed text-white/85 sm:mt-8 sm:text-[19px]">
          O Café com Realização é um encontro diário, ao vivo, onde você vai começar o seu dia com direção clara.
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[1.02rem] leading-relaxed text-white/85 sm:mt-8 sm:text-[19px]">
          Todos os dias pela manhã, você vai receber:
        </p>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {ITEMS.map((text) => (
            <div key={text} className="hm-cafe-about-item">
              <div className="hm-cafe-about-icon" aria-hidden>
                <IconCup className="h-6 w-6 text-white sm:h-7 sm:w-7" />
              </div>
              <p className="m-0 text-left text-[1.02rem] leading-relaxed text-white/90 sm:text-[19px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

