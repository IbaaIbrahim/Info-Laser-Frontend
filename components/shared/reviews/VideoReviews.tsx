"use client";

import {Container} from "@/components/shared/Container";
import {cn} from "@/lib/utils";
import React from "react";
import {ClassName} from "@/types/types";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/Carousel";
import {CarouselDots} from "@/components/shared/carousels/CarouselDots";
import {ReviewsVideo} from "@/components/shared/reviews/ReviewsVideo";

export interface VideoReview {
  id: number;
  videoId?: string;
  author: string;
  date: string;
}

export const VideoReviews: React.FC<ClassName> = ({className}) => {

  const data: VideoReview[] = [
    {
      id: 1,
      videoId: 'Iti9VKIcKV4',
      author: 'Евгений Коренев',
      date: '12 мая 2024'
    },
    {
      id: 2,
      videoId: 'WG-BXo8PZSw',
      author: 'Евгений Коренев',
      date: '12 мая 2024'
    },
    {
      id: 3,
      videoId: 'LjwEKSYQoO8',
      author: 'Евгений Коренев',
      date: '12 мая 2024'
    },
    {
      id: 4,
      videoId: 'Iti9VKIcKV4',
      author: 'Евгений Коренев',
      date: '12 мая 2024'
    }
  ]

  return (
    <section className={cn("bg-[var(--gray)] py-20 mb-10", className)}>
      <Container>
        <h2 className={cn(
          "text-4xl font-semibold mb-10",
        )}
        >
          Видео отзывы
        </h2>

        <Carousel className={cn("")} opts={{align: "start"}}>
          <CarouselContent className="-ml-5">
            {data.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/3 pl-5"
              >
                <div className="block bg-white p-3 overflow-hidden rounded-3xl">
                  <ReviewsVideo video={item}/>
                  <div className={"flex justify-between px-4"}>
                    <p className={"font-semibold"}>{item.author}</p>
                    <p className={"text-sm text-[var(--gray-text)]"}>{item.date}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className={cn('-left-[40px]', className)}/>
          <CarouselNext className={cn('-right-[40px]', className)}/>

          <CarouselDots className="absolute -bottom-13 left-0 right-0"/>

        </Carousel>
      </Container>
    </section>
  );
};
