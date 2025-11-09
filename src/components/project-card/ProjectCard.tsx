import { asText } from '@prismicio/helpers'
import { ProjectPreview } from 'components/project-preview/ProjectPreview'
import { ScrollObserver } from 'components/scroll-observer/ScrollObserver'
import Image from 'next/image'
import Link from 'next/link'
import { getBlurUrl, getImageUrl } from 'utils/get-url'
import type { ProjectDocumentData } from '../../../prismicio-types'

export const ProjectCard = ({
  href,
  project,
  preview,
  previewOnHover = false,
}: {
  href: string
  project: ProjectDocumentData
  preview?: ProjectDocumentData['preview']
  previewOnHover?: boolean
}) => {
  if (!project.cover.widescreen.url) return null

  const clientText = asText(project.client)
  const titleText = asText(project.title)
  const hasClient = Boolean(clientText)
  const hasTitle = Boolean(titleText)

  const TitleContent = () => {
    return (
      <h2 className="absolute z-10 flex flex-col items-center text-center font-serif text-white uppercase opacity-100 transition-opacity duration-700 after:absolute after:right-8 after:left-0 after:block after:content-[''] lg:opacity-0 lg:group-hover:opacity-100">
        {hasClient ? (
          <span className="text-sm tracking-[0.75rem] md:text-3xl md:tracking-[1.725rem]">
            {clientText}
          </span>
        ) : null}
        {hasClient ? (
          <span className="mt-2 text-[0.55rem] tracking-[0.45rem] md:text-xl md:tracking-[1.05rem]">
            {titleText}
          </span>
        ) : hasTitle ? (
          <span className="text-sm tracking-[0.75rem] md:text-3xl md:tracking-[1.725rem]">
            {titleText}
          </span>
        ) : null}
      </h2>
    )
  }

  return (
    <ScrollObserver>
      <Link href={href} aria-label={titleText}>
        <div className="group relative flex aspect-widescreen items-center justify-center overflow-hidden">
          <Image
            src={getImageUrl(project.cover.widescreen.url)}
            width={project.cover.widescreen.dimensions?.width}
            height={project.cover.widescreen.dimensions?.height}
            alt={asText(project.title) ?? ''}
            className="z-50 w-full"
            placeholder="blur"
            blurDataURL={getBlurUrl(project.cover.widescreen.url)}
            quality={90}
          />
          {preview ? (
            <ProjectPreview
              showOnHover={previewOnHover}
              preview={project.preview}
              eager={true}
            >
              <TitleContent />
            </ProjectPreview>
          ) : (
            <TitleContent />
          )}
        </div>
      </Link>
    </ScrollObserver>
  )
}
