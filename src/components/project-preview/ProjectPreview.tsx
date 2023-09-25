"use client";
import { getPreviewUrl } from "utils/get-url";
import type { ProjectDocumentData } from "../../../prismicio-types";
import { clsx } from "clsx";
import { useRef, useEffect, useState } from "react";
import Player from "@vimeo/player";
import { useScreenSize } from "hooks/use-screen-size";

export const ProjectPreview = ({
  preview,
  children,
  showOnHover = false,
}: {
  preview: ProjectDocumentData["preview"];
  children?: React.ReactNode;
  showOnHover?: boolean;
}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [show, setShow] = useState(false);

  const size = useScreenSize();

  useEffect(() => {
    const playerRef = iframeRef.current;
    const player = new Player(playerRef as HTMLIFrameElement);
    const containerRef = wrapperRef.current;

    const handleMouseEnter = () => {
      if (isPlaying) return;
      void player.play();
    };

    const handleMouseLeave = () => {
      if (!isPlaying) return;

      setTimeout(() => {
        void player.pause();
      }, 700);
    };

    void player.ready().then(() => {
      setShow(true);
    });

    player.on("play", () => {
      setIsPlaying(true);
    });

    player.on("pause", () => {
      setIsPlaying(false);
    });

    if (showOnHover) {
      containerRef?.addEventListener("mouseenter", handleMouseEnter);
      containerRef?.addEventListener("mouseleave", handleMouseLeave);
      containerRef?.addEventListener("touchstart", handleMouseEnter);
      containerRef?.addEventListener("touchend", handleMouseLeave);
    } else {
      void player.play();
    }

    return () => {
      containerRef?.removeEventListener("mouseenter", handleMouseEnter);
      containerRef?.removeEventListener("mouseleave", handleMouseLeave);
      containerRef?.removeEventListener("touchstart", handleMouseEnter);
      containerRef?.removeEventListener("touchend", handleMouseLeave);
    };
  }, [showOnHover, isPlaying, size.width]);

  return (
    <div
      className="absolute inset-0 z-[100] flex items-center justify-center"
      ref={wrapperRef}
    >
      <iframe
        id={preview.title as string}
        src={getPreviewUrl(preview.html as string)}
        allowFullScreen
        loading="lazy"
        ref={iframeRef}
        className={clsx(
          "pointer-events-none absolute z-0 h-[169%] min-h-full w-auto min-w-full max-w-none transition-opacity duration-700",
          showOnHover
            ? "opacity-0 group-hover:opacity-100 md:opacity-0"
            : "opacity-0 group-hover:opacity-100 md:opacity-100",
          !show ? "invisible" : "visible",
        )}
      />
      {children}
    </div>
  );
};
