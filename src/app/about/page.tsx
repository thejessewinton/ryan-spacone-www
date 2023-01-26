import { asText } from "@prismicio/helpers";
import { getAboutPage } from "utils/prismic";
import Image from "next/image";

const About = async () => {
  const { data } = await getAboutPage();
  return (
    <div className="mx-auto max-w-4xl">
      <Image
        src={data.image.url as string}
        width={data.image.dimensions?.width}
        height={data.image.dimensions?.height}
        alt="Project Image"
        className="mb-8 w-full"
        placeholder="blur"
        blurDataURL={`${data.image.url as string}&blur=200`}
      />
      {asText(data.bio, "\n\n")}
    </div>
  );
};

export default About;
