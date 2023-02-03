import { asText } from "@prismicio/helpers";
import { getAboutPage } from "utils/prismic";
import Image from "next/image";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";

const About = async () => {
  const { data } = await getAboutPage();
  return (
    <div className="mx-auto max-w-4xl">
      <ScrollObserver>
        <Image
          src={data.image.url as string}
          width={data.image.dimensions?.width}
          height={data.image.dimensions?.height}
          alt="Project Image"
          className="mb-8 w-full"
          placeholder="blur"
          blurDataURL={`${data.image.url as string}&blur=200`}
        />
        {asText(data.bio, "\n\n")
          .split("\n\n")
          .map((line) => (
            <div className="mb-8 block" key={line}>
              {line}
            </div>
          ))}
      </ScrollObserver>
    </div>
  );
};

export default About;
