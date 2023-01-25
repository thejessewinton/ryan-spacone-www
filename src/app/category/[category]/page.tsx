import { ProjectCard } from "components/project-card/ProjectCard";
import { getProjectsByCategory } from "utils/prismic";

const Index = async ({ params }: { params: { category: string } }) => {
  const { results } = await getProjectsByCategory(params.category);
  return (
    <div className="space-y-4">
      {results.map((project) => (
        <ProjectCard
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          href={`/projects/${project.uid}`}
          key={project.uid}
          projectTitle="Project"
        />
      ))}
    </div>
  );
};

export default Index;
