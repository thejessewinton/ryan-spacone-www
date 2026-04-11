import { asHTML, asLink } from '@prismicio/helpers'
import { getAboutPage } from 'utils/prismic'
import Image from 'next/image'
import type { AboutDocumentData } from '../../../prismicio-types'
import Link from 'next/link'
import type { Metadata } from 'next'
import { BioSlider } from 'components/bio-slider/BioSlider'
import { ScrollObserver } from 'components/scroll-observer/ScrollObserver'

export const revalidate = 60

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await getAboutPage()

  return {
    title: data.meta_title,
  }
}

const Links = ({ links }: { links: AboutDocumentData['links'] }) => {
  return (
    <div className="mb-8 mt-16 grid grid-cols-3 gap-3">
      {links.map((item) => { 
        if (!item.link) return null;
        return (
        <div
          key={item.label}
          className="group overflow-hidden border border-neutral-200 px-6 py-4"
        >
          <Link
            href={asLink(item.link) ?? ''}
            className="group relative flex justify-center"
          >
            <Image
              src={item.icon.url as string}
              width={item.icon.dimensions?.width}
              height={item.icon.dimensions?.height}
              alt="Project Image"
              className="mx-auto transition-transform duration-700 group-hover:scale-105"
              quality={100}
            />
            <span className="absolute -bottom-2 mx-auto text-center font-serif text-sm opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:bottom-1 md:block">
              {item.label}
            </span>
          </Link>
        </div>
      )})}
    </div>
  )
}

const Representation = ({
  representation,
}: {
  representation: AboutDocumentData['representation']
}) => {
  return (
    <div className="mb-24 mt-16 block text-center font-light">
      <h2 className="mb-8 font-serif text-2xl">Representation</h2>
      <div className="mb-12 flex flex-col gap-8 md:gap-12">
        {representation.map((rep) => (
          <div key={rep.title}>
            {rep.image?.url && (
              <Image
                src={rep.image.url}
                width={rep.image.dimensions?.width}
                height={rep.image.dimensions?.height}
                alt={rep.title || 'Representation'}
                className="mb-4 mx-auto w-30"
                quality={100}
              />
            )}
            <h3 className="mb-2 font-serif">{rep.title}</h3>
            <div
              className="text-sm leading-loose"
              dangerouslySetInnerHTML={{ __html: asHTML(rep.details) }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const About = async () => {
  const { data } = await getAboutPage()

  return (
    <ScrollObserver>
      <div className="mx-auto max-w-4xl">
        <BioSlider images={data.stills} />
        <div className="px-3">
          <div
            className="mb-8 block text-sm font-light"
            dangerouslySetInnerHTML={{ __html: asHTML(data.bio) }}
          />

          {data.links && data.links.length ? (
            <Links links={data.links} />
          ) : null}

          {data.representation && data.representation.length ? (
            <Representation representation={data.representation} />
          ) : null}
        </div>
      </div>
    </ScrollObserver>
  )
}

export default About
