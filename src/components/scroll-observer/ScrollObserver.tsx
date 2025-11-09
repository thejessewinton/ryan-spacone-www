'use client'

import clsx from 'clsx'
import { useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
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
  const [hasEnteredView, setHasEnteredView] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(elementRef, {
    once: true,
    margin: '-10% 0px',
  })

  useEffect(() => {
    if (isInView) {
      setHasEnteredView(true)
    }
  }, [isInView])

  const shouldShow = hasEnteredView || isInView

  return (
    <div
      ref={elementRef}
      className={clsx('transition-all duration-500', className, {
        [initial]: !shouldShow,
        [whileInView]: shouldShow,
      })}
      {...props}
    >
      {children}
    </div>
  )
}
