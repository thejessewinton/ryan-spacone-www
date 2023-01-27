import { ProjectCard } from "components/project-card/ProjectCard";
import { getCategory } from "utils/prismic";
import type { ProjectDocumentData } from "../../../../.slicemachine/prismicio";

const Index = async ({ params }: { params: { category: string } }) => {
  const { data } = await getCategory(params.category);

  return <div className="space-y-4">{JSON.stringify(data, null, 4)}</div>;
};

export default Index;
