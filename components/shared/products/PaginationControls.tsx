'use client';
import React, {useState, useEffect} from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  basePath: string; // например: /catalog/laser
  query: string; // Строка запроса для параметров сортировки и фильтров
}

export const PaginationControls: React.FC<Props> = ({currentPage, totalPages, basePath, query}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Устанавливаем флаг на клиенте
  }, []);

  const createLink = (page: number) => {
    if (!isClient) return `${basePath}?${query}&page=${page}`; // Возвращаем ссылку без window на сервере

    const url = new URL(basePath, window.location.origin); // Создаем абсолютный URL только на клиенте
    url.search = query; // Добавляем queryString с параметрами
    if (page !== 1) url.searchParams.set("page", page.toString()); // Устанавливаем номер страницы
    return url.toString();
  };

  if (totalPages <= 1) return null;

  const pagesToShow = Array.from({length: totalPages}, (_, i) => i + 1);

  return (
    <Pagination className="mt-6">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={createLink(currentPage - 1)}/>
          </PaginationItem>
        )}
        {pagesToShow.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={createLink(page)}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={createLink(currentPage + 1)}/>
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
