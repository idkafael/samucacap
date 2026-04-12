import { useId } from 'react'

const LABELS = [
  'ESTRATÉGIA',
  'EFICIÊNCIA',
  'RECEITA',
  'ALIANÇA',
  'PATRIMÔNIO',
  'LEGADO',
  'PROPÓSITO',
  'SABEDORIA',
  'MULTIPLICAÇÃO',
]

/** Raios normalizados (0–1) por eixo — formato orgânico próximo ao print. */
const DATA = [0.88, 0.72, 0.94, 0.68, 0.84, 0.76, 0.9, 0.71, 0.86]

const CX = 150
const CY = 150
const R_GRID = 88
const R_LABEL = 128

function point(angleDeg, r) {
  const rad = (angleDeg * Math.PI) / 180
  return [CX + r * Math.cos(rad), CY + r * Math.sin(rad)]
}

function axisAngle(i) {
  return -90 + (i * 360) / 9
}

export function HmClonePhasesRadarChart() {
  const gradId = `hm-phases-radar-fill-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`

  const axes = LABELS.map((_, i) => {
    const a = axisAngle(i)
    const [x2, y2] = point(a, R_GRID)
    return { key: LABELS[i], x2, y2, a }
  })

  const dataPoints = DATA.map((v, i) => {
    const a = axisAngle(i)
    return point(a, R_GRID * v)
  })

  const pathD =
    dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`).join(' ') + ' Z'

  const rings = [0.33, 0.66, 1]

  return (
    <div className="hm-clone-phases-radar mx-auto w-full max-w-[min(100%,320px)]">
      <svg viewBox="0 0 300 300" className="h-auto w-full" aria-hidden>
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--hm-phases-gold)" stopOpacity="0.42" />
            <stop offset="100%" stopColor="var(--hm-phases-gold-soft)" stopOpacity="0.28" />
          </linearGradient>
        </defs>

        {rings.map((k) => (
          <polygon
            key={k}
            fill="none"
            stroke="var(--hm-phases-radar-ring)"
            strokeWidth={0.75}
            points={LABELS.map((_, i) => {
              const p = point(axisAngle(i), R_GRID * k)
              return `${p[0]},${p[1]}`
            }).join(' ')}
          />
        ))}

        {axes.map(({ key, x2, y2 }) => (
          <line
            key={key}
            x1={CX}
            y1={CY}
            x2={x2}
            y2={y2}
            stroke="var(--hm-phases-radar-axis)"
            strokeWidth={0.75}
          />
        ))}

        <path
          d={pathD}
          fill={`url(#${gradId})`}
          stroke="var(--hm-phases-gold)"
          strokeWidth={1.25}
          strokeOpacity={0.95}
        />

        {dataPoints.map((p, i) => (
          <circle
            key={LABELS[i]}
            cx={p[0]}
            cy={p[1]}
            r={3.2}
            fill="var(--hm-phases-gold)"
            stroke="var(--hm-phases-radar-dot-ring)"
            strokeWidth={0.5}
          />
        ))}

        {LABELS.map((label, i) => {
          const a = axisAngle(i)
          const [lx, ly] = point(a, R_LABEL)
          const anchor =
            Math.abs(lx - CX) < 8 ? 'middle' : lx < CX - 4 ? 'end' : lx > CX + 4 ? 'start' : 'middle'
          const dy = ly < CY - 20 ? -2 : ly > CY + 20 ? 14 : 6
          return (
            <text
              key={label}
              x={lx}
              y={ly + dy}
              textAnchor={anchor}
              fill="var(--hm-phases-text)"
              fontSize="7.5"
              fontWeight="700"
              letterSpacing="0.06em"
              style={{ fontFamily: '"Encode Sans Semi Expanded", system-ui, sans-serif' }}
            >
              {label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
