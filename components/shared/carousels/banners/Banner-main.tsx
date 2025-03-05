'use client'

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/Carousel"
import Image from "next/image";
import {CarouselDots} from "@/components/shared/carousels/Carousel-dots";
import React from "react";
import {DemoBtn} from "@/components/shared/btns/Demo-btn";
import Autoplay from "embla-carousel-autoplay";

export const BannerMain = () => {

  return (
    <section className="mb-5">
      <h2 className="hidden">Основные акции и новости компании</h2>
      <Carousel
        className=""
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >

        <CarouselContent>

          <CarouselItem>
            <DemoBtn title={""} className={"absolute w-full h-full bg-inherit/0 hover:bg-inherit/0"}/>
            <Image
              src='/img/main-banner/main-banner-1.jpg'
              width={1920}
              height={600}
              alt={'banner-2'}
              className="max-h-[600px]"
            />
          </CarouselItem>

          <CarouselItem>
            <DemoBtn title={""} className={"absolute w-full h-full bg-inherit/0 hover:bg-inherit/0"}/>
            <Image
              src='/img/main-banner/main-banner-1.jpg'
              width={1920}
              height={600}
              alt={'banner-2'}
              className="max-h-[600px]"
            />

          </CarouselItem>

        </CarouselContent>

        <CarouselPrevious className="left-3"/>

        <CarouselNext className="right-3"/>

        <CarouselDots className="absolute bottom-4 left-0 right-0"/>

      </Carousel>
    </section>

  );
};
