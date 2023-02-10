"use client";

import { useLightbox } from "hooks/use-lightbox";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";
import Image from "next/image";
import { useRef } from "react";
import { useClickOutside } from "hooks/use-click-outside";
import { CloseIcon, LeftArrow } from "components/icons/Icons";
import { getBlurUrl, getImageUrl } from "utils/get-url";
import { useLockBodyScroll } from "hooks/use-lock-body-scroll";

export const Lightbox = ({
  images,
}: {
  images: ProjectDocumentData["stills"];
}) => {
  const { toggleOpen, isOpen, currentImage, setCurrentImage } = useLightbox();
  const ref = useRef<HTMLDivElement>(null);
  useLockBodyScroll(isOpen);

  const handlePrev = () => {
    if (currentImage === 0) {
      toggleOpen();
    }
    setCurrentImage(currentImage - 1);
  };

  const handleNext = () => {
    if (currentImage >= images.length - 1) {
      toggleOpen();
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  useClickOutside(ref, toggleOpen);

  if (!images || !images[currentImage]?.image.url) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <button onClick={toggleOpen} className="absolute right-6 top-6">
        <CloseIcon />
      </button>
      <div className="flex items-center justify-center p-12" ref={ref}>
        {images.map((still, i) => {
          return (
            <Image
              key={i}
              src={getImageUrl(still.image.url as string)}
              placeholder="blur"
              blurDataURL={getBlurUrl(still.image.url as string)}
              alt="Lightbox Image"
              loading="eager"
              className={i === currentImage ? "block" : "hidden"}
              width={still.image.dimensions?.width}
              height={still.image.dimensions?.height}
            />
          );
        })}

        <div className="absolute flex w-full items-center justify-between">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center"
          >
            <LeftArrow className="w-12 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center"
          >
            <LeftArrow className="w-12 rotate-180 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
