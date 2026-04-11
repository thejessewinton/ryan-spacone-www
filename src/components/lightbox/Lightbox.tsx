'use client'

import { useLightbox } from 'hooks/use-lightbox'
import type {
  ProjectDocumentData,
  StillsSetDocumentData,
} from '../../../prismicio-types'
import Image from 'next/image'
import { useRef } from 'react'
import { useClickOutside } from 'hooks/use-click-outside'
import { CloseIcon, LeftArrow } from 'components/icons/Icons'
import { getBlurUrl } from 'utils/get-url'
import { useLockBodyScroll } from 'hooks/use-lock-body-scroll'

export const Lightbox = ({
  images,
}: {
  images: ProjectDocumentData['stills'] | StillsSetDocumentData['stills']
}) => {
  const { isOpen, toggleOpen, currentImage, setCurrentImage } = useLightbox()
  const ref = useRef<HTMLDivElement | null>(null)
  useLockBodyScroll(isOpen)

  const handlePrev = () => {
    if (currentImage === 0) {
      return toggleOpen()
    }
    setCurrentImage(currentImage - 1)
  }

  const handleNext = () => {
    if (currentImage >= images.length - 1) {
      return toggleOpen()
    }
    setCurrentImage(currentImage + 1)
  }

  useClickOutside(ref, toggleOpen)

  if (!images || !images[currentImage]?.image.url) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/80 backdrop-blur-xs">
      <button onClick={toggleOpen} className="group absolute right-6 top-6 p-6">
        <CloseIcon className="transition-transform group-hover:rotate-90" />
      </button>
      <div
        className="relative flex grow items-center justify-center p-12"
        ref={ref}
      >
        <Image
          key={currentImage}
          src={images[currentImage].image.url as string}
          placeholder="blur"
          blurDataURL={getBlurUrl(images[currentImage].image.url as string)}
          alt="Lightbox Image"
          loading="eager"
          className="max-h-screen w-full max-w-4xl py-5 lg:max-w-7xl"
          width={images[currentImage].image.dimensions?.width}
          height={images[currentImage].image.dimensions?.height}
        />

        <div className="absolute flex h-full w-full items-center justify-between">
          <button
            onClick={handlePrev}
            className="group flex h-full items-center justify-center p-6"
          >
            <LeftArrow className="w-12 text-white transition-all group-hover:-translate-x-2" />
          </button>
          <button
            onClick={handleNext}
            className="group flex h-full items-center justify-center p-6"
          >
            <LeftArrow className="w-12 rotate-180 text-white transition-all group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </div>
  )
}
