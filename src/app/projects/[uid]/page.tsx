import { clsx } from "clsx";
import type { ProjectProps } from "types/prismic";
import { getProject } from "utils/prismic";
import { asText } from "@prismicio/helpers";
import { VimeoPlayer } from "components/vimeo-player/VimeoPlayer";
import Image from "next/image";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";

const CreditsSection = ({
  projectName,
  credits,
}: {
  projectName: ProjectProps["title"];
  credits: ProjectProps["credits"];
}) => {
  return (
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

const Project = async ({ params }: { params: { uid: string } }) => {
  const { data } = await getProject(params.uid);

  return (
    <div className="flex flex-col gap-2">
      <VimeoPlayer video={data.video} />
      <CreditsSection projectName={data.title} credits={data.credits} />
      <ImageGallery stills={data.stills} />
    </div>
  );
};

export default Project;
