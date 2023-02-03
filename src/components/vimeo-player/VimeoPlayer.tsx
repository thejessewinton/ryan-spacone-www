"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";
import Image from "next/image";
import { PlayIcon } from "components/icons/Icons";

const getIdFromUrl = (url: string) => {
  const id = url.split("/").pop();
  if (!id) throw new Error("Could not get ID from URL");
  return id;
};

export const VimeoPlayer = ({
  video,
  cover,
}: {
  video: ProjectDocumentData["video"];
  cover?: ProjectDocumentData["cover"];
}) => {
  const [played, setPlayed] = useState(false);
  const id = getIdFromUrl(video.embed_url);
  const src = `https://player.vimeo.com/video/${id}?&autoplay=1&title=0&byline=0&portrait=0&badge=0`;
  return (
    <motion.div
      className="relative aspect-video w-full bg-neutral-900"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {played ? (
          <motion.iframe
            src={src}
            className="absolute inset-0 h-full w-full"
            allowFullScreen
            allow="autoplay"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          />
        ) : cover && cover.url ? (
          <motion.div
            key="cover"
            className="relative flex items-center justify-center"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button onClick={() => setPlayed(true)} className="absolute">
              <PlayIcon className="h-16 w-16" />
              <span className="sr-only">Play</span>
            </button>
            <Image
              src={cover.url}
              width={1920}
              height={1080}
              alt="Project Image"
              className="aspect-video w-full transition-transform duration-700 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={`${cover.url}&blur=200`}
            />
          </motion.div>
        ) : (
          <button onClick={() => setPlayed(true)}>Play</button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
