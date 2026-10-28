import { useEffect } from 'react'
export default function useDismiss(ref, active, onDismiss) {
  useEffect(() => {
    if (!active) return

    const handlePointerDown = (event) => {
      if (!ref.current?.contains(event.target)) onDismiss()
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onDismiss()
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref, active, onDismiss])
}
