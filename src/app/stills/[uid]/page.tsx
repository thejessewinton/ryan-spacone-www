import { getStillsSet } from "utils/prismic";
import { ProjectNav } from "components/project-nav/ProjectNav";
import Image from "next/image";
import { getBlurUrl, getImageUrl } from "utils/get-url";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";

const Project = async ({ params }: { params: { uid: string } }) => {
  const { stillsSet, nextSet, previousSet } = await getStillsSet(params.uid);

  return (
    <>
      <div className="columns-1 gap-x-2 sm:columns-2 lg:columns-3">
        {stillsSet.data.stills.map((item) => {
          if (!item.still.url) return null;
          return (
            <ScrollObserver key={item.still.url}>
              <Image
                src={getImageUrl(item.still.url)}
                width={item.still.dimensions?.width}
                height={item.still.dimensions?.height}
                alt="Gallery Image"
                className="mb-2 w-full"
                placeholder="blur"
                blurDataURL={getBlurUrl(item.still.url)}
                quality={100}
              />
            </ScrollObserver>
          );
        })}
      </div>
      <ProjectNav previous={previousSet} next={nextSet} />
    </>
  );
};

export default Project;
