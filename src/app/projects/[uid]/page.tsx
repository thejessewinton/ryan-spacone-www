import type { ProjectProps } from "types/prismic";
import { getProject, getProjects } from "utils/prismic";
import { asLink, asText } from "@prismicio/helpers";
import { VimeoPlayer } from "components/vimeo-player/VimeoPlayer";
import Image from "next/image";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import { ProjectNav } from "components/project-nav/ProjectNav";
import Link from "next/link";
import { ImageGallery } from "components/image-gallery/ImageGallery";
import { getBlurUrl, getImageUrl } from "utils/get-url";
import type { Metadata } from "next";
import clsx from "clsx";

export const revalidate = 60;

export const generateStaticParams = async () => {
  const { results } = await getProjects();

  return results.map((page) => ({
    params: {
      uid: page.uid,
    },
  }));
};

export const generateMetadata = async ({
  params,
}: PageProps<"/projects/[uid]">): Promise<Metadata> => {
  const uid = (await params).uid;
  const { project } = await getProject(uid);

  return {
    title: project.data.meta_title,
  };
};

const CreditsSection = ({ project }: { project: ProjectProps }) => {
  return (
    <ScrollObserver>
      <section className="grid w-full gap-4 px-3 py-8 md:grid-cols-2 md:items-center md:px-0 lg:py-24">
        <div className="flex flex-col gap-4">
          <h2 className="text-md font-serif uppercase tracking-[0.2em] md:text-center md:text-2xl">
            {project.client ? (
              <span className="block text-[0.6rem] md:text-base">
                {asText(project.client)}
              </span>
            ) : null}
            {asText(project.title)}
            {project.coming_soon ? (
              <span className="ml-auto mr-0 block text-[0.6rem] md:text-base">
                Coming Soon...
              </span>
            ) : null}
          </h2>
          {project.starring.length > 0 ? (
            <div className="text-sm font-thin md:text-center">
              <span className="font-normal uppercase">Featuring</span>
              {project.starring.map((item) => (
                <span
                  key={item.name}
                  className="md:text-normal block space-y-2 text-sm"
                >
                  {item.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-4 text-right font-thin md:text-left">
          {project.credits && project.credits.length > 0
            ? project.credits.map((credit, index) => {
                return (
                  <div
                    key={index}
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
          {project.links && project.links.length > 0 
            ? project.links.map((item, index) => {
              if (!item.link.link_type.length) return null;
                return (
                  <div
                    key={index}
                    className="md:text-normal text-sm md:col-span-1"
                  >
                    <span className="font-normal uppercase">{item.label}</span>
                    <Link
                      className="block underline"
                      href={asLink(item.link) ?? ''}
                      target="_blank"
                    >
                      Visit
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

const Project = async ({ params }: PageProps<"/projects/[uid]">) => {
  const { project, firstProject, nextProject, previousProject } =
    await getProject((await params).uid);

  return (
    <>
      <div className="flex flex-col gap-2">
        {project.data.video.embed_url ? (
          <VimeoPlayer video={project.data.video} />
        ) : project.data.featured_image && project.data.featured_image.url ? (
          <Image
            src={getImageUrl(project.data.featured_image.url)}
            width={project.data.featured_image.dimensions.width}
            height={project.data.featured_image.dimensions.height}
            alt="Project Image"
            loading="lazy"
            placeholder="blur"
            blurDataURL={getBlurUrl(project.data.featured_image.url)}
            className="mx-auto block w-full"
            quality={100}
          />
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
        <CreditsSection project={project.data} />
        {project.data.secondary_video && project.data.secondary_video.embed_url ? (
          <VimeoPlayer video={project.data.secondary_video} />
        ) : null}
        {project.data.additional_videos && project.data.additional_videos.length > 0 ? (
          <>
            <div
              className={clsx("mb-10 grid gap-2", {
                "md:grid-cols-2":
                  project.data.additional_videos &&
                  project.data.additional_videos.length % 2 === 0,
              })}
            >
              {project.data.additional_videos.length > 0
                ? project.data.additional_videos.map((video, i) => {
                  if (!video.embed_url.length) return null;
                    return <VimeoPlayer key={i} video={video.embed_url} />;
                  })
                : null}
            </div>
          </>
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
