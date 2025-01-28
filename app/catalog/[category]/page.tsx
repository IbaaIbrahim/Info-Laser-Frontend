import {Container} from "@/components/shared/Container";
import {Categories} from "@/components/shared/Categories";
import {SortPopup} from "@/components/shared/Sort-popup";
import {Filters} from "@/components/shared/Filters";
import React from "react";
import {ProductsGroupList} from "@/components/shared/Products-group-list";


const Category = ({}) => {
  return (
    <>
      <Container className="pt-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Все категории</h2>
            <Categories/>
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
          <ProductsGroupList/>

        </div>
      </Container>
    </>
  );
};

export default Category;