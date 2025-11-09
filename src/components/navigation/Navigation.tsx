'use client'

import { asLink } from '@prismicio/helpers'
import Link from 'next/link'
import type { NavigationProps } from 'types/prismic'

export const Navigation = ({ navigation }: { navigation: NavigationProps }) => {
  return (
    <nav className="hidden items-center gap-x-8 md:flex">
      {navigation.map((item) => {
        return (
          <Link
            href={
              item.items.length ? '' : (asLink(item.primary.link) as string)
            }
            key={item.primary.label}
            className="group relative flex items-center justify-center font-normal text-neutral-500 text-sm uppercase tracking-loose hover:text-neutral-900"
          >
            {item.primary.label}
          </Link>
        )
      })}
    </nav>
  )
}
