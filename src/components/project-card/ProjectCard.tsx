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
      <div className="group overflow-hidden">
        <Link
          href={href}
          aria-label={asText(project.title)}
          className="relative"
        >
          <div className="absolute mx-auto flex h-full items-center pl-9 italic">
            <h3 className="z-10 -translate-x-2 font-brand text-lg uppercase opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100">
              {asText(project.title)}
            </h3>
          </div>
          <Image
            src={project.cover.url}
            width={project.cover.widescreen.dimensions?.width}
            height={project.cover.widescreen.dimensions?.height}
            alt="Project Image"
            className="w-full transition-transform duration-700 group-hover:scale-105"
            placeholder="blur"
            blurDataURL={`${project.cover.url}&blur=200`}
          />
          <span className="sr-only">{asText(project.title)}</span>
        </Link>
      </div>
    </ScrollObserver>
  );
};
