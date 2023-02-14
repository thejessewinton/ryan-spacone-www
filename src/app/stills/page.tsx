import { StillsCard } from "components/stills-card/StillsCard";
import { getStillsPage } from "utils/prismic";

const Index = async () => {
  const { data } = await getStillsPage();

  return (
    <div className="space-y-2">
      {data.sets.map(({ set }) => {
        return (
          <StillsCard
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
