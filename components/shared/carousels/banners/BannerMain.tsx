'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/Carousel"
import Image from "next/image";
import { CarouselDots } from "@/components/shared/carousels/CarouselDots";
import React from "react";
import { DemoBtn } from "@/components/shared/btns/DemoBtn";
import { cn } from "@/lib/utils";
import HeroSlider from "@/types/content/home/hero-slider";
// import Autoplay from "embla-carousel-autoplay";

export const BannerMain = ({ sliders }: { sliders: HeroSlider[] }) => {

  // const staticData = [
  //   {
  //     id: 1,
  //     mainTitle: 'banner-1',
  //     mainImg: '/img/banners/main-banner/main-banner.jpg',
  //     width: 1920,
  //     height: 600,
  //     img_url_mobile: '/img/banners/main-banner/main-banner-mobile.jpg',
  //     width_mobile: 642,
  //     height_mobile: 900
  //   },
  //   {
  //     id: 2,
  //     mainTitle: 'banner-2',
  //     mainImg: '/img/banners/main-banner/main-banner.jpg',
  //     width: 1920,
  //     height: 600,
  //     img_url_mobile: '/img/banners/main-banner/main-banner-mobile.jpg',
  //     width_mobile: 642,
  //     height_mobile: 900
  //   }
  // ]

  const width = 1920;
  const height = 600;
  const width_mobile = 642;
  const height_mobile = 900;

  const data = sliders

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
      //     delay: 3000,
      //   }),
      // ]}
      >
        <CarouselContent>
          {data.map((item) => {
            return (
              <CarouselItem key={item.id}>
                <DemoBtn
                  title={""}
                  className={cn(
                    "absolute w-full h-full bg-inherit/0 hover:bg-inherit/0 focus:bg-inherit/0 hover:shadow-none focus:shadow-none",
                    "hover:bg-inherit/0 focus:bg-inherit/0 hover:shadow-none focus:shadow-none hover:border-0 focus:border-0 focus:outline-none"
                  )}
                />
                <Image
                  src={item.mainImg ?? ''}
                  width={width}
                  height={height}
                  alt={item.mainTitle ?? ''}
                  className="max-h-[600px] w-full object-cover max-[650px]:hidden"
                />
                <Image
                  src={item.mainImg ?? ''}
                  width={width_mobile}
                  height={height_mobile}
                  alt={item.mainTitle ?? ''}
                  className="max-h-[600px] w-full object-fill min-[650px]:hidden"
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselPrevious className="left-3" />
        <CarouselNext className="right-3" />
        <CarouselDots className="absolute bottom-4 left-0 right-0" />
      </Carousel>
    </section>
  );
};
