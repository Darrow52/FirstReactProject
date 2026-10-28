import { useCallback, useEffect, useRef, useState } from 'react'
export default function useScrollCarousel() {
  const ref = useRef(null)
  const [state, setState] = useState({ count: 0, active: 0 })

  useEffect(() => {
    const list = ref.current

    const update = () => {
      const maxScroll = list.scrollWidth - list.clientWidth
      const items = [...list.children]
      if (maxScroll <= 1 || items.length === 0) {
        setState({ count: 0, active: 0 })
        return
      }

      const offsets = items.map((item) => item.offsetLeft - items[0].offsetLeft)
      const count = offsets.filter((offset) => offset < maxScroll - 1).length + 1
      const nearest = offsets.reduce(
        (best, offset, index) =>
          Math.abs(offset - list.scrollLeft) < Math.abs(offsets[best] - list.scrollLeft) ? index : best,
        0,
      )
      const active = list.scrollLeft >= maxScroll - 1 ? count - 1 : Math.min(nearest, count - 1)
      setState((current) => (current.count === count && current.active === active ? current : { count, active }))
    }

    // ResizeObserver also fires once right away, which does the initial measurement
    const observer = new ResizeObserver(update)
    observer.observe(list)
    list.addEventListener('scroll', update, { passive: true })
    return () => {
      observer.disconnect()
      list.removeEventListener('scroll', update)
    }
  }, [])

  const goTo = useCallback((index) => {
    const list = ref.current
    const items = [...list.children]
    list.scrollTo({ left: items[index].offsetLeft - items[0].offsetLeft, behavior: 'smooth' })
  }, [])

  return { ref, ...state, goTo }
}
