import { clsx } from "clsx";
import type { ProjectProps } from "types/prismic";
import { getProject } from "utils/prismic";
import { asText } from "@prismicio/helpers";
import { VimeoPlayer } from "components/vimeo-player/VimeoPlayer";
import Image from "next/image";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import { ProjectNav } from "components/project-nav/ProjectNav";

const CreditsSection = ({
  projectName,
  credits,
}: {
  projectName: ProjectProps["title"];
  credits: ProjectProps["credits"];
}) => {
  return (
    <ScrollObserver>
      <section className="py-16 px-9 md:px-64">
        <div className="mb-4 border-b border-b-brand pb-4">
          <h1 className="font-serif text-2xl uppercase italic">
            {asText(projectName)}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2">
          {credits.map((credit) => {
            return (
              <div key={credit.label} className="md:col-span-1">
                <span className="mr-2">{credit.label}:</span>
                {asText(credit.details, "\n\n")
                  .split("\n\n")
                  .map((line) => (
                    <span className="" key={line}>
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
    <div className="grid grid-cols-4">
      {stills.map((still, i) => {
        if (!still.image.url) return null;

        const subIndex = i % 6;

        const className =
          subIndex < 2
            ? "col-span-2"
            : subIndex >= 2 && subIndex < 6
            ? "col-span-1"
            : "";

        return (
          <ScrollObserver
            key={still.image.url}
            className={clsx("bg-black", className)}
          >
            <Image
              src={still.image.url}
              width={still.image.dimensions.width}
              height={still.image.dimensions.height}
              alt="Project Image"
              loading="lazy"
              placeholder="blur"
              blurDataURL={`${still.image.url}&blur=200`}
            />
          </ScrollObserver>
        );
      })}
    </div>
  );
};

const Project = async ({ params }: { params: { uid: string } }) => {
  const { project, nextProject, previousProject } = await getProject(
    params.uid
  );

  return (
    <>
      <div className="flex flex-col gap-2">
        <VimeoPlayer cover={project.data.cover} video={project.data.video} />
        <CreditsSection
          projectName={project.data.title}
          credits={project.data.credits}
        />
        <ImageGallery stills={project.data.stills} />
      </div>
      <ProjectNav previous={previousProject} next={nextProject} />
    </>
  );
};

export default Project;
