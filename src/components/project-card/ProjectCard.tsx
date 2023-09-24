"use client";

import { asText } from "@prismicio/helpers";
import Link from "next/link";
import type { ProjectDocumentData } from "../../../prismicio-types";
import Image from "next/image";
import { getBlurUrl, getImageUrl } from "utils/get-url";
import { ProjectPreview } from "components/project-preview/ProjectPreview";
import { useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

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
  const projectRef = useRef(null);
  const isInView = useInView(projectRef, {
    once: true,
    amount: 0.5,
  });
  if (!project.cover.widescreen.url) return null;

  return (
    <Link
      href={href}
      aria-label={asText(project.title)}
      className={clsx(
        "relative z-[100] h-full w-full transform cursor-pointer transition-all duration-500",
        {
          "scale-105 opacity-0": !isInView,
          "scale-100 opacity-100": isInView,
        },
      )}
      ref={projectRef}
    >
      <div className="group relative flex aspect-widescreen items-center justify-center overflow-hidden">
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
          >
            <h2 className="absolute z-10 text-center font-serif text-sm uppercase tracking-[0.75rem] text-white opacity-0 transition-opacity duration-700 after:absolute after:left-0 after:right-8 after:block after:content-[''] group-hover:opacity-100 md:text-3xl md:tracking-[1.725rem]">
              {project.client ? (
                <span className="block text-[0.6rem] md:text-base">
                  {asText(project.client)}
                </span>
              ) : null}
              {asText(project.title)}
            </h2>
          </ProjectPreview>
        ) : (
          <h2 className="absolute z-10 text-center font-serif text-sm uppercase tracking-[0.75rem] text-white opacity-0 transition-opacity duration-700 after:absolute after:left-0 after:right-8 after:block after:content-[''] group-hover:opacity-100 md:text-3xl md:tracking-[1.725rem]">
            {project.client ? (
              <span className="block text-[0.6rem] md:text-base">
                {asText(project.client)}
              </span>
            ) : null}
            {asText(project.title)}
          </h2>
        )}
      </div>
    </Link>
  );
};
