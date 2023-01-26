import { asText } from "@prismicio/helpers";
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
    <div className="group overflow-hidden">
      <Link href={href} aria-label={asText(project.title)}>
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
  );
};
