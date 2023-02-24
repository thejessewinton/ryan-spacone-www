import type { ProjectProps } from "types/prismic";
import { getProject } from "utils/prismic";
import { asLink, asText } from "@prismicio/helpers";
import { VimeoPlayer } from "components/vimeo-player/VimeoPlayer";
import Image from "next/image";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import { ProjectNav } from "components/project-nav/ProjectNav";
import Link from "next/link";
import { ImageGallery } from "components/image-gallery/ImageGallery";
import { getBlurUrl, getImageUrl } from "utils/get-url";
import type { Metadata } from "next";

export const revalidate = 60;

export const generateMetadata = async ({
  params,
}: ProjectParams): Promise<Metadata> => {
  const { project } = await getProject(params.uid);
  return {
    title: project.data.meta_title,
    description: project.data.meta_description,
  };
};

interface ProjectParams {
  params: { uid: string };
}

const CreditsSection = ({
  projectName,
  client,
  credits,
  links,
}: {
  client?: ProjectProps["client"];
  projectName: ProjectProps["title"];
  credits: ProjectProps["credits"];
  links: ProjectProps["links"];
}) => {
  return (
    <ScrollObserver>
      <section className="grid w-full gap-4 py-8 px-3 md:grid-cols-2 md:items-center md:px-0 lg:py-24">
        <h2 className="text-md font-serif uppercase tracking-[0.2em] md:text-center md:text-2xl">
          {client ? (
            <span className="block text-[0.6rem] md:text-base">
              {asText(client)}
            </span>
          ) : null}
          {asText(projectName)}
        </h2>

        <div className="flex flex-col gap-4 text-right font-thin md:text-left">
          {credits && credits.length
            ? credits.map((credit) => {
                return (
                  <div
                    key={credit.label}
                    className="md:text-normal text-sm md:col-span-1"
                  >
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
                      className="font-medium underline"
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

const Project = async ({ params }: ProjectParams) => {
  const { project, firstProject, nextProject, previousProject } =
    await getProject(params.uid);

  return (
    <>
      <div className="flex flex-col gap-2">
        {project.data.video.embed_url ? (
          <VimeoPlayer video={project.data.video} />
        ) : project.data.cover && project.data.cover.url ? (
          <Image
            src={getImageUrl(project.data.cover.url)}
            width={project.data.cover.dimensions.width}
            height={project.data.cover.dimensions.height}
            alt="Project Image"
            loading="lazy"
            placeholder="blur"
            blurDataURL={getBlurUrl(project.data.cover.url)}
            className="mx-auto block w-full"
            quality={100}
          />
        ) : null}
        <CreditsSection
          client={project.data.client}
          projectName={project.data.title}
          credits={project.data.credits}
          links={project.data.links}
        />
        {project.data.secondary_video.embed_url ? (
          <VimeoPlayer video={project.data.secondary_video} />
        ) : null}
        <ImageGallery stills={project.data.stills} />
      </div>
      <ProjectNav
        first={firstProject}
        previous={previousProject}
        next={nextProject}
      />
    </>
  );
};

export default Project;
