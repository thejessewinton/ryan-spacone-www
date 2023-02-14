import { getStillsSet } from "utils/prismic";
import { ProjectNav } from "components/project-nav/ProjectNav";
import { MasonryGallery } from "components/masonry-gallery/MasonryGallery";

export const revalidate = 60;

const Project = async ({ params }: { params: { uid: string } }) => {
  const { stillsSet, nextSet, previousSet } = await getStillsSet(params.uid);

  return (
    <>
      <div className="columns-1 gap-x-2 sm:columns-2 lg:columns-3">
        <MasonryGallery stills={stillsSet.data.stills} />
      </div>
      <ProjectNav previous={previousSet} next={nextSet} />
    </>
  );
};

export default Project;
