'use client'

import { asLink } from '@prismicio/helpers'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { useMobileNav } from 'hooks/use-mobile-nav'
import Link from 'next/link'
import type { NavigationProps } from 'types/prismic'

const Hamburger = () => {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav()
  const className =
    'mr-0 ml-auto block h-[2px] bg-neutral-900 transition-transform'
  return (
    <button
      onClick={() => toggleMobileNav()}
      className="relative md:hidden"
      aria-label="Open Mobile Nav"
    >
      <span className="sr-only">Open Mobile Nav</span>
      <span
        className={clsx(className, 'w-8', {
          'rotate-45': isMobileNavOpen,
        })}
      />
      <span
        className={clsx(
          'ml-auto mr-0 block h-[2px] bg-neutral-900 transition-transform',
          isMobileNavOpen ? '-mt-[2px] w-8 -rotate-45' : 'mt-1 w-6',
        )}
      />
    </button>
  )
}

export const MobileNavigation = ({
  navigation,
}: {
  navigation: NavigationProps
}) => {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav()

  return (
    <div className="flex items-center gap-2">
      <Hamburger />
      {isMobileNavOpen ? (
        <motion.nav
          className={clsx(
            'inset-0 top-24! z-10000 flex-col gap-4 bg-white px-9 pt-12 md:hidden',
            isMobileNavOpen ? 'fixed flex' : '',
          )}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { bounce: false } }}
          exit={{ opacity: 0, y: 50 }}
        >
          {navigation.map((item) => {
            return (
              <div className="group relative text-right" key={item.id}>
                <Link
                  href={asLink(item.primary.link) as string}
                  key={item.primary.label}
                  className="relative text-sm uppercase"
                  onClick={() => toggleMobileNav()}
                >
                  {item.primary.label}
                </Link>
              </div>
            )
          })}
        </motion.nav>
      ) : null}
    </div>
  )
}
