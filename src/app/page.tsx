import { ProjectCard } from "components/project-card/ProjectCard";
import { getProjects } from "utils/prismic";

const Index = async () => {
  const { results } = await getProjects();
  return (
    <div className="flex flex-col gap-4">
      {results.map((project) => (
        <ProjectCard
          href={`/projects/${project.uid}`}
          key={project.uid}
          project={project.data}
        />
      ))}
    </div>
  );
};

export default Index;
