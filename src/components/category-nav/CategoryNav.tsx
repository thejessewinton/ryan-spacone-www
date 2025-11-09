import { HoverLine } from 'components/hover-line/HoverLine'
import { ScrollObserver } from 'components/scroll-observer/ScrollObserver'
import Link from 'next/link'

export const CategoryNav = () => {
  return (
    <ScrollObserver>
      <div className="container mx-auto p-20">
        <nav className="flex justify-between">
          <Link
            href="/category/commercial"
            className="group relative flex items-center justify-center text-center font-normal font-serif text-neutral-600 text-sm uppercase tracking-loose md:text-base"
          >
            Commercial
            <HoverLine />
          </Link>
          <Link
            href="/category/narrative"
            className="group relative flex items-center justify-center text-center font-normal font-serif text-neutral-600 text-sm uppercase tracking-loose md:text-base"
          >
            Narrative
            <HoverLine />
          </Link>
        </nav>
      </div>
    </ScrollObserver>
  )
}
