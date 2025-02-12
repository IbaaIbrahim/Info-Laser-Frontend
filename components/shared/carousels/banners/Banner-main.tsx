'use client'

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/Carousel"
import Link from "next/link";
import Image from "next/image";
import {CarouselDots} from "@/components/shared/carousels/Carousel-dots";
import React from "react";
// import Autoplay from "embla-carousel-autoplay";

export const BannerMain = () => {

  return (
    <section className="mb-5">
      <h2 className="hidden">Основные акции и новости компании</h2>
      <Carousel
        className=""
        opts={{
          loop: true,
        }}
        // plugins={[
        //   Autoplay({
        //     delay: 7000,
        //   }),
        // ]}
      >

        <CarouselContent>

          <CarouselItem>
            <Link href="#">
              <Image
                src='/img/main-banner/main-banner-1.webp'
                width={1920}
                height={600}
                alt={'banner-1'}
                className="min-h-[600px]"
              />
            </Link>
          </CarouselItem>

          <CarouselItem>
            <Link href="#">
              <Image
                src='/img/main-banner/main-banner-2.webp'
                width={1920}
                height={600}
                alt={'banner-2'}
                className="min-h-[600px]"
              />
            </Link>
          </CarouselItem>

        </CarouselContent>

        <CarouselPrevious className="left-3"/>

        <CarouselNext className="right-3"/>

        <CarouselDots className="absolute bottom-4 left-0 right-0"/>

      </Carousel>
    </section>

  );
};
