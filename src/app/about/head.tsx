import { getAboutPage } from "utils/prismic";

const Head = async () => {
  const { data } = await getAboutPage();

  return <title>{data.meta_title}</title>;
};

export default Head;
