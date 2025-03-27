"use client";

import {createContext, useContext, useState, ReactNode} from "react";
import {useSearchParams} from "next/navigation";

type SortType = "price" | "popularity" | "sale" | null;
type SortDirection = "asc" | "desc";

interface SortingContextProps {
  sortBy: SortType;
  sortDirection: SortDirection;
  setSortBy: (sortType: SortType) => void;
}

const SortingContext = createContext<SortingContextProps | undefined>(undefined);

export const SortingProvider = ({children}: { children: ReactNode }) => {
  const searchParams = useSearchParams();

  // Инициализация из URL
  const initialSortBy = searchParams.get("sortBy") as SortType;
  const initialSortDirection = searchParams.get("sortDirection") as SortDirection || "desc";

  const [sortBy, setSortByState] = useState<SortType>(initialSortBy);
  const [sortDirection, setSortDirection] = useState<SortDirection>(initialSortDirection);

  const setSortBy = (newSortBy: SortType) => {
    if (newSortBy === "sale") {
      setSortByState("sale");
    } else if (sortBy === newSortBy) {
      setSortDirection((prev) => (prev === "desc" ? "asc" : "desc"));
    } else {
      setSortByState(newSortBy);
      setSortDirection("desc");
    }
  };

  return (
    <SortingContext.Provider value={{sortBy, sortDirection, setSortBy}}>
      {children}
    </SortingContext.Provider>
  );
};

export const useSorting = () => {
  const context = useContext(SortingContext);
  if (!context) {
    throw new Error("useSorting must be used within a SortingProvider");
  }
  return context;
};
