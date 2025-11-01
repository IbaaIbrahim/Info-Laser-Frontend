import {Container} from "@/components/shared/Container";
import {Filters} from "@/components/shared/filters/Filters";
import {ProductsGroupList} from "@/components/shared/products/ProductsGroupList";
import {getProducts} from "@/api/api";
import {CategoriesGoods} from "@/components/shared/categories/CategoriesGoods";
import {Sorting} from "@/components/shared/sorting/Sorting";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {BannerCategory} from "@/components/shared/carousels/banners/BannerCategory";
import {sortProducts} from "@/lib/sorting";
import React from "react";
import {PaginationControls} from "@/components/shared/products/PaginationControls";
import qs from "qs";
import {getTranslations} from "next-intl/server";
import {CircleCheck} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{
    page?: string;
    order_column?: string;
    order_dir?: "asc" | "desc";
    "filter[label_id]"?: string;
  }>;
}

const test_data = {
  data_first: [
    {
      id: 1,
      text: "Промышленная: маркировка продукции в условиях промышленного производства. Нанесение на изделия даты выпуска, номера партии, штрих-кода и т. д."
    },
    {
      id: 2,
      text: "Рекламная: маркировка сувениров, табличек, номерков и канцелярских принадлежностей."
    }
  ],
  data_second: [
    {
      id: 1,
      text: "Бесконтактный процесс нанесения. Изделие не требует фиксации во время обработки;"
    },
    {
      id: 2,
      text: "Качественное нанесение миниатюрной информации. Обеспечивает гарантированное считывание знаков, штрих кодов, текстовой и графической информации;"
    },
    {
      id: 3,
      text: "Функция регулирования скорости перемещения луча, частоты следования импульса и мощности лазерного излучения;"
    }
  ],
};

export async function generateMetadata({params: paramsPromise}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const {locale, category} = await paramsPromise;
  const t = await getTranslations({locale});
  const allProducts = await getProducts();

  const uniqueCategories = Array.from(
    new Map(
      allProducts.products.flatMap((product) =>
        product.categories.map((cat) => [cat.id, cat])
      )
    ).values()
  );

  const currentCategory = uniqueCategories.find(cat => cat.slug === category);

  return {
    title: currentCategory?.name
      ? `${currentCategory.name} ${t('addName')}`
      : t("catalogMetaTitle"),
    description: currentCategory?.description || "",
  };
}

const CategoryPage = async ({params, searchParams}: CategoryPageProps) => {
  const allProducts = await getProducts();
  const {category} = await params;

  const t = await getTranslations();
  const sp = await searchParams;
  const order_column = sp.order_column || "";
  const order_dir = sp.order_dir === "asc" || sp.order_dir === "desc" ? sp.order_dir : undefined;
  const filterLabelId = sp["filter[label_id]"] || "";
  const page = parseInt(sp.page || "1", 10);
  const itemsPerPage = 18;

  const currentParams = {
    ...sp,
    page: undefined,
  };
  const queryString = qs.stringify(currentParams, {encode: false});

  const uniqueCategories = Array.from(
    new Map(
      allProducts.products.flatMap((product) =>
        product.categories.map((cat) => [cat.id, cat])
      )
    ).values()
  );

  const currentCategory = uniqueCategories.find((cat) => cat.slug === category);

  let filteredProducts = currentCategory?.id
    ? allProducts.products.filter((product) =>
      product.category_ids.includes(currentCategory.id!)
    )
    : [];

  filteredProducts = sortProducts(filteredProducts, order_column, order_dir, filterLabelId);

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <>
      <section
        className={cn(
          "bg-[url('/img/category/bg.jpg')] bg-no-repeat bg-cover py-3 mb-3"
        )}
      >
        <Container className={"flex items-center gap-x-5 max-md:flex-col max-md:items-start max-md:gap-y-3"}>
          <div className={"basis-1/2"}>
            <h1 className={cn(
              "text-5xl mb-1",
              "max-xl:text-4xl",
              "max-md:text-3xl",
            )}>
              {currentCategory?.name} {t('addName')}
            </h1>
            <p className={"text-sm"}>{currentCategory?.description} {t('addName')}</p>
          </div>

          {currentCategory?.filemanager?.url ? (
            <Image
              src={currentCategory.filemanager?.url}
              alt={currentCategory.name ?? "Изображение категории"}
              width={400}
              height={250}
              className={"basis-1/2 max-w-[400px] max-md:max-w-full"}
            />
          ) : (
            <div
              className="max-w-[400px] bg-gray-200 text-gray-400 text-xs flex items-center justify-center max-md:max-w-full">
              нет фото
            </div>
          )}
        </Container>
      </section>

      <section>
        <Container>
          <CategoriesGoods
            className="py-5 max-md:py-2"
            categories={uniqueCategories}
            activeCategory={currentCategory?.slug}
          />

          <Sorting
            className="py-3 mb-5 max-lg:mb-0"
            currentSort={{
              order_column,
              order_dir,
            }}
          />

          <div className={cn(
            "flex gap-x-5",
            "max-lg:flex-col max-lg:gap-x-0 max-lg:gap-y-3"
          )}>
            <aside className={cn("flex-0 min-w-[280px]")}>
              <Filters className="mb-3 max-md:mb-0"/>
              <BannerCategory className={"max-lg:hidden"}/>
            </aside>

            <div className="flex-1">
              <ProductsGroupList className="mb-3" products={paginatedProducts}/>

              <PaginationControls
                currentPage={page}
                totalPages={totalPages}
                basePath={`/catalog/${category}`}
                query={queryString}
              />
              <section>
                <h2 className={cn(
                  "text-4xl font-semibold mb-7",
                  "max-xl:text-3xl max-xl:mb-5",
                  "max-md:text-2xl",
                )}>
                  Особенности лазерных волоконных маркеров по металлу
                </h2>

                <p className="font-semibold mb-3">Лазерная гравировка делится на два типа:</p>
                <ol className="space-y-3 mb-7">
                  {test_data.data_first.map((item, index) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <div
                        className="min-w-[25px] min-h-[25px] flex items-center justify-center bg-[var(--violet)]/40 text-white font-bold rounded-full text-xs shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm">{item.text}</p>
                    </li>
                  ))}
                </ol>

                <p className="font-semibold mb-3">Преимущества лазерной гравировки металлов при помощи маркиратора:</p>
                <ul className="space-y-3">
                  {test_data.data_second.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                      <CircleCheck size={20} className={"text-white fill-[var(--violet)]/30 shrink-0"}/>
                      <p className={"text-sm"}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CategoryPage;
