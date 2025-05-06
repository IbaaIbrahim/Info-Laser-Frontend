import {Container} from "@/components/shared/Container";
import {ArticleCategories} from "@/components/shared/articles/ArticlesCategories";
import React from "react";
import {cn} from "@/lib/utils";
import {ArticlesCard} from "@/components/shared/articles/ArticlesCard";
import {ArticlesHeader} from "@/components/shared/articles/ArticlesHeader";
import {getCategories, getProducts} from "@/api/api";
import Link from "next/link";
import Image from "next/image";
import {IndividualRequestForm} from "@/components/shared/forms/IndividualRequestForm";
import {SocialAndOnlineMini} from "@/components/shared/banners/SocialAndOnlineMini";

export default async function ArticlesPage() {

  const {products} = await getProducts();
  const categories = await getCategories();

  const data = {
    articles: [
      {
        id: 2,
        name: "Как работает лазерный маркиратор",
        slug: "kak-rabotaet-lazernyy-markirator",
        description: "Сегодня лазерный маркер является самым производительным скоростным типом оборудования",
        date: "14.05.2025",
        image: "/img/articles/articles-main/1.jpg",
        articleCategory: [
          {
            id: 1,
            title: "Инструкции по настройке и эксплуатации лазерного оборудования",
            slug: "instrukcii",
          }
        ]
      },
      {
        id: 3,
        name: "Как работает лазерная очистка",
        slug: "kak-rabotaet-lazernaya-ochistka",
        description: "Описание как работает лазерная очистка",
        date: "08.05.2025",
        image: "/img/articles/articles-main/2.jpg",
        articleCategory: [
          {
            id: 2,
            title: "Как выбрать лазерное оборудование? Преимущества, особенности, недостатки, комплектация",
            slug: "how-chose-laser-equipment",
          }
        ]
      }
    ],
    allArticles: [
      {
        id: 1,
        title: "Инструкции по настройке и эксплуатации лазерного оборудования",
        slug: "instrukcii",
        articles: [
          {
            id: 2,
            name: "Как работает лазерный маркиратор",
            slug: "kak-rabotaet-lazernyy-markirator",
            description: "Сегодня лазерный маркер является самым производительным скоростным типом оборудования",
            date: "14.05.2025",
            image: "/img/articles/articles-main/1.jpg",
            articleCategory: [
              {
                id: 1,
                title: "Инструкции по настройке и эксплуатации лазерного оборудования",
                slug: "instrukcii",
              }
            ]
          }
        ]
      },
      {
        id: 2,
        title: "Как выбрать лазерное оборудование? Преимущества, особенности, недостатки, комплектация",
        slug: "how-chose-laser-equipment",
        articles: [
          {
            id: 3,
            name: "Как работает лазерная очистка",
            slug: "kak-rabotaet-lazernaya-ochistka",
            description: "Описание как работает лазерная очистка",
            date: "08.05.2025",
            image: "/img/articles/articles-main/2.jpg",
            articleCategory: [
              {
                id: 2,
                title: "Как выбрать лазерное оборудование? Преимущества, особенности, недостатки, комплектация",
                slug: "how-chose-laser-equipment",
              }
            ]
          }
        ]
      },
    ],
  };

  return (
    <>
      <section>

        <ArticlesHeader className={"mb-15"} products={products}/>

        <section className={cn("mb-15")}>
          <Container>

            <div className={"max-w-[620px] text-center mx-auto mb-10"}>
              <h2 className={"text-4xl font-semibold"}>
                Руководства, инструкции, обзоры и справочные материалы
              </h2>
            </div>

            <ul className={cn("grid grid-cols-3 gap-5")}>
              {categories.map((category) => (
                <li className={"flex flex-col p-8 bg-[var(--gray)] rounded-4xl"} key={category.id}>
                  <Image
                    src={category.banner_image_url}
                    alt={"#"}
                    width={55}
                    height={55}
                    className={"mb-5"}
                  />

                  <Link
                    href={"#"}
                    className={"text-2xl font-semibold mb-5 hover:text-[var(--violet)] focus:text-[var(--violet)] transition-colors"}
                  >
                    {category.name}
                  </Link>

                  <ul className={cn("flex-1 mb-3")}>
                    {category.products.slice(0, 3).map((product) => (
                      <li
                        key={product.id}
                        className={cn("flex gap-2")}
                      >
                        <Image
                          src={category.banner_image_url}
                          alt={"#"}
                          width={35}
                          height={35}
                          className={"mb-5"}
                        />
                        <Link
                          href={"#"}
                          className={"text-sm hover:text-[var(--violet)] focus:text-[var(--violet)] transition-colors"}
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    className={cn(
                      "self-start inline-flex items-center justify-center text-sm text-[var(--violet)] bg-[var(--violet-dark)] py-2 px-5 rounded-3xl",
                      "hover:bg-[var(--violet)] hover:text-white focus:bg-[var(--violet)] focus:text-white transition-colors",
                    )}
                    href={"#"}
                  >
                    Смотреть все
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <IndividualRequestForm className={"mb-15"}/>

        <SocialAndOnlineMini className={"mb-15"}/>

        <Container className="py-5">
          <div className="grid grid-cols-3 gap-5">

            <div className={"col-span-2"}>
              <h1 className={"text-3xl font-semibold mb-5"}>Все статьи</h1>
              <p>В блог-центре Infolaser вы можете получить базовые знания о лазерной резке и гравировке, ознакомиться с
                экспертными обзорами лазерных станков, вдохновиться идеями лазерной резки и гравировки и т. д. Давайте
                начнем
                учиться прямо сейчас.
              </p>
            </div>

            <ArticleCategories categories={data.allArticles}/>

            <ul className={cn("grid grid-cols-2 col-span-2")}>
              {data.articles.map((article) => (
                <li key={article.id} className={"bg-[var(--gray)] rounded-xl p-3 max-w-[445px]"}>
                  <ArticlesCard {...article}/>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};
