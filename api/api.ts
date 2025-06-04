import {Article, Category, Pagination, Product} from "@/types/types";

const GET_CATALOG_DATA = `https://api.infolasers.ru/api/catalog`;
const GET_CATEGORIES = `https://api.infolasers.ru/api/category/getall`;
const GET_PRODUCTS = `https://api.infolasers.ru/api/product/getall`;

// Api получения массива категорий с продуктами, и аксессуаров. (Используется в header > Каталог)
export async function getCatalogData(): Promise<{ product: Category[]; accessory: Category[]; }> {
  const res = await fetch(GET_CATALOG_DATA, {next: {revalidate: 60}});

  if (!res.ok) {
    throw new Error("Ошибка загрузки данных");
  }

  const json = await res.json();

  return {
    product: json.data.categories.product ?? [],
    accessory: json.data.categories.accessory ?? [],
  };
}

// Api получения массива категорий с вложенными продуктами
export async function getCategories(): Promise<Category[]> {
  const res = await fetch(GET_CATEGORIES, {next: {revalidate: 60}});

  if (!res.ok) {
    throw new Error("Ошибка загрузки категорий");
  }

  const json = await res.json();
  return json.data.categories.data;
}

// Api получения массива продуктов с вложенными категориями
export async function getProducts(): Promise<{ products: Product[]; pagination: Pagination }> {
  const res = await fetch(GET_PRODUCTS, {next: {revalidate: 60}});

  if (!res.ok) {
    throw new Error("Ошибка загрузки продуктов");
  }

  const json = await res.json();
  return {
    products: json.data.list ?? [],
    pagination: json.data.pagination ?? [],
  }
}

// Получение одного продукта по slug
export async function getOneProductBySlug(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.products.find((product) => product.slug === slug);
}

