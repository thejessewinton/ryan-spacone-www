/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { getPreviewUrl } from "utils/get-url";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";
import { clsx } from "clsx";
import { useRef, useEffect, useState } from "react";
import Player from "@vimeo/player";

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

  useEffect(() => {
    const playerRef = iframeRef.current;
    const player = new Player(playerRef);
    const containerRef = wrapperRef.current;

    const handleMouseEnter = () => {
      if (isPlaying) return;
      player.play();
    };

    const handleMouseLeave = () => {
      if (!isPlaying) return;

      setTimeout(() => {
        player.pause();
      }, 700);
    };

    player.on("play", () => {
      setIsPlaying(true);
    });

    player.on("pause", () => {
      setIsPlaying(false);
    });

    if (showOnHover) {
      containerRef?.addEventListener("mouseenter", handleMouseEnter);
      containerRef?.addEventListener("mouseleave", handleMouseLeave);
    } else {
      player.play();
    }
    return () => {
      containerRef?.removeEventListener("mouseenter", handleMouseEnter);
      containerRef?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [showOnHover, isPlaying]);

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
            ? "opacity-0 group-hover:opacity-100"
            : "opacity-0 group-hover:opacity-100 md:opacity-100"
        )}
      />
      {children}
    </div>
  );
};
