"use client";

import { asText } from "@prismicio/helpers";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Link from "next/link";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";
import Image from "next/image";
import { getBlurUrl, getImageUrl } from "utils/get-url";
import { ProjectPreview } from "components/project-preview/ProjectPreview";

export const ProjectCard = ({
  href,
  project,
  preview,
}: {
  href: string;
  project: ProjectDocumentData;
  preview?: ProjectDocumentData["preview"];
}) => {
  if (!project.cover.widescreen.url) return null;

  return (
    <ScrollObserver>
      <Link
        href={href}
        aria-label={asText(project.title)}
        className="relative cursor-pointer"
      >
        <div className="group relative flex aspect-widescreen items-center justify-center overflow-hidden">
          <h3 className="absolute z-10 mx-auto text-center font-serif text-sm uppercase tracking-[15px] text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:text-3xl md:tracking-[1.5625rem]">
            {asText(project.title)}
          </h3>

          <Image
            src={getImageUrl(project.cover.widescreen.url)}
            width={project.cover.widescreen.dimensions?.width}
            height={project.cover.widescreen.dimensions?.height}
            alt={asText(project.title)}
            className="w-full"
            placeholder="blur"
            blurDataURL={getBlurUrl(project.cover.widescreen.url)}
            quality={100}
          />
          {preview ? <ProjectPreview preview={project.preview} /> : null}
        </div>
      </Link>
    </ScrollObserver>
  );
};
