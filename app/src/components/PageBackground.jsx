/** Fundo global: grid dourado + radial (igual ao hero), visível em toda a página. */
export function PageBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 min-h-full bg-black"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(201, 168, 76, 0.05) 1px, transparent 1px),
          linear-gradient(rgba(201, 168, 76, 0.05) 1px, transparent 1px),
          radial-gradient(ellipse 90% 70% at 50% -10%, rgba(201, 168, 76, 0.16) 0%, transparent 52%),
          radial-gradient(ellipse 70% 50% at 100% 0%, rgba(201, 168, 76, 0.12) 0%, transparent 50%)
        `,
        backgroundSize: '48px 48px, 48px 48px, auto, auto',
        backgroundAttachment: 'fixed, fixed, fixed, fixed',
      }}
    />
  )
}
