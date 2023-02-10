import { asHTML, asLink, asText } from "@prismicio/helpers";
import { getAboutPage } from "utils/prismic";
import Image from "next/image";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import type { AboutDocumentData } from "../../../.slicemachine/prismicio";
import Link from "next/link";
import { getImageUrl } from "utils/get-url";

const Links = ({ links }: { links: AboutDocumentData["links"] }) => {
  return (
    <div className="mt-16 mb-8 grid grid-cols-3 gap-3">
      {links.map((item) => (
        <div
          key={item.label}
          className="group overflow-hidden border border-neutral-200 px-6 py-4"
        >
          <Link href={asLink(item.link) as string}>
            <Image
              src={getImageUrl(item.icon.url as string)}
              width={item.icon.dimensions?.width}
              height={item.icon.dimensions?.height}
              alt="Project Image"
              className="mx-auto transition-transform duration-700 group-hover:scale-105"
              quality={100}
            />
            <span className="sr-only">{item.label}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

const Representation = ({
  representation,
}: {
  representation: AboutDocumentData["representation"];
}) => {
  return (
    <div className="mt-16 mb-8 block text-center font-light">
      <h2 className="mb-8 font-serif text-2xl">Representation</h2>
      <div className="mb-4 flex flex-col flex-wrap items-center justify-center gap-8 md:flex-row md:gap-20">
        {representation.map((rep) => (
          <div key={rep.title}>
            <h3 className="mb-2 font-serif">{rep.title}</h3>
            <div className="mb-4 text-sm">
              {asText(rep.details, "\n\n")
                .split("\n\n")
                .map((line) => (
                  <div className="mb-1 block" key={line}>
                    {line}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

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
          className="mb-8 mt-8 w-full"
          placeholder="blur"
          quality={100}
          blurDataURL={`${data.image.url as string}&blur=200`}
        />

        <div
          className="mb-8 block text-sm font-light"
          dangerouslySetInnerHTML={{ __html: asHTML(data.bio) }}
        />

        {data.links && data.links.length ? <Links links={data.links} /> : null}

        {data.representation && data.representation.length ? (
          <Representation representation={data.representation} />
        ) : null}
      </ScrollObserver>
    </div>
  );
};

export default About;
