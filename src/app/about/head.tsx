import { SEO } from "components/seo/SEO";
import { getAboutPage } from "utils/prismic";

const Head = async () => {
  const { data } = await getAboutPage();

  if (!data.meta_title) return null;

  return <SEO title={data.meta_title} />;
};

export default Head;
