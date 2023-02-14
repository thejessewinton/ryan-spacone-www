import { ProjectCard } from "components/project-card/ProjectCard";
import { getCategory } from "utils/prismic";

export const revalidate = 60;

const Index = async ({ params }: { params: { category: string } }) => {
  const { data } = await getCategory(params.category);

  return (
    <div className="space-y-2">
      {data.projects.map(({ project }) => (
        <ProjectCard
          href={`/projects/${project.uid}`}
          key={project.uid}
          project={project.data}
          preview={project.data.preview}
          previewOnHover={true}
        />
      ))}
    </div>
  );
};

export default Index;
