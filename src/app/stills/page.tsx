import { PhotosCard } from "components/photos-card/PhotosCard";
import { getStillsPage } from "utils/prismic";

export const revalidate = 60;

const Index = async () => {
  const { data } = await getStillsPage();

  return (
    <div className="space-y-2">
      {data.sets.map(({ set }) => {
        return (
          <PhotosCard
            key={set.uid}
            set={set.data}
            href={`/stills/${set.uid}`}
          />
        );
      })}
    </div>
  );
};

export default Index;
