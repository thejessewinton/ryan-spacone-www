import { useState } from 'react'

export const useHovered = () => {
  const [hovered, setHovered] = useState(false)

  const bind = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  }

  return { hovered, bind }
}
