import { clsx } from "clsx";
import type { ProjectProps } from "types/prismic";
import { getProject } from "utils/prismic";
import { asText } from "@prismicio/helpers";
import { VimeoPlayer } from "components/vimeo-player/VimeoPlayer";
import Image from "next/image";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Link from "next/link";
import type { ProjectDocument } from "../../../../.slicemachine/prismicio";

const CreditsSection = ({
  projectName,
  credits,
}: {
  projectName: ProjectProps["title"];
  credits: ProjectProps["credits"];
}) => {
  return (
    <ScrollObserver>
      <section className="grid grid-cols-2 items-center justify-center gap-4 py-32 text-right md:text-left">
        <h1 className="text-center font-serif text-2xl uppercase">
          {asText(projectName)}
        </h1>

        <div className="space-y-6">
          {credits.map((credit) => {
            return (
              <div key={credit.label}>
                <span className="block font-medium uppercase">
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
          })}
        </div>
      </section>
    </ScrollObserver>
  );
};

const ImageGallery = ({ stills }: { stills: ProjectProps["stills"] }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stills.map((still, i) => {
        if (!still.image.url) return null;

        const className = i % 5 === 0 ? "col-span-2" : "col-span-1";

        return (
          <ScrollObserver
            key={still.image.url}
            className={clsx("aspect-video bg-black", className)}
          >
            <Image
              src={still.image.url}
              width={still.image.dimensions.width}
              height={still.image.dimensions.height}
              alt="Project Image"
              loading="lazy"
              className={clsx("aspect-video bg-black", className)}
              placeholder="blur"
              blurDataURL={`${still.image.url}&blur=200`}
            />
          </ScrollObserver>
        );
      })}
    </div>
  );
};

const ProjectNav = ({
  previous,
  next,
}: {
  previous: ProjectDocument | undefined;
  next: ProjectDocument | undefined;
}) => {
  return (
    <div className="grid max-h-[200px] grid-cols-2 gap-4 overflow-hidden pt-4">
      {previous && (
        <Link href={previous.url as string} className="relative">
          <Image
            src={previous.data.stills[0]?.image.url as string}
            width={1920}
            height={200}
            alt="Project Image"
            loading="lazy"
            className="aspect-video bg-black"
            placeholder="blur"
            blurDataURL={`${
              previous.data.stills[0]?.image.url as string
            }&blur=200`}
          />
        </Link>
      )}
      {next && (
        <Link href={next.url as string} className="relative">
          <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            Next Project
          </h3>
          <Image
            src={next.data.stills[0]?.image.url as string}
            width={1920}
            height={200}
            alt="Project Image"
            loading="lazy"
            className="aspect-video bg-black"
            placeholder="blur"
            blurDataURL={`${next.data.stills[0]?.image.url as string}&blur=200`}
          />
        </Link>
      )}
    </div>
  );
};

const Project = async ({ params }: { params: { uid: string } }) => {
  const { project, nextProject, previousProject } = await getProject(
    params.uid
  );

  return (
    <div className="flex flex-col gap-2">
      <VimeoPlayer video={project.data.video} />
      <CreditsSection
        projectName={project.data.title}
        credits={project.data.credits}
      />
      <ImageGallery stills={project.data.stills} />
      <ProjectNav previous={previousProject} next={nextProject} />
    </div>
  );
};

export default Project;
