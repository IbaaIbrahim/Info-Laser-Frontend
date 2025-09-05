'use client'

import React from "react";
import {Container} from "@/components/shared/Container";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/Carousel";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {CarouselDots} from "@/components/shared/carousels/CarouselDots";

type ChooseLaserMachineSliderProps = {
  className?: string
};

export const ChooseLaserMachineSlider: React.FC<ChooseLaserMachineSliderProps> = ({className}) => {

  const data = [
    {
      id: 1,
      name: 'banner-1',
      img_url: '/img/product/slider/choose-machine/1.jpg',
      width: 668,
      height: 600
    },
    {
      id: 2,
      name: 'banner-2',
      img_url: '/img/product/slider/choose-machine/2.jpg',
      width: 668,
      height: 600
    },
    {
      id: 3,
      name: 'banner-3',
      img_url: '/img/product/slider/choose-machine/3.jpg',
      width: 668,
      height: 600
    },
    {
      id: 4,
      name: 'banner-1',
      img_url: '/img/product/slider/choose-machine/1.jpg',
      width: 668,
      height: 600
    }
  ]

  return (
    <section className={cn(
      "pt-15 pb-22 bg-[var(--gray)] overflow-hidden",
      "max-md:pt-7 max-md:pb-15",
      className
    )}>
      <Container>
        <h2 className={cn(
          "text-4xl font-bold text-center mb-5",
          "max-xl:text-3xl",
          "max-md:text-2xl"
        )}>
          Почему стоит выбрать лазерный станок?
        </h2>
        <Carousel className={cn("[&>div]:overflow-visible")} opts={{align: "start"}}>
          <CarouselContent className="-ml-5 max-md:-ml-2">
            {data.map((item) => (
              <CarouselItem
                key={item.id}
                className={cn(
                  "basis-[calc(100%/2.8)] pl-5",
                  "max-xl:basis-[calc(100%/2.3)]",
                  "max-md:basis-[calc(100%/1.2)] max-md:pl-2"
                )}
              >
                <div className="block overflow-hidden rounded-3xl">
                  <Image
                    src={item.img_url}
                    width={item.width}
                    height={item.height}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={cn(
            '-left-[40px]',
            "max-xl:left-[20px]",
            "max-md:left-[10px]",
            className
          )}/>
          <CarouselNext className={cn(
            '-right-[40px]',
            "max-xl:right-[20px]",
            "max-md:right-[10px]",
            className
          )}/>
          <CarouselDots className="absolute -bottom-13 left-0 right-0 max-md:-bottom-10"/>
        </Carousel>
      </Container>
    </section>
  );
};
