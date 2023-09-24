import { ProjectCard } from "components/project-card/ProjectCard";
import type { Metadata } from "next";
import { getCategory } from "utils/prismic";

export const revalidate = 60;

interface CategoryParams {
  params: { category: string };
}

export const generateMetadata = async ({
  params,
}: CategoryParams): Promise<Metadata> => {
  const { data } = await getCategory(params.category);

  return {
    title: data.meta_title,
  };
};

const Index = async ({ params }: CategoryParams) => {
  const { data } = await getCategory(params.category);

  return (
    <div className="space-y-2">
      {data.projects.map(({ project }) => (
        <ProjectCard
          href={`/projects/${project.uid}`}
          key={project.uid}
          project={project.data}
          preview={project.data.preview}
        />
      ))}
    </div>
  );
};

export default Index;
