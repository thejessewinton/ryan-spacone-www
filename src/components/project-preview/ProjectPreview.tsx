'use client'
import { getPreviewUrl } from 'utils/get-url'
import type { ProjectDocumentData } from '../../../prismicio-types'
import { clsx } from 'clsx'
import { useRef, useEffect, useState, type ReactNode } from 'react'
import Player from '@vimeo/player'
import { useScreenSize } from 'hooks/use-screen-size'

export const ProjectPreview = ({
  preview,
  children,
  showOnHover = false,
  eager = false, // Add this prop
}: {
  preview: ProjectDocumentData['preview']
  children?: ReactNode
  showOnHover?: boolean
  eager?: boolean
}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<Player | null>(null)
  const isPlayingRef = useRef(false)
  const [shouldLoad, setShouldLoad] = useState(eager) // Start true if eager
  const [show, setShow] = useState(false)

  const size = useScreenSize()

  // Intersection observer - skip if eager
  useEffect(() => {
    if (eager) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '100px',
        threshold: 0.01,
      },
    )

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current)
    }

    return () => observer.disconnect()
  }, [eager])

  // Player setup
  useEffect(() => {
    if (!shouldLoad) return

    const mountTimer = setTimeout(() => {
      if (!iframeRef.current) return

      let isMounted = true
      const containerRef = wrapperRef.current
      let detachHoverListeners: (() => void) | undefined
      let pauseTimeout: ReturnType<typeof setTimeout> | undefined

      const player = new Player(iframeRef.current)
      playerRef.current = player

      const handlePlay = () => {
        isPlayingRef.current = true
      }

      const handlePause = () => {
        isPlayingRef.current = false
      }

      player.on('play', handlePlay)
      player.on('pause', handlePause)

      setShow(true)

      const handleMouseEnter = () => {
        if (pauseTimeout) {
          clearTimeout(pauseTimeout)
          pauseTimeout = undefined
        }

        if (isPlayingRef.current) return
        void player.play()
      }

      const handleMouseLeave = () => {
        if (!isPlayingRef.current) return

        pauseTimeout = setTimeout(() => {
          void player.pause()
          pauseTimeout = undefined
        }, 700)
      }

      if (containerRef && showOnHover && size.width >= 1024) {
        containerRef.addEventListener('mouseenter', handleMouseEnter)
        containerRef.addEventListener('mouseleave', handleMouseLeave)
        containerRef.addEventListener('touchstart', handleMouseEnter)
        containerRef.addEventListener('touchend', handleMouseLeave)

        detachHoverListeners = () => {
          containerRef.removeEventListener('mouseenter', handleMouseEnter)
          containerRef.removeEventListener('mouseleave', handleMouseLeave)
          containerRef.removeEventListener('touchstart', handleMouseEnter)
          containerRef.removeEventListener('touchend', handleMouseLeave)
        }
      } else {
        void player.play().catch(() => {})
      }

      return () => {
        isMounted = false
        detachHoverListeners?.()
        if (pauseTimeout) {
          clearTimeout(pauseTimeout)
        }
        void playerRef.current?.destroy()
        playerRef.current = null
        isPlayingRef.current = false
      }
    }, 50)

    return () => clearTimeout(mountTimer)
  }, [shouldLoad, showOnHover, size.width])

  return (
    <div
      className="absolute inset-0 z-100 flex items-center justify-center"
      ref={wrapperRef}
    >
      {shouldLoad && (
        <iframe
          id={preview.title as string}
          title={preview.title as string}
          src={getPreviewUrl(preview.html as string)}
          allowFullScreen
          ref={iframeRef}
          className={clsx(
            'pointer-events-none absolute z-0 h-[169%] min-h-full w-auto min-w-full max-w-none transition-opacity duration-700',
            showOnHover
              ? 'opacity-0 group-hover:opacity-100 md:opacity-0'
              : 'opacity-0 group-hover:opacity-100 md:opacity-100',
            !show ? 'invisible' : 'visible',
          )}
        />
      )}
      {children}
    </div>
  )
}
