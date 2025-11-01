import React from 'react';
import {OneProductCategory} from "@/types/types";
import {cn} from '@/lib/utils';
import Link from "next/link";
import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/Carousel";

interface CategoriesGoodsProps {
  categories: OneProductCategory[];
  activeCategory?: string;
  className?: string;
  title?: string;
}

export const CategoriesGoods: React.FC<CategoriesGoodsProps> = async (
  {
    categories,
    className,
    activeCategory,
  }) => {
  return (
    <section>
      <h2 className="hidden">Популярные категории</h2>

      <Carousel className={cn("", className)} opts={{align: "start"}}>
        <CarouselContent className={"max-md:-ml-1"}>
          {categories.map((category) => {
            const isActive = activeCategory === category.slug;

            return (
              <CarouselItem
                key={category.id}
                className={cn(
                  "basis-[16%] w-full",
                  "max-xl:basis-[24%]",
                  "max-md:basis-[80%] max-md:pl-1"
                )}
              >
                <div className="pr-2 h-full">
                  {isActive ? (
                    <div
                      className={cn(
                        "flex items-center h-full gap-x-1 text-sm bg-[var(--gray)] rounded-2xl  leading-4 overflow-hidden py-1 px-3",
                        "text-[var(--violet)]",
                        "border-1 !border-[var(--violet)]"
                      )}
                    >
                      {category.filemanager?.url ? (
                        <Image
                          src={category.filemanager?.url}
                          alt={category.name}
                          width={80}
                          height={80}
                          className="shrink-0 max-w-[80px] mr-1 max-xl:max-w-[65px] max-md:max-w-[40px]"
                        />
                      ) : (
                        <div
                          className="shrink-0 max-w-[80px] bg-gray-200 text-gray-400 text-xs flex items-center justify-center max-xl:max-w-[65px] max-md:max-w-[40px]">
                          нет фото
                        </div>
                      )}

                      {category.name}
                    </div>
                  ) : (
                    <Link
                      href={`/catalog/${category.slug}`}
                      className={cn(
                        "flex items-center h-full gap-x-1 text-sm bg-[var(--gray)] rounded-2xl  leading-4 border-1 !border-gray-100 transition-colors",
                        "overflow-hidden transition-colors py-1 px-3",
                        "hover:text-[var(--violet)]"
                      )}
                    >
                      {category.filemanager?.url ? (
                        <Image
                          src={category.filemanager?.url}
                          alt={category.name}
                          width={80}
                          height={80}
                          className="shrink-0 max-w-[80px] mr-1 max-xl:max-w-[65px] max-md:max-w-[40px]"
                        />
                      ) : (
                        <div
                          className="shrink-0 max-w-[80px] bg-gray-200 text-gray-400 text-xs flex items-center justify-center max-xl:max-w-[65px] max-md:max-w-[40px]">
                          нет фото
                        </div>
                      )}
                      {category.name}
                    </Link>
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="-left-5 max-xl:-left-4 max-md:-left-2"/>
        <CarouselNext className="-right-5 max-xl:-right-4 max-md:-right-2"/>
      </Carousel>
    </section>
  );
};
