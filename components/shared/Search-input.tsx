'use client'
import {useClickAway} from 'react-use';
import {Search, X} from "lucide-react";
import React, {useEffect, useRef, useState} from "react";
import {cn} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {getAllProducts} from "@/lib/api";
import {Product} from "@/types/product";

export const SearchInput = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const data: Product[] = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [query, products]);

  const onItemClick = () => {
    setQuery('');
    setFilteredProducts([])
  }

  return (
    <>
      {open && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30"></div>}

      <div className="relative z-30">
        <form className="flex items-center gap-2 z-30">
          <input
            ref={ref}
            type="text"
            value={query}
            placeholder="Например, лазерный станок..."
            className="w-full bg-gray-100 border border-gray-300 px-3 pr-16 py-2 rounded-xl outline-none focus:border-[#6941f9]"
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setOpen(true)}
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

        {filteredProducts.length > 0 && (
          <div
            className={cn(
              'absolute bg-white rounded-xl top-12 shadow-md transition-all duration-300 opacity-0 invisible overflow-hidden',
              open && 'opacity-100 visible top-14'
            )}
          >
            {filteredProducts.map((product) => (
              <Link
                className="flex items-center gap-4 hover:bg-[#f2f2f2] p-2"
                href={`/catalog/${product.categorySlug}/${product.slug}`}
                key={product.id}
                onClick={onItemClick}
              >
                {product.images?.length ? (
                  <Image
                    className="h-8 w-8"
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    width={product.images[0].width}
                    height={product.images[0].height}
                  />
                ) : null}
                <span className="leading-4">
                  {product.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
