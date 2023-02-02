import { asText } from "@prismicio/helpers";
import Image from "next/image";
import Link from "next/link";
import type { PhotoSetDocumentData } from "../../../.slicemachine/prismicio";

export const PhotosCard = ({
  href,
  set,
}: {
  href: string;
  set: PhotoSetDocumentData;
}) => {
  if (!set.cover.url) return null;
  return (
    <div className="group max-h-[300px] overflow-hidden">
      <Link href={href} aria-label={asText(set.title)}>
        <Image
          src={set.cover.url}
          width={set.cover.dimensions?.width}
          height={set.cover.dimensions?.height}
          alt="Project Image"
          className="w-full transition-transform duration-700 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={`${set.cover.url}&blur=200`}
        />
        <span className="sr-only">{asText(set.title)}</span>
      </Link>
    </div>
  );
};