// Api получения массива статей с вложенными категориями
export async function getArticles(): Promise<{ articles: Article[] }> {
  return {
    articles: [
      {
        id: 6,
        name: "MAIN MAIN MAIN",
        slug: "main-main-main",
        description: "Сегодня WERT WERT EWRTW ",
        isMain: Boolean(1),
        date: "14.05.2025",
        image: "/img/articles/articles-main/1.jpg",
        articleCategory: [
          {
            id: 1,
            name: "Инструкции по настройке и эксплуатации лазерного оборудования",
            slug: "instrukcii",
          },
        ],
      },
      {
        id: 2,
        name: "Как работает лазерный маркиратор 2",
        slug: "kak-rabotaet-lazernyy-markirator-2",
        description: "Сегодня лазерный маркер является самым производительным скоростным типом оборудования",
        isMain: Boolean(0),
        date: "14.05.2025",
        image: "/img/articles/articles-main/1.jpg",
        articleCategory: [
          {
            id: 1,
            name: "Инструкции по настройке и эксплуатации лазерного оборудования",
            slug: "instrukcii",
          },
        ],
      },
      {
        id: 14,
        name: "Как работает лазерный маркиратор-3",
        slug: "kak-rabotaet-lazernyy-markirator-3",
        description: "Сегодня лазерный маркер является самым производительным скоростным типом оборудования",
        isMain: Boolean(0),
        date: "14.05.2025",
        image: "/img/articles/articles-main/1.jpg",
        articleCategory: [
          {
            id: 1,
            name: "Инструкции по настройке и эксплуатации лазерного оборудования",
            slug: "instrukcii",
          },
        ],
      },
      {
        id: 4,
        name: "rtyrtb fgb fgb fgb ",
        slug: "rtyrtb-fgb-fgb-fgb",
        description: "Сегодня лазерный маркер явлfgdf dfg fdg ",
        isMain: Boolean(0),
        date: "14.05.2025",
        image: "/img/articles/articles-main/1.jpg",
        articleCategory: [
          {
            id: 1,
            name: "Инструкции по настройке и эксплуатации лазерного оборудования",
            slug: "instrukcii",
          },
        ],
      },
      {
        id: 20,
        name: "222222 22222 2 22 2",
        slug: "22",
        description: "Сегодня лазерный маркер явлfgdf dfg fdg ",
        isMain: Boolean(0),
        date: "14.05.2025",
        image: "/img/articles/articles-main/1.jpg",
        articleCategory: [
          {
            id: 1,
            name: "Инструкции по настройке и эксплуатации лазерного оборудования",
            slug: "instrukcii",
          },
        ],
      },
      {
        id: 222,
        name: "33 3 3 3333 333  3 3 ",
        slug: "kak-rabotaet-lazernyy-markirator",
        description: "Сегодня лазерный маркер явлfgdf dfg fdg ",
        isMain: Boolean(0),
        date: "14.05.2025",
        image: "/img/articles/articles-main/1.jpg",
        articleCategory: [
          {
            id: 1,
            name: "Инструкции по настройке и эксплуатации лазерного оборудования",
            slug: "instrukcii",
          },
        ],
      },
      {
        id: 333,
        name: "33 3 33 3 333 3 3 3",
        slug: "33",
        description: "Сегодня лазерный маркер явлfgdf dfg fdg ",
        isMain: Boolean(1),
        date: "14.05.2025",
        image: "/img/articles/articles-main/1.jpg",
        articleCategory: [
          {
            id: 1,
            name: "Инструкции по настройке и эксплуатации лазерного оборудования",
            slug: "instrukcii",
          },
        ],
      },
      {
        id: 444,
        name: "44 4 444 4 4 4444 4 4  ",
        slug: "kak-rabotaet-lazernyy-markirator",
        description: "Сегодня лазерный маркер явлfgdf dfg fdg ",
        isMain: Boolean(0),
        date: "14.05.2025",
        image: "/img/articles/articles-main/1.jpg",
        articleCategory: [
          {
            id: 1,
            name: "Инструкции по настройке и эксплуатации лазерного оборудования",
            slug: "instrukcii",
          },
        ],
      },
      {
        id: 5,
        name: "55 5 5 5 55 5 ",
        slug: "55",
        description: "Сегодня лазерный маркер явлfgdf dfg fdg ",
        isMain: Boolean(0),
        date: "14.05.2025",
        image: "/img/articles/articles-main/1.jpg",
        articleCategory: [
          {
            id: 1,
            name: "Инструкции по настройке и эксплуатации лазерного оборудования",
            slug: "instrukcii",
          },
        ],
      },
      {
        id: 3,
        name: "Как работает лазерная очистка",
        slug: "kak-rabotaet-lazernaya-ochistka",
        description: "Описание как работает лазерная очистка",
        isMain: Boolean(0),
        date: "08.05.2025",
        image: "/img/articles/articles-main/2.jpg",
        articleCategory: [
          {
            id: 2,
            name: "Как выбрать лазерное оборудование? Преимущества, особенности, недостатки, комплектация",
            slug: "how-chose-laser-equipment",
          },
        ],
      },
      {
        id: 13,
        name: "Как работает лазерная очистка-2",
        slug: "kak-rabotaet-lazernaya-ochistka-2",
        description: "Описание как работает лазерная очистка",
        isMain: Boolean(0),
        date: "08.05.2025",
        image: "/img/articles/articles-main/2.jpg",
        articleCategory: [
          {
            id: 2,
            name: "Как выбрать лазерное оборудование? Преимущества, особенности, недостатки, комплектация",
            slug: "how-chose-laser-equipment",
          },
        ],
      },
      {
        id: 8,
        name: "Как работает лазерная очистка-3",
        slug: "kak-rabotaet-lazernaya-ochistka-3",
        description: "Описание как работает лазерная очистка",
        isMain: Boolean(0),
        date: "08.05.2025",
        image: "/img/articles/articles-main/2.jpg",
        articleCategory: [
          {
            id: 2,
            name: "Как выбрать лазерное оборудование? Преимущества, особенности, недостатки, комплектация",
            slug: "how-chose-laser-equipment",
          },
        ],
      },
      {
        id: 9,
        name: "Как работает лазерная очистка-4",
        slug: "kak-rabotaet-lazernaya-ochistka-4",
        description: "Описание как работает лазерная очистка",
        isMain: Boolean(1),
        date: "08.05.2025",
        image: "/img/articles/articles-main/2.jpg",
        articleCategory: [
          {
            id: 2,
            name: "Как выбрать лазерное оборудование? Преимущества, особенности, недостатки, комплектация",
            slug: "how-chose-laser-equipment",
          },
        ],
      }
    ]
  }
}

// Получение одной статьи по slug
export async function getOneArticleBySlug(slug: string): Promise<Article | undefined> {
  const {articles} = await getArticles();
  return articles.find(article => article.slug === slug);
}
