import { SEO } from "components/seo/SEO";
import { getSiteSettings } from "utils/prismic";

const Head = async () => {
  const { data } = await getSiteSettings();

  if (!data.meta_title || !data.meta_description) return null;

  return <SEO title={data.meta_title} description={data.meta_description} />;
};

export default Head;
