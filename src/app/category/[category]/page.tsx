import { ProjectCard } from "components/project-card/ProjectCard";
import { getProjectsByCategory } from "utils/prismic";
import type { ProjectDocumentData } from "../../../../.slicemachine/prismicio";

const Index = async ({ params }: { params: { category: string } }) => {
  const { results } = await getProjectsByCategory(params.category);
  return (
    <div className="space-y-4">
      {results.map((project) => {
        if (!project.uid) return null;
        return (
          <ProjectCard
            href={`/projects/${project.uid}`}
            key={project.uid}
            project={project.data as ProjectDocumentData}
          />
        );
      })}
    </div>
  );
};

export default Index;
