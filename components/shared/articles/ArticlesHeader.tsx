"use client"

import React, {useEffect, useRef, useState} from "react";
import {ClassName, Product} from "@/types/types";
import {Container} from "@/components/shared/Container";
import {Search, X} from "lucide-react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {useDebounce} from "react-use";

interface ArticlesHeaderProps extends ClassName {
  products: Product[];
}

export const ArticlesHeader: React.FC<ArticlesHeaderProps> = ({className, products}) => {

  const [filteredArticles, setFilteredArticles] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const closeAndClear = () => {
    setQuery("");
    setFilteredArticles([]);
  };

  const onItemClick = () => {
    closeAndClear();
  };

  // Debounce для запроса
  useDebounce(() => {
    setDebouncedQuery(query);
  }, 300, [query]);

  // Фильтрация продуктов после debounce
  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setFilteredArticles([]);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    setFilteredArticles(filtered);
  }, [debouncedQuery, products]);

  return (
    <header className={cn(
      "bg-[url('/img/articles/articles-bg.jpg')] bg-cover bg-no-repeat min-h-[625px]",
      "max-md:bg-[url('/img/articles/articles-bg-mobile.jpg')]",
      className
    )}>
      <Container>
        <div className={"grid grid-cols-12"}>
          <div className={cn(
            "col-start-1 col-end-7 py-20",
            "max-xl:col-span-full",
            "max-md:py-5"
          )}>
            <div>
              <h1 className={cn(
                "text-5xl font-semibold mb-8",
                "max-xl:text-4xl max-xl:mb-5",
                "max-md:text-3xl max-md:mb-3",
              )}>База знаний</h1>
              <p className={"mb-5 max-md:text-sm max-md:mb-3"}>
                В блог-центре Infolaser вы можете получить базовые знания о лазерной резке и гравировке, ознакомиться
                с экспертными обзорами лазерных станков, вдохновиться идеями лазерной резки и гравировки и т. д.
                Давайте начнем учиться прямо сейчас.
              </p>
            </div>

            <div className={"relative mb-3"}>
              {/* Поле поиска */}
              <form className="relative flex items-center gap-2 z-30">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  placeholder="Найти..."
                  className="w-full bg-gray-100 border border-gray-300 px-3 pr-16 py-2 rounded-3xl outline-none focus:!border-[var(--violet)] max-md:text-sm"
                  onChange={(e) => setQuery(e.target.value)}
                />

                {query && (
                  <button
                    type="button"
                    className="absolute top-1/2 translate-y-[-50%] right-10 p-1 hover:cursor-pointer rounded-md hover:bg-red-400"
                    onClick={() => setQuery("")}
                  >
                    <X size={18}/>
                  </button>
                )}

                <button
                  className="absolute top-1/2 translate-y-[-50%] right-3 p-1 hover:cursor-pointer rounded-md hover:bg-blue-400"
                  type="submit"
                >
                  <Search size={18}/>
                </button>
              </form>

              {/* Результаты поиска */}
              {filteredArticles.length > 0 && (
                <div className={cn('absolute w-full rounded-lg shadow-md max-h-[30dvh] bg-white overflow-y-auto')}>
                  {filteredArticles.map((product) => (
                    <Link
                      className="flex items-center gap-4 hover:bg-[#f2f2f2] p-2 max-md:text-sm"
                      href={`/catalog/${product.categories?.[0]?.slug || "default-category"}/${product.slug}`}
                      key={product.id}
                      onClick={onItemClick}
                    >
                      {product.product_attachments?.map(item =>
                        item?.is_main && item?.filemanager?.url ? (
                          <Image
                            key={item.id}
                            className="size-8"
                            src={item.filemanager.url}
                            alt={item.name}
                            width={32}
                            height={32}
                          />
                        ) : null
                      )}
                      <span className="leading-4">{product.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <ul className={"flex text-sm gap-7 max-md:text-xs max-md:gap-2 max-md:flex-wrap"}>
              <li className={"text-[var(--gray-text)]"}>Популярные запросы</li>
              <li className={"text-[var(--violet)]"}>
                <Link className={"hover:text-[var(--red)] focus:text-[var(--red)] transition-colors"} href={"#"}>
                  Тестовый образец
                </Link>
              </li>
              <li className={"text-[var(--violet)]"}>
                <Link className={"hover:text-[var(--red)] focus:text-[var(--red)] transition-colors"} href={"#"}>
                  Безопасность
                </Link>
              </li>
              <li className={"text-[var(--violet)]"}>
                <Link className={"hover:text-[var(--red)] focus:text-[var(--red)] transition-colors"} href={"#"}>
                  Программное обеспечение
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
}
