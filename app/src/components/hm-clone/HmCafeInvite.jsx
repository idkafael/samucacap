function IconArrow({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 12h13.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M13.2 7.8 18 12l-4.8 4.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ITEMS = [
  'Acesso às lives diárias',
  'Avisos e links das transmissões',
  'Conteúdos complementares',
  'Direcionamentos práticos',
]

export function HmCafeInvite() {
  return (
    <section className="hm-cafe-invite bg-[#020202] px-5 pb-20 pt-2 sm:px-6 sm:pb-24 sm:pt-4 md:pb-28">
      <div className="mx-auto max-w-xl sm:max-w-2xl">
        <h2 className="m-0 text-center text-[1.55rem] font-bold leading-snug tracking-[-0.04em] text-white sm:text-4xl lg:text-[36px]">
          Participe do Café com Realização
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-center text-[1.02rem] leading-relaxed text-white/85 sm:mt-8 sm:text-[19px]">
          Entre no grupo exclusivo onde você vai receber:
        </p>

        <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
          {ITEMS.map((text) => (
            <div key={text} className="hm-cafe-invite-item">
              <span className="hm-cafe-invite-icon" aria-hidden>
                <IconArrow className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <p className="m-0 text-left text-[1.02rem] leading-relaxed text-white/90 sm:text-[19px]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

