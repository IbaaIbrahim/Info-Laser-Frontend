import React from "react";
import {cn, formatPrice} from "@/lib/utils";
import {ClassName} from "@/types/types";
import Link from "next/link";
import Image from "next/image";

// interface NecessaryProductsList extends ClassName {
//   // characteristics: Characteristics[];
// }

export const NecessaryProductsList: React.FC<ClassName> = ({className}) => {

  const data = [
    {
      id: 1,
      name: "Чиллер CW-5000TG/TI",
      image_url: "https://infolaser.ru/assets/images/products/65/big/1290-duos-2.jpg",
      price: 64260,
      slug: "chiller-cw-5000tg-ti",
    },
    {
      id: 2,
      name: "Чиллер CW-5000TG/TI",
      image_url: "https://infolaser.ru/assets/images/products/65/big/1290-duos-2.jpg",
      price: 64260,
      slug: "chiller-cw-5000tg-ti",
    },
    {
      id: 3,
      name: "Чиллер CW-5000TG/TI",
      image_url: "https://infolaser.ru/assets/images/products/65/big/1290-duos-2.jpg",
      price: 64260,
      slug: "chiller-cw-5000tg-ti",
    }
  ]

  return (
    <div className={cn("", className)}>
      <p className={"font-semibold mb-3"}>
        Вам может понадобиться
        <span className={"text-[var(--gray-text)] text-sm ml-2"}>{data.length}</span>
      </p>
      <ul className={"space-y-2"}>
        {data.map((item) => (
          <li
            className={cn("border border-[var(--gray)] rounded-3xl p-3 flex justify-between items-center")}
            key={item.id}>

            <Link
              className={cn(
                "flex items-center gap-3 text-sm transition-colors duration-300",
                "hover:text-[var(--violet)] focus:text-[var(--violet)]"
              )}
              href={`/products/${item.slug}`}
            >
              <Image
                src={item.image_url}
                width={42}
                height={42}
                alt={item.name}
              />
              {item.name}
            </Link>

            <div className={"flex items-center gap-3"}>
              <b>{formatPrice(item.price)} ₽</b>
              {/*<AddToCartBtn product={item}/>*/}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
