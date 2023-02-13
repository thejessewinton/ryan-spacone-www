import { SEO } from "components/seo/SEO";
import { getStillsSet } from "utils/prismic";

const Head = async ({ params }: { params: { uid: string } }) => {
  const { stillsSet } = await getStillsSet(params.uid);

  if (!stillsSet.data.meta_title) return null;

  return <SEO title={stillsSet.data.meta_title} />;
};

export default Head;
