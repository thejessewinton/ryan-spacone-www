import { useLayoutEffect } from 'react'

export const useLockBodyScroll = (isLocked: boolean) => {
  useLayoutEffect((): (() => void) => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    if (isLocked) {
      document.body.style.overflow = 'hidden'
    }
    return () => (document.body.style.overflow = originalStyle)
  }, [isLocked])
}
