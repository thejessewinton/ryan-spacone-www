import { LeftArrow } from "components/icons/Icons";
import { ProjectCard } from "components/project-card/ProjectCard";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Link from "next/link";
import { getHomePage } from "utils/prismic";

const CategoryNav = () => {
  return (
    <ScrollObserver>
      <div className="my-12 grid h-24 grid-cols-2 overflow-hidden md:my-24">
        <Link
          href={"/category/narrative"}
          className="group flex items-center justify-center gap-4 text-lg"
        >
          <h3 className="font-serif text-sm uppercase italic group-hover:text-brand">
            Narrative
          </h3>
        </Link>

        <Link
          href={"/category/commercial"}
          className="group flex items-center justify-center gap-4 text-lg"
        >
          <h3 className="font-serif text-sm uppercase italic group-hover:text-brand">
            Commercial
          </h3>
        </Link>
      </div>
    </ScrollObserver>
  );
};

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
      <CategoryNav />
    </div>
  );
};

export default Index;
