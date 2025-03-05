"use client";

import React, {useState, useEffect, useCallback} from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {ThumbButton} from "@/components/shared/carousels/Product/Thumb-button";

interface ProductGalleryProps {
  images: { url: string; alt: string; type?: "image" | "video"; thumbnail?: string }[];
}

export const ProductGallerySlider: React.FC<ProductGalleryProps> = ({images}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({loop: true});
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
    onSelect();
  }, [emblaMainApi, onSelect]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi]
  );

  return (
    <div className="flex flex-col gap-4 max-w-[650px]">
      <div className="flex gap-4">
        {/* Миниатюры */}
        <div ref={emblaThumbsRef}>
          <div className="flex flex-col gap-2">
            {images.map((image, idx) => (
              <ThumbButton
                key={idx}
                index={idx}
                onClick={() => onThumbClick(idx)}
                selected={idx === selectedIndex}
                image={image}
              />
            ))}
          </div>
        </div>

        {/* Основной слайдер */}
        <div className="overflow-hidden" ref={emblaMainRef}>
          <div className="flex">
            {images.map((image, idx) => (
              <div className="min-w-full flex justify-center bg-gray-300 rounded-lg p-3" key={idx}>
                {image.type === "video" ? (
                  <video className="w-full max-w-2xl rounded-lg" controls autoPlay src={image.url}/>
                ) : (
                  <Image src={image.url} alt={image.alt} width={450} height={350}/>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};