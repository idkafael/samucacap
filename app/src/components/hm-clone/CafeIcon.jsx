/**
 * CafeIcon — xícara decorativa
 * Renderiza a imagem da marca; recebe className (hm-wm hm-wm--tr etc.) e style opcionais.
 */
export function CafeIcon({ className, style }) {
  return (
    <img
      src="https://i.imgur.com/Py0YA6M.png"
      alt=""
      aria-hidden="true"
      draggable="false"
      className={className}
      style={style}
    />
  )
}
