import { PhotosCard } from "components/photos-card/PhotosCard";
import { getPhotoSets } from "utils/prismic";

const Index = async () => {
  const { results } = await getPhotoSets();
  return (
    <div className="space-y-4">
      {results.map((set) => {
        return (
          <PhotosCard
            href={`/photos/${set.uid}`}
            key={set.uid}
            set={set.data}
          />
        );
      })}
    </div>
  );
};

export default Index;
