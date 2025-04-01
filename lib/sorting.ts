import {Product} from "@/types/types";

export const sortProducts = (products: Product[], orderColumn?: string, orderDir?: "asc" | "desc") => {
  if (!orderColumn) return products;

  return [...products].sort((a, b) => {
    const aValue = a[orderColumn as keyof Product];
    const bValue = b[orderColumn as keyof Product];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return orderDir === "desc" ? bValue - aValue : aValue - bValue;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return orderDir === "desc" ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
    }

    return 0;
  });
};
