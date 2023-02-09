"use client";

import { asText } from "@prismicio/helpers";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Link from "next/link";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";
import Image from "next/image";
import { HoverLine } from "components/hover-line/HoverLine";

export const ProjectCard = ({
  href,
  project,
}: {
  href: string;
  project: ProjectDocumentData;
}) => {
  if (!project.cover.url) return null;

  return (
    <ScrollObserver>
      <Link href={href} aria-label={asText(project.title)} className="relative">
        <div className="group relative flex aspect-widescreen items-center justify-center overflow-hidden">
          <h3 className="relative z-10 flex items-center justify-center font-serif text-lg uppercase italic text-white">
            {asText(project.title)}
            <HoverLine />
          </h3>

          <Image
            src={project.cover.url}
            width={project.cover.widescreen.dimensions?.width}
            height={project.cover.widescreen.dimensions?.height}
            alt="Project Image"
            className="absolute inset-0 h-full w-full object-cover transition-transform"
            placeholder="blur"
            blurDataURL={`${project.cover.url}&blur=200`}
          />
        </div>
      </Link>
    </ScrollObserver>
  );
};
