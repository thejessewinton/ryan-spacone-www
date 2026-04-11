import { useEffect, useState } from 'react'

export const useScroll = (offset = 0) => {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > offset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return scrolling
}
