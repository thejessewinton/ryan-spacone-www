import { clsx } from "clsx";
import type { ProjectProps } from "types/prismic";
import { getProject } from "utils/prismic";
import { asText } from "@prismicio/helpers";
import { VimeoPlayer } from "components/vimeo-player/VimeoPlayer";

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
              {asText(credit.details)}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ImageGallery = () => {
  const arrayOfImages = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-2 gap-4">
      {arrayOfImages.map((image, i) => {
        const className = i % 5 === 0 ? "col-span-2" : "col-span-1";
        return (
          <div
            className={clsx("aspect-video bg-black", className)}
            key={image}
          />
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
      <ImageGallery />
    </div>
  );
};

export default Project;
