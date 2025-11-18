import { asText } from '@prismicio/helpers'
import { MasonryGallery } from 'components/masonry-gallery/MasonryGallery'
import { ProjectNav } from 'components/project-nav/ProjectNav'
import { ScrollObserver } from 'components/scroll-observer/ScrollObserver'
import type { Metadata } from 'next'
import type { StillsSetProps } from 'types/prismic'
import { getStillsSet } from 'utils/prismic'

export const revalidate = 60

export const generateMetadata = async ({
  params,
}: PageProps<'/stills/[uid]'>): Promise<Metadata> => {
  const uid = (await params).uid
  const { stillsSet } = await getStillsSet(uid)

  return {
    title: stillsSet.data.meta_title,
    description: stillsSet.data.meta_description,
  }
}

const TitleSection = ({ stillsSet }: { stillsSet: StillsSetProps }) => {
  const titleText = asText(stillsSet.title)
  const hasTitle = Boolean(titleText)

  if (!hasTitle) return null

  return (
    <ScrollObserver>
      <section className="grid w-full gap-4 px-3 py-8 md:grid-cols-2 md:items-center md:px-0 lg:py-24">
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-md uppercase tracking-[0.2em] md:text-center md:text-2xl">
            <span className="block text-[0.6rem] md:text-base">
              {titleText}
            </span>
          </h2>
        </div>
      </section>
    </ScrollObserver>
  )
}

const Stills = async ({ params }: PageProps<'/stills/[uid]'>) => {
  const uid = (await params).uid
  const { stillsSet, firstSet, nextSet, previousSet } = await getStillsSet(uid)

  return (
    <>
      <TitleSection stillsSet={stillsSet.data} />
      <div className="columns-1 gap-x-2 sm:columns-2 lg:columns-3">
        <MasonryGallery stills={stillsSet.data.stills} />
      </div>
      <ProjectNav first={firstSet} previous={previousSet} next={nextSet} />
    </>
  )
}

export default Stills
