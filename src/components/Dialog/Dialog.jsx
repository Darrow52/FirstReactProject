import { useEffect, useId, useRef } from 'react'
import './Dialog.css'

export default function Dialog({ open, onClose, title, variant = 'modal', children }) {
  const ref = useRef(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      className={`dialog dialog--${variant}`}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="dialog__panel">
        <div className="dialog__header">
          <h2 className="dialog__title" id={titleId}>
            {title}
          </h2>
          <button className="dialog__close" type="button" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        {children}
      </div>
    </dialog>
  )
}
