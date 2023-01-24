import { ProjectCard } from "components/project-card/ProjectCard";
import type { NextPage } from "next";

const testProjects = [
  {
    slug: "test1",
  },
  {
    slug: "test2",
  },
];

const Index: NextPage = () => {
  return (
    <div className="space-y-4">
      {testProjects.map((project) => (
        <ProjectCard
          href={`/projects/${project.slug}`}
          key={project.slug}
          projectTitle="Project"
        />
      ))}
    </div>
  );
};

export default Index;
