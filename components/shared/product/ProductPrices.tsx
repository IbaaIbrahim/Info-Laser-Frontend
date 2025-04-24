import React from "react";
import {cn, formatPrice} from "@/lib/utils";
import {ClassName, Product} from "@/types/types";
import {AddToCartBtnProduct} from "@/components/shared/btns/AddToCartBtnProduct";
import Link from "next/link";
import {PrePurchaseBtn} from "@/components/shared/btns/PrePurchaseBtn";

interface ProductPricesProps extends ClassName {
  product: Product;
}

export const ProductPrices: React.FC<ProductPricesProps> = ({className, product}) => {
  return (

    <div className={cn("flex gap-2 justify-around mb-5", className)}>

      {Boolean(product.inStock) && (
        <>
          <div className={cn("p-5 bg-[var(--gray)] rounded-3xl")}>
            <span className={"text-sm"}>Цена без НДС</span>
            <div className={cn("mb-5")}>
              <b className="text-2xl">
                {formatPrice(product.stockPrice)} ₽
              </b>
            </div>
            <div className={cn("flex gap-2")}>
              <AddToCartBtnProduct
                product={product}
              />

              <Link
                className={cn(
                  "text-[var(--violet)] bg-[var(--violet-dark)] rounded-3xl py-3 px-5 transition-colors",
                  "hover:text-white hover:bg-[var(--violet)]"
                )}
                href={"#"}
              >
                Рассрочка
              </Link>
            </div>
          </div>
        </>
      )}

      <div className={cn("p-5 bg-[var(--gray)] rounded-3xl")}>
        <span className={"block text-sm mb-1"}>Под заказ без НДС</span>
        <div className={cn("flex items-center gap-3 mb-5")}>
          <b className="text-2xl">
            {formatPrice(product.orderPrice)} ₽
          </b>
          {product.labels?.some((label) => label.slug === "in_sale") && (
            <div className={""}>
              <span className="hidden">Акционная цена</span>
              <div className="inline-block bg-black/7 px-2 py-1 rounded-3xl">
                <b className="text-[15px] font-normal line-through">
                  {formatPrice(product.newPrice)} ₽
                </b>
              </div>
            </div>
          )}
        </div>

        <div className={cn("flex gap-2")}>
          <PrePurchaseBtn title={"Предзаказ"}/>
          <Link
            className={cn(
              "text-[var(--violet)] bg-[var(--violet-dark)] rounded-3xl py-3 px-5 transition-colors",
              "hover:text-white hover:bg-[var(--violet)]"
            )}
            href={"#"}
          >
            Рассрочка
          </Link>
        </div>
      </div>
    </div>
  );
}
