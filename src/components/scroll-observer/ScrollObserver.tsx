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
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = elementRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
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
      className={clsx('transition-all duration-500', className, {
        [initial]: !isInView,
        [whileInView]: isInView,
      })}
      {...props}
    >
      {children}
    </div>
  )
}
