"use client";

import { asText } from "@prismicio/helpers";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Link from "next/link";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";
import Image from "next/image";
import { getBlurUrl, getImageUrl } from "utils/get-url";
import { ProjectPreview } from "components/project-preview/ProjectPreview";
import Balancer from "react-wrap-balancer";

export const ProjectCard = ({
  href,
  project,
  preview,
  previewOnHover = false,
}: {
  href: string;
  project: ProjectDocumentData;
  preview?: ProjectDocumentData["preview"];
  previewOnHover?: boolean;
}) => {
  if (!project.cover.widescreen.url) return null;

  return (
    <ScrollObserver>
      <Link
        href={href}
        aria-label={asText(project.title)}
        className="relative z-[100] h-full w-full cursor-pointer"
      >
        <div className="group relative flex aspect-widescreen items-center justify-center overflow-hidden">
          <Balancer
            as="h2"
            className="absolute z-10 mx-auto inline-block space-x-2 whitespace-pre-line text-center font-serif text-sm uppercase leading-10 tracking-[2rem] text-white opacity-0 transition-opacity duration-700 after:absolute after:left-0 after:right-8 after:block after:content-[''] group-hover:opacity-100 md:text-2xl md:tracking-[2rem] lg:space-x-7"
          >
            {asText(project.title)}
          </Balancer>

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
          {preview ? (
            <ProjectPreview
              showOnHover={previewOnHover}
              preview={project.preview}
            />
          ) : null}
        </div>
      </Link>
    </ScrollObserver>
  );
};
