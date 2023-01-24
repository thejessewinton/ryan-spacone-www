import { getSiteSettings } from "utils/prismic";

const Head = async () => {
  const settings = await getSiteSettings();

  return <title>{settings.data.meta_title}</title>;
};

export default Head;
