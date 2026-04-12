import { CafeIcon } from './CafeIcon'

export function HmCloneFooter() {
  return (
    <footer className="relative bg-[#020202] px-4 pb-10 pt-4 sm:px-6 sm:pb-12 overflow-hidden">
      <CafeIcon className="hm-wm hm-wm--center" />
      <div className="mx-auto max-w-4xl relative z-10">
        <div className="hm-footer-divider" aria-hidden="true" />
        <p className="hm-footer-copy">
          Copyright © Grupo Alta Frequência 2026
        </p>
      </div>
    </footer>
  )
}
