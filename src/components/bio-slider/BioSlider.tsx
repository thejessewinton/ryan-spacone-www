"use client";

import { type AboutPage } from "utils/prismic";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import { getImageUrl } from "utils/get-url";
import { useState } from "react";

export const BioSlider = ({
  images,
}: {
  images: AboutPage["data"]["stills"];
}) => {
  const [opacities, setOpacities] = useState<number[]>([]);
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      slides: images.length,
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion,
        );
        setOpacities(new_opacities);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 6000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ],
  );

  return (
    <div ref={ref} className="relative mb-10 h-[500px] overflow-hidden">
      {images && images.length
        ? images.map(({ image }, index) => {
            if (!image || !image.thumbnail || !image.thumbnail.url) return null;
            return (
              <div
                key={image.thumbnail.url}
                className="absolute top-0 h-full w-full duration-1000 ease-linear"
                style={{ opacity: opacities[index] }}
              >
                <Image
                  src={getImageUrl(image.thumbnail.url)}
                  alt={(image.thumbnail.alt as string) || ""}
                  width={image.thumbnail.dimensions.width}
                  height={image.thumbnail.dimensions.height}
                  className="absolute h-full w-full bg-transparent object-cover"
                />
              </div>
            );
          })
        : null}
    </div>
  );
};
