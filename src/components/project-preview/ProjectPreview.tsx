'use client'
import { getPreviewUrl } from 'utils/get-url'
import type { ProjectDocumentData } from '../../../prismicio-types'
import { clsx } from 'clsx'
import { useRef, useEffect, useState, type ReactNode } from 'react'
import type PlayerType from '@vimeo/player'
import { useScreenSize } from 'hooks/use-screen-size'

export const ProjectPreview = ({
  preview,
  children,
  showOnHover = false,
}: {
  preview: ProjectDocumentData['preview']
  children?: ReactNode
  showOnHover?: boolean
}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const playerRef = useRef<PlayerType | null>(null)
  const isPlayingRef = useRef(false)
  const [show, setShow] = useState(false)

  const size = useScreenSize()

  useEffect(() => {
    let isMounted = true
    const containerRef = wrapperRef.current
    let detachHoverListeners: (() => void) | undefined
    let cleanupPlayer: (() => void) | undefined
    let pauseTimeout: ReturnType<typeof setTimeout> | undefined

    const setupPlayer = async () => {
      if (!iframeRef.current) return

      const { default: Player } = await import('@vimeo/player')
      if (!iframeRef.current || !isMounted) return

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

      try {
        await player.ready()
        if (isMounted) {
          setShow(true)
        }
      } catch {
        // Ignore readiness errors, we'll retry on next visibility.
      }

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
        try {
          await player.play()
        } catch {
          // Autoplay may be blocked; ignore error.
        }

        detachHoverListeners = undefined
      }

      cleanupPlayer = () => {
        if (pauseTimeout) {
          clearTimeout(pauseTimeout)
          pauseTimeout = undefined
        }

        detachHoverListeners?.()
        player.off('play', handlePlay)
        player.off('pause', handlePause)
      }
    }

    void setupPlayer()

    return () => {
      isMounted = false
      cleanupPlayer?.()
      if (pauseTimeout) {
        clearTimeout(pauseTimeout)
        pauseTimeout = undefined
      }
      void playerRef.current?.destroy()
      playerRef.current = null
      isPlayingRef.current = false
    }
  }, [showOnHover, size.width])

  return (
    <div
      className="absolute inset-0 z-100 flex items-center justify-center"
      ref={wrapperRef}
    >
      <iframe
        id={preview.title as string}
        src={getPreviewUrl(preview.html as string)}
        allowFullScreen
        loading="lazy"
        ref={iframeRef}
        className={clsx(
          'pointer-events-none absolute z-0 h-[169%] min-h-full w-auto min-w-full max-w-none transition-opacity duration-700',
          showOnHover
            ? 'opacity-0 group-hover:opacity-100 md:opacity-0'
            : 'opacity-0 group-hover:opacity-100 md:opacity-100',
          !show ? 'invisible' : 'visible',
        )}
      />
      {children}
    </div>
  )
}
