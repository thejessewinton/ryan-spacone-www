import type { ProjectProps } from "types/prismic";
import { getProject } from "utils/prismic";
import { asLink, asText } from "@prismicio/helpers";
import { VimeoPlayer } from "components/vimeo-player/VimeoPlayer";
import Image from "next/image";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import { ProjectNav } from "components/project-nav/ProjectNav";
import Link from "next/link";
import { Lightbox } from "components/lightbox/Lightbox";
import { ImageGallery } from "components/image-gallery/ImageGallery";

const CreditsSection = ({
  projectName,
  credits,
  links,
}: {
  projectName: ProjectProps["title"];
  credits: ProjectProps["credits"];
  links: ProjectProps["links"];
}) => {
  return (
    <ScrollObserver>
      <section className="grid w-full grid-cols-2 justify-center gap-4 py-24 md:items-center">
        <h4 className="font-serif text-2xl uppercase tracking-[0.2em] md:text-center">
          {asText(projectName)}
        </h4>

        <div className="flex flex-col gap-4 text-right font-thin md:text-left">
          {credits && credits.length
            ? credits.map((credit) => {
                return (
                  <div key={credit.label} className="md:col-span-1">
                    <span className="font-normal uppercase">
                      {credit.label}
                    </span>
                    {asText(credit.details, "\n\n")
                      .split("\n\n")
                      .map((line) => (
                        <span className="block" key={line}>
                          {line}
                        </span>
                      ))}
                  </div>
                );
              })
            : null}
          {links && links.length
            ? links.map((item) => {
                return (
                  <div key={item.label} className="md:col-span-1">
                    <Link
                      className="font-medium"
                      href={asLink(item.link) as string}
                      target="_blank"
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      </section>
    </ScrollObserver>
  );
};

const Project = async ({ params }: { params: { uid: string } }) => {
  const { project, nextProject, previousProject } = await getProject(
    params.uid
  );

  return (
    <>
      <div className="flex flex-col gap-2">
        {project.data.video.embed_url ? (
          <VimeoPlayer video={project.data.video} />
        ) : project.data.cover && project.data.cover.url ? (
          <Image
            src={project.data.cover.url}
            width={project.data.cover.dimensions.width}
            height={project.data.cover.dimensions.height}
            alt="Project Image"
            loading="lazy"
            placeholder="blur"
            blurDataURL={`${project.data.cover.url}&blur=200`}
            className="mx-auto block"
          />
        ) : null}
        <CreditsSection
          projectName={project.data.title}
          credits={project.data.credits}
          links={project.data.links}
        />
        {project.data.secondary_video.embed_url ? (
          <VimeoPlayer video={project.data.secondary_video} />
        ) : null}
        <ImageGallery stills={project.data.stills} />
      </div>
      <ProjectNav previous={previousProject} next={nextProject} />
    </>
  );
};

export default Project;
