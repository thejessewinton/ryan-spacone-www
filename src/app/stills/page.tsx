import { PhotosCard } from "components/photos-card/PhotosCard";
import { getStillsPage } from "utils/prismic";

const Index = async () => {
  const { data } = await getStillsPage();

  console.log(JSON.stringify(data, null, 4));

  return (
    <div className="space-y-4">
      {/* {data.sets.map(({ set }) => {
        return (
          <PhotosCard
            key={set.uid}
            set={set.data}
            href={`/stills/${set.uid}`}
          />
        );
      })} */}
    </div>
  );
};

export default Index;
