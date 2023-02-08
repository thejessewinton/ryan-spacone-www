import { SEO } from "components/seo/SEO";
import { getCategory } from "utils/prismic";

const Head = async ({ params }: { params: { category: string } }) => {
  const { data } = await getCategory(params.category);

  if (!data.meta_title) return null;

  return <SEO title={data.meta_title} />;
};

export default Head;
