/**
 * Wrapper comum das dobras do /lp ("O Fim do Realizador Frustrado").
 *
 * @param {{
 *  title: string,
 *  kicker?: string,
 *  children: import('react').ReactNode,
 *  tone?: 'default' | 'warm',
 * }} props
 */
export function LpFimSectionShell({ title, kicker, children, tone = 'default' }) {
  const bg =
    tone === 'warm'
      ? 'bg-[radial-gradient(1200px_520px_at_15%_0%,rgba(250,62,0,0.12),transparent_58%),radial-gradient(900px_420px_at_90%_35%,rgba(255,162,74,0.10),transparent_52%),linear-gradient(180deg,#020202_0%,#020202_100%)]'
      : 'bg-[#020202]'

  return (
    <section className={`${bg} px-5 pb-18 pt-12 sm:px-6 sm:pb-22 sm:pt-16 md:pb-26`}>
      <div className="mx-auto max-w-xl sm:max-w-2xl">
        <h2 className="mt-3 text-center text-[1.55rem] font-bold leading-snug tracking-[-0.04em] text-white sm:mt-4 sm:text-4xl lg:text-[36px]">
          {title}
        </h2>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  )
}

