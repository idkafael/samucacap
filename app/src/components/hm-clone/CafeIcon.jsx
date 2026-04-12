/**
 * CafeIcon — xícara vetorizada com raio e fumaça
 * Usa currentColor → funciona em branco, dourado ou qualquer cor via className/style
 */
export function CafeIcon({ className, style }) {
  return (
    <svg
      viewBox="0 0 100 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* ── Steam wisps ── */}
      {/* esquerda: sobe, curva p/ esq, depois p/ dir */}
      <path
        d="M33 26 C30 20 37 14 34 8 C31 3 35 1 35 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* centro: mais alto, levemente ondulado */}
      <path
        d="M50 24 C47 17 54 11 51 5 C48 0 52 0 52 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* direita: espelho da esquerda */}
      <path
        d="M67 26 C70 20 63 14 66 8 C69 3 65 1 65 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Cup rim (elipse do topo) ── */}
      <ellipse
        cx="50"
        cy="36"
        rx="32"
        ry="7.5"
        stroke="currentColor"
        strokeWidth="2.2"
      />

      {/* ── Cup body ── */}
      <path
        d="M18 36 L27 90 Q50 97 73 90 L82 36"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="none"
      />

      {/* ── Handle ── */}
      <path
        d="M82 48 Q100 48 100 64 Q100 80 82 80"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />

      {/* ── Saucer ── */}
      <ellipse
        cx="50"
        cy="98"
        rx="42"
        ry="9"
        stroke="currentColor"
        strokeWidth="2.2"
      />
      {/* rim interno do pires */}
      <ellipse
        cx="50"
        cy="98"
        rx="28"
        ry="5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.45"
      />

      {/* ── Lightning bolt (latte art) ── */}
      <path
        d="M57 42 L44 62 L53 62 L43 82 L63 56 L53.5 56 L62 42 Z"
        fill="currentColor"
      />
    </svg>
  )
}
