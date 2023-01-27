import { SEO } from "components/seo/SEO";
import { getCategory } from "utils/prismic";

const Head = async ({ params }: { params: { category: string } }) => {
  const { data } = await getCategory(params.category);

  if (!data.meta_title || !data.meta_description) return null;

  return <SEO title={data.meta_title} description={data.meta_description} />;
};

export default Head;
