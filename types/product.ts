import {Image} from "@/types/types";
import {Category} from "@/types/category";

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  orderPrice: number;
  stockPrice: number;
  newPrice: number;
  category: Category;
  image: Image;
}