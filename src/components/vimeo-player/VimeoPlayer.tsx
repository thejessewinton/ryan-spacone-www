"use client";

import { motion } from "motion/react";
import { getVideoUrl } from "utils/get-url";
import type { ProjectDocumentData } from "../../../prismicio-types";

export const VimeoPlayer = ({
  video,
}: {
  video: ProjectDocumentData["video"];
}) => {
  return (
    <motion.div
      className="relative aspect-video w-full bg-neutral-900"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        src={getVideoUrl(video.embed_url)}
        className="h-full w-full"
        allowFullScreen
      />
    </motion.div>
  );
};
