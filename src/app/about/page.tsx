import { PrismicNextImage } from "@prismicio/next";
import { getAboutPage } from "utils/prismic";

const About = async () => {
  const { data } = await getAboutPage();
  return <div className="mx-auto max-w-4xl"></div>;
};

export default About;
