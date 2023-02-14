import { asText } from "@prismicio/helpers";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Image from "next/image";
import Link from "next/link";
import { getBlurUrl, getImageUrl } from "utils/get-url";
import type { StillsSetDocumentData } from "../../../.slicemachine/prismicio";

export const PhotosCard = ({
  href,
  set,
}: {
  href: string;
  set: StillsSetDocumentData;
}) => {
  if (!set.cover.cover.url) return null;

  return (
    <ScrollObserver>
      <Link
        href={href}
        aria-label={asText(set.title)}
        className="cursor-pointer"
      >
        <div className="group relative flex max-h-[300px] items-center justify-center overflow-hidden">
          <h3 className="absolute z-10 mx-auto space-x-4 text-center font-serif text-sm uppercase text-white opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:text-3xl lg:space-x-6">
            {asText(set.title)
              .split("")
              .map((letter, i) => (
                <span key={`${letter}-${i}`}>{letter}</span>
              ))}
          </h3>

          <Image
            src={getImageUrl(set.cover.cover.url)}
            width={set.cover.cover.dimensions?.width}
            height={set.cover.cover.dimensions?.height}
            alt={asText(set.title)}
            className="w-full"
            placeholder="blur"
            blurDataURL={getBlurUrl(set.cover.cover.url)}
            quality={100}
          />
        </div>
      </Link>
    </ScrollObserver>
  );
};
