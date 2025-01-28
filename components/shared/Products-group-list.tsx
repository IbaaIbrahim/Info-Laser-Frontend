import {cn} from "@/lib/utils";
import {ProductCard} from "@/components/shared/Product-card";
import React from "react";
import {Product} from "@/types/product";

async function getProducts(): Promise<Product[]> {
  const response = await fetch(`https://64feeebff8b9eeca9e294f18.mockapi.io/Products`, {
    next: {revalidate: 60},
  });

  if (!response.ok) {
    throw new Error('Ошибка загрузки категорий');
  }

  return response.json();
}

export const ProductsGroupList = async () => {
  const products = await getProducts();

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">Вы выбрали: {products[0].category.name} </h1>

      <ul className={cn('grid grid-cols-5 gap-[20px]')}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            slug={product.slug}
            stockPrice={product.stockPrice}
            orderPrice={product.orderPrice}
            category={product.category}
            image={product.image}
            description={""}
            newPrice={0}
          />
        ))}
      </ul>
    </section>
  );
};
