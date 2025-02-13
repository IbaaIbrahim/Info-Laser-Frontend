import {Category} from "@/types/category";

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`https://64feeebff8b9eeca9e294f18.mockapi.io/Categories`, {
    next: {revalidate: 60},
  });

  if (!res.ok) {
    throw new Error('Ошибка загрузки категорий');
  }

  return res.json();
}