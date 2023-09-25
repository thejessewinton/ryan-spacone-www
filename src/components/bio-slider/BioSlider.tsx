"use client";

import { type AboutPage } from "utils/prismic";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

export const BioSlider = ({
  images,
}: {
  images: AboutPage["data"]["images"];
}) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <div ref={ref} className="keen-slider">
      {images && images.length
        ? images.map(({ image }, index) => {
            return (
              <div key={index} className="keen-slider__slide">
                <Image
                  src={image.url as string}
                  width={image.dimensions?.width}
                  height={image.dimensions?.height}
                  alt="Bio Image"
                  className="mb-8 mt-8 w-full"
                  placeholder="blur"
                  quality={100}
                  blurDataURL={`${image.url as string}&blur=200`}
                />
              </div>
            );
          })
        : null}
    </div>
  );
};
