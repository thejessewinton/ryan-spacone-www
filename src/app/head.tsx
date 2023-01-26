import { getSiteSettings } from "utils/prismic";

const Head = async () => {
  const { data } = await getSiteSettings();

  return <title>{data.meta_title}</title>;
};

export default Head;
