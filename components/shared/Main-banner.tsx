'use client'

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/Carousel"
import Link from "next/link";
import Image from "next/image";
import {CarouselDots} from "@/components/shared/Carousel-dots";
import React from "react";


export const MainBanner = () => {

  return (
    <Carousel
      className="max-w-[1000px] mx-auto rounded-2xl"
      opts={{
        loop: true,
      }}
      plugins={[
        // Autoplay({
        // delay: 5000,
        // }),
      ]}
    >

      <CarouselContent>

        <CarouselItem>
          <Link href="#">
            <Image src='/img/main-banner/main-banner-2-1440x585.png'
                   width={1440}
                   height={585}
                   alt={'logo'}
            />
          </Link>
        </CarouselItem>

        <CarouselItem>
          <Link href="#">
            <Image src='/img/main-banner/main-banner-1-1440x585.png'
                   width={1440}
                   height={585}
                   alt={'logo'}
            />
          </Link>
        </CarouselItem>

        <CarouselItem>
          <Link href="#">
            <Image src='/img/main-banner/main-banner-3-1440x585.png'
                   width={1440}
                   height={585}
                   alt={'logo'}
            />
          </Link>
        </CarouselItem>

      </CarouselContent>

      <CarouselPrevious className="left-3 bg-white border-gray-600 shadow-sm shadow-black"/>

      <CarouselNext className="right-3 bg-white border-gray-600 shadow-sm shadow-black"/>

      <CarouselDots className="absolute bottom-4 left-0 right-0"/>

    </Carousel>
  );
};
