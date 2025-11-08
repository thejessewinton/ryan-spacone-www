'use client'

import { asLink } from '@prismicio/helpers'
import Link from 'next/link'
import type { NavigationProps } from 'types/prismic'
import { HoverLine } from 'components/hover-line/HoverLine'

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
            className="tracking-loose group relative flex items-center justify-center text-sm font-normal uppercase text-neutral-600"
          >
            {item.primary.label}
            <HoverLine />
          </Link>
        )
      })}
    </nav>
  )
}
