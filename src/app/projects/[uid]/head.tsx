import { SEO } from "components/seo/SEO";
import { getProject } from "utils/prismic";

const Head = async ({ params }: { params: { uid: string } }) => {
  const { project } = await getProject(params.uid);

  if (!project.data.meta_title) return null;

  return <SEO title={project.data.meta_title} />;
};

export default Head;
