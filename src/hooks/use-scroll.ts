import { useEffect, useState } from 'react'

export const useScroll = (offset = 0) => {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () =>
      setScrolling(window.pageYOffset > offset),
    )
  }, [offset])

  return scrolling
}
