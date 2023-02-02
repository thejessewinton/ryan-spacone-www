"use client";

import { motion } from "framer-motion";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";

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
  const id = getIdFromUrl(video.embed_url);
  const src = `https://player.vimeo.com/video/${id}?&autoplay=1&title=0&byline=0&portrait=0&badge=0`;
  return (
    <motion.div
      className="relative aspect-video w-full bg-neutral-900"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        src={src}
        className="absolute inset-0 h-full w-full"
        allowFullScreen
      />
    </motion.div>
  );
};
