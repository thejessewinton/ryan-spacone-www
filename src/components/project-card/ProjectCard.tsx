"use client";

import { asText } from "@prismicio/helpers";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Image from "next/image";
import Link from "next/link";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";

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
      <div className="sticky top-0 flex min-h-[70vh] items-center justify-center overflow-hidden">
        <Link
          href={href}
          aria-label={asText(project.title)}
          className="absolute z-10"
        >
          <h3 className="relative border-b border-brand font-brand text-lg uppercase">
            {asText(project.title)}
          </h3>
        </Link>

        <Image
          src={project.cover.url}
          width={project.cover.widescreen.dimensions?.width}
          height={project.cover.widescreen.dimensions?.height}
          alt="Project Image"
          className="absolute inset-0 h-full w-full object-cover"
          placeholder="blur"
          blurDataURL={`${project.cover.url}&blur=200`}
        />
      </div>
    </ScrollObserver>
  );
};
