import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {Product} from "@/types/product";
import {Check, Clock3, Star} from "lucide-react";
import {AddToCartButton} from "@/components/shared/btns/Add-to-cart-btn-product";
import {CallbackBtn} from "@/components/shared/btns/Callback-btn";

export const ProductCard: React.FC<Product> = (
  {
    id,
    description,
    newPrice,
    name,
    slug,
    orderPrice,
    inStock,
    isHit,
    stockPrice,
    categorySlug,
    categoryName,
    image,
    className,
    onClick,
  }) => {
  return (
    <div
      className={cn('flex flex-col h-full overflow-hidden bg-[#F8F9FD] border border-gray-200 rounded-3xl p-2', className)}>

      <Link
        className="relative flex justify-center mb-2 overflow-hidden min-h-[220px]"
        href={`/catalog/${categorySlug}/${slug}`}
        onClick={onClick}
      >
        {String(isHit).toLowerCase() === "true" && (
          <span
            className="flex items-center justify-center text-[15px] absolute top-2 left-2 py-1 px-3 rounded-2xl bg-[#A12EFA] text-white z-20">
            хит
          </span>
        )}
        {image && (
          <Image
            className="hover:scale-110 transition-transform z-10"
            src={image.url}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        )}
      </Link>

      <div className="flex flex-col h-full p-3">

        {String(inStock).toLowerCase() === "true" ?
          (
            <span
              className="inline-flex items-center gap-x-1 place-self-start text-sm text-[#4F26E9] bg-[#3E1EB5]/10 rounded-2xl px-2 py-2 mb-3 leading-none">
            <Check className="text-[#4F26E9]" size={12}/>
            В наличии
        </span>
          ) :
          (
            <span
              className="inline-flex items-center gap-x-1 place-self-start text-sm text-[#00A94C] bg-[#00A94C]/10 rounded-2xl px-2 py-2 mb-3 leading-none">
            <Clock3 className='text-[#00A94C]' size={12}/>
            Под заказ
          </span>
          )
        }

        <Link
          className="flex-auto hover:text-[#6941f9] focus:text-[#6941f9] text-[18px] font-semibold transition-colors leading-5 mb-3 block"
          href={`/catalog/${categorySlug}/${slug}`}
          onClick={onClick}
        >
          <h3>{name}</h3>
        </Link>

        <ul className="flex items-center justify-between mb-3">
          <li className="leading-4">
            <span className="block mb-2">Цена без НДС</span>
            <b className={"text-[18px] font-normal"}>{orderPrice}<span className="ml-1">₽</span></b>
          </li>
          <li className="leading-4">
            <span className="block mb-2">Под заказ без НДС</span>
            <b className={"text-[18px] font-normal"}>{stockPrice}<span className="ml-1">₽</span></b>
          </li>
        </ul>

        <CallbackBtn className='mb-2' title={'Заказать'}></CallbackBtn>

        <AddToCartButton
          product={{
            id,
            name,
            slug,
            description,
            newPrice,
            orderPrice,
            stockPrice,
            inStock,
            isHit,
            categorySlug,
            categoryName,
            image
          }}
        />

        <div className={"flex items-center gap-x-5"}>
          <span className="flex items-center justify-center gap-x-1 text-sm text-center leading-none">
            <Star fill="#E99826" strokeWidth={0} size={12}/>
            4.9
        </span>
          <span className="flex items-center justify-center gap-x-1 text-sm text-center leading-none">
          <Check className="text-[#6941f9]" size={12}/>
          Обязательная гарантия 1 год
        </span>
        </div>
      </div>
    </div>
  );
};
