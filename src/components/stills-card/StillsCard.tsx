import { asText } from "@prismicio/helpers";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Image from "next/image";
import Link from "next/link";
import { getBlurUrl, getImageUrl } from "utils/get-url";
import type { StillsSetDocumentData } from "../../../.slicemachine/prismicio";

export const StillsCard = ({
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
          <h2 className="absolute z-10 text-center font-serif text-sm uppercase tracking-[0.75rem] text-white opacity-0 transition-opacity duration-700 after:absolute after:left-0 after:right-8 after:block after:content-[''] group-hover:opacity-100 md:text-3xl md:tracking-[1.725rem]">
            {asText(set.title)}
          </h2>

          <Image
            src={getImageUrl(set.cover.cover.url)}
            width={set.cover.cover.dimensions?.width}
            height={set.cover.cover.dimensions?.height}
            alt={asText(set.title)}
            className="w-full"
            placeholder="blur"
            loading="lazy"
            blurDataURL={getBlurUrl(set.cover.cover.url)}
            quality={75}
          />
        </div>
      </Link>
    </ScrollObserver>
  );
};
