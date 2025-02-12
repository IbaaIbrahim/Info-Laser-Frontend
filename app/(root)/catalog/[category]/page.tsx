import {Container} from "@/components/shared/Container";
import {SortPopup} from "@/components/shared/Sort-popup";
import {Filters} from "@/components/shared/filters/Filters";
import React from "react";
import {ProductsGroupList} from "@/components/shared/products/Products-group-list";
import {notFound} from "next/navigation";
import {getCategories, getProductsByCategory} from "@/lib/api";
import {CategoriesMain} from "@/components/shared/categories/Categories-main";
import {CategoryPageProps} from "@/types/category";

const CategoryPage = async ({params}: CategoryPageProps) => {

  const {category} = await params;

  const products = await getProductsByCategory(category);
  const categories = await getCategories();

  if (products.length === 0) {
    notFound();
  }

  return (
    <>
      <Container className="pt-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Все категории</h2>
            <CategoriesMain categories={categories}/>
          </div>

          <SortPopup/>
        </div>
      </Container>

      <Container className="mt-10">

        <div className="flex gap-10">

          {/* Фильтрация */}
          <div>
            <Filters/>
          </div>

          {/* Контент */}
          <ProductsGroupList products={products}/>

        </div>
      </Container>
    </>
  );
};

export default CategoryPage;