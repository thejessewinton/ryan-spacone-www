import { asLink, asText } from '@prismicio/helpers'
import clsx from 'clsx'
import { ImageGallery } from 'components/image-gallery/ImageGallery'
import { ProjectNav } from 'components/project-nav/ProjectNav'
import { ScrollObserver } from 'components/scroll-observer/ScrollObserver'
import { VimeoPlayer } from 'components/vimeo-player/VimeoPlayer'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ProjectProps } from 'types/prismic'
import { getBlurUrl, getImageUrl } from 'utils/get-url'
import { getProject, getProjects } from 'utils/prismic'

export const revalidate = 60

export const generateStaticParams = async () => {
  const { results } = await getProjects()

  return results.map((page) => ({
    params: {
      uid: page.uid,
    },
  }))
}

export const generateMetadata = async ({
  params,
}: PageProps<'/projects/[uid]'>): Promise<Metadata> => {
  const uid = (await params).uid
  const { project } = await getProject(uid)

  return {
    title: project.data.meta_title,
  }
}

const CreditsSection = ({ project }: { project: ProjectProps }) => {
  const clientText = asText(project.client)
  const titleText = asText(project.title)
  const hasClient = Boolean(clientText)
  const hasTitle = Boolean(titleText)
  const titleClasses = clsx('block', {
    'text-[0.6rem] md:text-base': !hasClient,
  })
  const clientClasses = clsx('block text-[0.6rem] md:text-base', {
    'mt-2': hasTitle,
  })

  return (
    <ScrollObserver>
      <section className="grid w-full gap-4 px-3 py-8 md:grid-cols-2 md:items-center md:px-0 lg:py-24">
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-md uppercase tracking-[0.2em] md:text-center md:text-2xl">
            {hasTitle ? (
              <span className={clientClasses}>{titleText}</span>
            ) : null}
            {hasClient ? (
              <span className={titleClasses}>{clientText}</span>
            ) : null}
            {project.coming_soon ? (
              <span className="mr-0 ml-auto block text-[0.6rem] md:text-base">
                Coming Soon...
              </span>
            ) : null}
          </h2>
          {project.starring.length > 0 ? (
            <div className="font-thin text-sm md:text-center">
              <span className="font-normal uppercase">Featuring</span>
              {project.starring.map((item) => (
                <span
                  key={item.name}
                  className="block space-y-2 text-sm md:text-normal"
                >
                  {item.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-4 text-right font-thin md:text-left">
          {project.credits && project.credits.length > 0
            ? project.credits.map((credit, index) => {
                return (
                  <div
                    key={index}
                    className="text-sm md:col-span-1 md:text-normal"
                  >
                    <span className="font-normal uppercase">
                      {credit.label}
                    </span>
                    {asText(credit.details, '\n\n')
                      .split('\n\n')
                      .map((line) => (
                        <span className="block" key={line}>
                          {line}
                        </span>
                      ))}
                  </div>
                )
              })
            : null}
          {project.links && project.links.length > 0
            ? project.links.map((item, index) => {
                if (!item.link.link_type.length) return null
                return (
                  <div
                    key={index}
                    className="text-sm md:col-span-1 md:text-normal"
                  >
                    <span className="font-normal uppercase">{item.label}</span>
                    <Link
                      className="block underline"
                      href={asLink(item.link) ?? ''}
                      target="_blank"
                    >
                      Visit
                    </Link>
                  </div>
                )
              })
            : null}
        </div>
      </section>
    </ScrollObserver>
  )
}

const Project = async ({ params }: PageProps<'/projects/[uid]'>) => {
  const { project, firstProject, nextProject, previousProject } =
    await getProject((await params).uid)

  const renderPrimaryVisual = () => {
    const featuredImage = project.data.featured_image
    if (featuredImage?.url && featuredImage.dimensions) {
      const { width, height } = featuredImage.dimensions
      return (
        <Image
          src={getImageUrl(featuredImage.url)}
          width={width}
          height={height}
          alt="Project Image"
          loading="lazy"
          placeholder="blur"
          blurDataURL={getBlurUrl(featuredImage.url)}
          className="mx-auto block w-full"
          quality={100}
        />
      )
    }

    const coverImage = project.data.cover
    if (coverImage?.url && coverImage.dimensions) {
      const { width, height } = coverImage.dimensions
      return (
        <Image
          src={getImageUrl(coverImage.url)}
          width={width}
          height={height}
          alt="Project Image"
          loading="lazy"
          placeholder="blur"
          blurDataURL={getBlurUrl(coverImage.url)}
          className="mx-auto block w-full"
          quality={100}
        />
      )
    }

    return null
  }

  const additionalVideos = project.data.additional_videos ?? []
  const hasAdditionalVideos = additionalVideos.length > 0
  const isAdditionalVideosEven =
    hasAdditionalVideos && additionalVideos.length % 2 === 0

  return (
    <>
      <div className="flex flex-col gap-2">
        {project.data.video.embed_url ? (
          <VimeoPlayer video={project.data.video} />
        ) : (
          renderPrimaryVisual()
        )}
        <CreditsSection project={project.data} />
        {project.data.secondary_video?.embed_url ? (
          <VimeoPlayer video={project.data.secondary_video} />
        ) : null}
        {hasAdditionalVideos ? (
          <div
            className={clsx('mb-10 grid gap-2', {
              'md:grid-cols-2': isAdditionalVideosEven,
            })}
          >
            {additionalVideos.map((video, i) => {
              if (!video.embed_url.length) return null
              return <VimeoPlayer key={i} video={video.embed_url} />
            })}
          </div>
        ) : null}
        <ImageGallery stills={project.data.stills} />
      </div>
      <ProjectNav
        first={firstProject}
        previous={previousProject}
        next={nextProject}
      />
    </>
  )
}

export default Project
