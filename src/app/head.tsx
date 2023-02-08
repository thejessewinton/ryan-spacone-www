import { SEO } from "components/seo/SEO";
import { getHomePage } from "utils/prismic";

const Head = async () => {
  const { data } = await getHomePage();

  if (!data.meta_title) return null;

  return <SEO title={data.meta_title} />;
};

export default Head;
