import { ProjectCard } from "components/project-card/ProjectCard";

import { getHomePage } from "utils/prismic";

const Index = async () => {
  const { data } = await getHomePage();
  return (
    <div className="space-y-2">
      {data.projects.map(({ project }) => (
        <div className="group relative" key={project.uid}>
          <ProjectCard
            href={`/projects/${project.uid}`}
            project={project.data}
            preview={project.data.preview}
          />
        </div>
      ))}
    </div>
  );
};

export default Index;
