"use client";

import clsx from "clsx";
import { useLightbox } from "hooks/use-lightbox";
import type { StillsSetProps } from "types/prismic";
import Image from "next/image";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import { Lightbox } from "components/lightbox/Lightbox";
import { getBlurUrl, getImageUrl } from "utils/get-url";

export const MasonryGallery = ({
  stills,
}: {
  stills: StillsSetProps["stills"];
}) => {
  const { isOpen, toggleOpen, setCurrentImage } = useLightbox();

  const handleOpen = (index: number) => {
    toggleOpen();
    setCurrentImage(index);
  };
  return (
    <>
      {stills.map((still, i) => {
        if (!still.image.url) return null;

        const className = i % 5 === 0 ? "col-span-2" : "col-span-1";

        return (
          <>
            <ScrollObserver
              key={i}
              className={clsx("bg-neutral-900", className)}
              initial="translate-y-[50px] opacity-0"
              whileInView="translate-y-0 opacity-100"
            >
              <Image
                onClick={() => handleOpen(i)}
                src={getImageUrl(still.image.url)}
                width={still.image.dimensions.width}
                height={still.image.dimensions.height}
                alt="Project Image"
                placeholder="blur"
                quality={100}
                blurDataURL={getBlurUrl(still.image.url)}
                className="mb-2 block w-full cursor-pointer"
              />
            </ScrollObserver>
          </>
        );
      })}
      {isOpen && <Lightbox images={stills} />}
    </>
  );
};
