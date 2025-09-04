import { getStillsSet } from "utils/prismic";
import { ProjectNav } from "components/project-nav/ProjectNav";
import { MasonryGallery } from "components/masonry-gallery/MasonryGallery";
import type { Metadata } from "next";

export const revalidate = 60;

export const generateMetadata = async ({
  params,
}: PageProps<"/stills/[uid]">): Promise<Metadata> => {
  const uid = (await params).uid;
  const { stillsSet } = await getStillsSet(uid);

  return {
    title: stillsSet.data.meta_title,
    description: stillsSet.data.meta_description,
  };
};

const Stills = async ({ params }: PageProps<"/stills/[uid]">) => {
  const uid = (await params).uid;
  const { stillsSet, firstSet, nextSet, previousSet } = await getStillsSet(uid);

  return (
    <>
      <div className="columns-1 gap-x-2 sm:columns-2 lg:columns-3">
        <MasonryGallery stills={stillsSet.data.stills} />
      </div>
      <ProjectNav first={firstSet} previous={previousSet} next={nextSet} />
    </>
  );
};

export default Stills;
