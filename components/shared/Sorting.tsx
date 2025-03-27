"use client";

import {useSearchParams, useRouter} from "next/navigation";
import {useSorting} from "@/context/SortingContext";
import {cn} from "@/lib/utils";
import {ClassName} from "@/types/types";
import React from "react";

export const Sorting: React.FC<ClassName> = ({className}) => {
  const {sortBy, sortDirection, setSortBy} = useSorting();
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSorting = (newSortBy: "price" | "popularity" | "sale") => {
    setSortBy(newSortBy);

    const params = new URLSearchParams(searchParams.toString());

    if (newSortBy === "sale") {
      params.set("sortBy", "sale");
      params.delete("sortDirection");
    } else {
      params.set("sortBy", newSortBy);
      params.set("sortDirection", sortBy === newSortBy ? (sortDirection === "desc" ? "asc" : "desc") : "desc");
    }

    router.push(`?${params.toString()}`, {scroll: false});
  };

  return (
    <div className={cn("flex items-center gap-10 mb-5", className)}>
      <p className="text-gray-400">Сортировать:</p>
      <p
        className={cn("hover:text-[#4F26E9] cursor-pointer", sortBy === "price" && "text-[#4F26E9]")}
        onClick={() => updateSorting("price")}
      >
        По цене {sortBy === "price" ? (sortDirection === "desc" ? "↓" : "↑") : ""}
      </p>
      <p
        className={cn("hover:text-[#4F26E9] cursor-pointer", sortBy === "popularity" && "text-[#4F26E9]")}
        onClick={() => updateSorting("popularity")}
      >
        По популярности {sortBy === "popularity" ? (sortDirection === "desc" ? "↓" : "↑") : ""}
      </p>
      <p
        className={cn("hover:text-[#4F26E9] cursor-pointer", sortBy === "sale" && "text-[#4F26E9]")}
        onClick={() => updateSorting("sale")}
      >
        Действует акция
      </p>
    </div>
  );
};
