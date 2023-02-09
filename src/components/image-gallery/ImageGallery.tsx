"use client";

import clsx from "clsx";
import { useLightbox } from "hooks/use-lightbox";
import type { ProjectProps } from "types/prismic";
import Image from "next/image";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import { Lightbox } from "components/lightbox/Lightbox";
import { getBlurUrl, getImageUrl } from "utils/get-url";

export const ImageGallery = ({
  stills,
}: {
  stills: ProjectProps["stills"];
}) => {
  const { isOpen, toggleOpen, setCurrentImage } = useLightbox();

  const handleOpen = (index: number) => {
    toggleOpen();
    setCurrentImage(index);
  };
  return (
    <div className="grid grid-cols-2">
      {stills.map((still, i) => {
        if (!still.image.url) return null;

        const className = i % 5 === 0 ? "col-span-2" : "col-span-1";

        return (
          <>
            <ScrollObserver
              key={`gallery-${still.image.url}-${i}`}
              className={clsx("bg-black", className)}
            >
              <Image
                onClick={() => handleOpen(i)}
                src={getImageUrl(still.image.url)}
                width={still.image.dimensions.width}
                height={still.image.dimensions.height}
                alt="Project Image"
                loading="lazy"
                placeholder="blur"
                blurDataURL={getBlurUrl(still.image.url)}
                className="mx-auto block cursor-pointer"
              />
            </ScrollObserver>
          </>
        );
      })}
      {isOpen && <Lightbox images={stills} />}
    </div>
  );
};
