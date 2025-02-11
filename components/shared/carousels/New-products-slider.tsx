import {Container} from "@/components/shared/Container";
import {getAllProducts} from "@/lib/api";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/Carousel";
import React from "react";
import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/products/Product-card";
import {ClassName} from "@/types/types";

export const NewProductsSlider: React.FC<ClassName> = async ({className}) => {
  const products = await getAllProducts();

  return (
    <section className={cn('', className)}>
      <Container>
        <h2 className={cn("text-2xl font-bold text-center mb-5")}>Новинки оборудования InfoLaser</h2>

        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="py-5 -ml-10">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-1/1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-10"
              >
                <ProductCard
                  id={product.id}
                  name={product.name}
                  slug={product.slug}
                  stockPrice={product.stockPrice}
                  orderPrice={product.orderPrice}
                  categorySlug={product.categorySlug}
                  categoryName={product.categoryName}
                  description={product.description}
                  newPrice={0}
                  image={product.images?.[0]}
                  inStock={product.inStock}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className={cn('-left-[40px]', className)}/>
          <CarouselNext className={cn('-right-[40px]', className)}/>
        </Carousel>
      </Container>
    </section>

  );
};
