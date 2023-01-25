import { ProjectCard } from "components/project-card/ProjectCard";
import { getProjects } from "utils/prismic";

const Index = async () => {
  const { results } = await getProjects();
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
