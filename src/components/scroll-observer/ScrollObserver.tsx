'use client'

import clsx from 'clsx'
import { useInView } from 'framer-motion'
import type { ComponentPropsWithRef, ElementRef } from 'react'
import { useRef } from 'react'

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
  const ref = useRef<ElementRef<'div'>>(null)

  const isInView = useInView(ref, {
    once: true,
  })

  return (
    <div
      ref={ref}
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
