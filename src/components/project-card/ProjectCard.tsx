import Image from "next/image";
import Link from "next/link";
import TestImage from "../../../public/image.webp";

export const ProjectCard = ({
  href,
  projectTitle,
}: {
  href: { pathname: string; query: { slug: string } };
  projectTitle: string;
}) => {
  return (
    <div className="group overflow-hidden">
      <Link
        href={{
          pathname: "/projects/[slug]",
          query: { slug: href.query.slug },
        }}
        aria-label={projectTitle}
      >
        <Image
          src={TestImage}
          alt="Project Image"
          className="w-full transition-transform duration-700 group-hover:scale-105"
          placeholder="blur"
        />
        <span className="sr-only">{projectTitle}</span>
      </Link>
    </div>
  );
};
