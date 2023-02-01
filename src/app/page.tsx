import { ProjectCard } from "components/project-card/ProjectCard";
import { getProjects } from "utils/prismic";

const Index = async () => {
  const { results } = await getProjects();
  return (
    <div className="">
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
