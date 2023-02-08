import { ProjectCard } from "components/project-card/ProjectCard";
import { getHomePage } from "utils/prismic";

const Index = async () => {
  const { data } = await getHomePage();
  return (
    <div className="flex flex-col gap-4">
      {data.projects.map(({ project }) => (
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
