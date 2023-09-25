import { CategoryNav } from "components/category-nav/CategoryNav";
import { ProjectCard } from "components/project-card/ProjectCard";
import type { Metadata } from "next";

import { getHomePage } from "utils/prismic";

export const revalidate = 60;

export const generateMetadata = async (): Promise<Metadata> => {
  const { data } = await getHomePage();
  return {
    title: data.meta_title,
  };
};

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
      <CategoryNav />
    </div>
  );
};

export default Index;
