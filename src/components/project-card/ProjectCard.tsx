"use client";

import { asText } from "@prismicio/helpers";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import { motion } from "framer-motion";
import Link from "next/link";
import { getIdFromUrl } from "utils/get-id-from-url";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";

export const ProjectCard = ({
  href,
  project,
}: {
  href: string;
  project: ProjectDocumentData;
}) => {
  const id = getIdFromUrl(project.video.embed_url);
  const src = `https://player.vimeo.com/video/${id}?background=1`;

  if (!project.cover.url) return null;
  return (
    <ScrollObserver>
      <div className="sticky top-0 flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Link
          href={href}
          aria-label={asText(project.title)}
          className="absolute z-10"
        >
          <h3 className="relative border-b border-brand font-brand text-lg font-normal uppercase italic">
            {asText(project.title)}
          </h3>
        </Link>

        <motion.iframe
          src={src}
          className="absolute inset-0 h-full w-full"
          allowFullScreen
          allow="autoplay"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        />
      </div>
    </ScrollObserver>
  );
};
