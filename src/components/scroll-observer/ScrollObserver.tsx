'use client'

import clsx from 'clsx'
import { useRef, useState, useEffect } from 'react'
import type { ComponentPropsWithRef } from 'react'

type ScrollObserverProps = ComponentPropsWithRef<'div'> & {
  initial?: string
  whileInView?: string
}

export const ScrollObserver = ({
  children,
  initial = 'translate-y-[50px] opacity-0',
  whileInView = 'translate-y-0 opacity-100',
  className,
  ...props
}: ScrollObserverProps) => {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [state, setState] = useState<'ssr' | 'hidden' | 'visible'>('ssr')

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setState('visible')
          observer.disconnect()
        } else {
          setState('hidden')
        }
      },
      { rootMargin: '-10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elementRef}
      className={clsx(
        className,
        state !== 'ssr' && 'transition-all duration-500',
        state === 'hidden' && initial,
        state === 'visible' && whileInView,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
