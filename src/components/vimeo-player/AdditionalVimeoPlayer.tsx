"use client";

import { motion } from "motion/react";
import { getPreviewUrl } from "utils/get-url";

export const AdditionalVimeoPlayer = ({ html }: { html: string }) => {
  return (
    <motion.div
      className="relative aspect-video w-full bg-neutral-900"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <iframe
        src={getPreviewUrl(html)}
        className="h-full w-full"
        allowFullScreen
      />
    </motion.div>
  );
};
