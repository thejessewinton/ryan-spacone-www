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
  showOnHover = false,
}: {
  preview: ProjectDocumentData["preview"];
  showOnHover?: boolean;
}) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const player = new Player(iframeRef.current);
    const playerRef = iframeRef.current;

    const handleMouseEnter = () => {
      if (isPlaying) return;
      player.play();
    };

    const handleMouseLeave = () => {
      if (!isPlaying) return;
      player.pause();
    };

    player.on("play", () => {
      setIsPlaying(true);
    });

    player.on("pause", () => {
      setIsPlaying(false);
    });

    if (showOnHover) {
      playerRef?.addEventListener("mouseenter", handleMouseEnter);
      playerRef?.addEventListener("mouseleave", handleMouseLeave);
    } else {
      player.play();
    }
    return () => {
      playerRef?.removeEventListener("mouseenter", handleMouseEnter);
      playerRef?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [showOnHover, isPlaying]);

  return (
    <iframe
      id={preview.title as string}
      src={getPreviewUrl(preview.html as string)}
      allowFullScreen
      loading="lazy"
      ref={iframeRef}
      onMouseEnter={() => console.log("mouse enter")}
      className={clsx(
        "pointer-events-auto absolute h-[169%] min-h-full w-auto min-w-full max-w-none transition-opacity duration-700",
        showOnHover
          ? "opacity-0 group-hover:opacity-100"
          : "opacity-0 group-hover:opacity-100 md:opacity-100"
      )}
    />
  );
};
