import { SEO } from "components/seo/SEO";
import { getProject } from "utils/prismic";

const Head = async ({ params }: { params: { uid: string } }) => {
  const { data } = await getProject(params.uid);

  if (!data.meta_title || !data.meta_description) return null;

  return <SEO title={data.meta_title} description={data.meta_description} />;
};

export default Head;
