'use client'

import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/Carousel"
import Image from "next/image";
import {CarouselDots} from "@/components/shared/carousels/CarouselDots";
import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface BannerProductProps {
  className?: string
}

export const BannerProduct: React.FC<BannerProductProps> = ({className}) => {

  const data = [
    {
      id: 1,
      name: 'banner-1',
      img_url: '/img/banners/product-banner/1.jpg',
      width: 695,
      height: 330
    },
    {
      id: 2,
      name: 'banner-2',
      img_url: '/img/banners/product-banner/1.jpg',
      width: 695,
      height: 330
    },
    {
      id: 3,
      name: 'banner-2',
      img_url: '/img/banners/product-banner/1.jpg',
      width: 695,
      height: 330
    }
  ]

  return (
    <section className={className}>
      <h2 className="hidden">Основные акции и новости компании</h2>

      <div className="group relative">
        <Carousel
          className=""
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {data.map((item) => (
              <CarouselItem key={item.id}>
                <Link className="block overflow-hidden rounded-3xl" href="#">
                  <Image
                    src={item.img_url}
                    width={item.width}
                    height={item.height}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={cn(
              "left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              "max-md:opacity-100"
            )}
          />
          <CarouselNext
            className={cn(
              "right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              "max-md:opacity-100"
            )}
          />

          <CarouselDots className="absolute bottom-4 left-0 right-0"/>
        </Carousel>
      </div>
    </section>
  );
};
