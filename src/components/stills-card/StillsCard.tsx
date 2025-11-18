import { asText } from '@prismicio/helpers'
import { ScrollObserver } from 'components/scroll-observer/ScrollObserver'
import Image from 'next/image'
import Link from 'next/link'
import { getBlurUrl, getImageUrl } from 'utils/get-url'
import type { StillsSetDocumentData } from '../../../prismicio-types'

export const StillsCard = ({
  href,
  set,
}: {
  href: string
  set: StillsSetDocumentData
}) => {
  if (!set.cover.cover.url) return null

  return (
    <ScrollObserver>
      <Link
        href={href}
        aria-label={asText(set.title)}
        className="cursor-pointer"
      >
        <div className="group relative flex items-center justify-center overflow-hidden">
          <h2 className="absolute z-10 text-center font-serif text-sm text-white uppercase tracking-[0.75rem] transition-opacity duration-700 after:absolute after:right-8 after:left-0 after:block after:content-[''] md:text-3xl md:tracking-[1.725rem] lg:opacity-0 lg:group-hover:opacity-100">
            {asText(set.title)}
          </h2>

          <Image
            src={getImageUrl(set.cover.cover.url)}
            width={set.cover.cover.dimensions?.width}
            height={set.cover.cover.dimensions?.height}
            alt={asText(set.title)}
            className="w-full"
            placeholder="blur"
            loading="lazy"
            blurDataURL={getBlurUrl(set.cover.cover.url)}
            quality={90}
          />
        </div>
      </Link>
    </ScrollObserver>
  )
}
