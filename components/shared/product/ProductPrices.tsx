import React from "react";
import {cn, formatPrice} from "@/lib/utils";
import {ClassName, Product} from "@/types/types";
import {AddToCartBtnProduct} from "@/components/shared/btns/AddToCartBtnProduct";
import {PrePurchaseBtn} from "@/components/shared/btns/PrePurchaseBtn";
import {UniqButtonLink} from "@/components/ui/UniqButtonLink";

interface ProductPricesProps extends ClassName {
  product: Product;
}

export const ProductPrices: React.FC<ProductPricesProps> = ({className, product}) => {
  return (

    <div className={cn(
      "flex gap-2 justify-around mb-5",
      "max-md:flex-col",
      className
    )}>

      {Boolean(product.inStock) && (
        <>
          <div className={cn(
            "p-5 bg-[var(--gray)] rounded-3xl",
            "max-[1340px]:p-3"
          )}>
            <div className={cn("mb-5 max-md:flex max-md:gap-x-2 max-md:items-center max-md:mb-3")}>
              <span className={"text-sm max-md:text-xs"}>Цена без НДС</span>
              <b className="block text-3xl max-md:text-2xl">
                {formatPrice(product.stockPrice)} ₽
              </b>
            </div>

            <div className={cn(
              "flex gap-2",
            )}>
              <AddToCartBtnProduct
                product={product}
              />

              <UniqButtonLink href="#" variant="violetDark">
                Рассрочка
              </UniqButtonLink>
            </div>
          </div>
        </>
      )}

      <div className={cn(
        "p-5 bg-[var(--gray)] rounded-3xl",
        "max-[1340px]:p-3"
      )}>
        <div className={cn("mb-5 max-md:flex max-md:gap-x-2 max-md:items-center max-md:mb-3")}>
          <span className={"block text-sm mb-1 max-md:text-xs"}>Под заказ без НДС</span>
          <div className={cn("flex items-center gap-3 shrink-0")}>
            <b className="text-2xl">
              {formatPrice(product.orderPrice)} ₽
            </b>
            {product.labels?.some((label) => label.slug === "in_sale") && (
              <div>
                <span className="hidden">Акционная цена</span>
                <div className="flex items-center bg-black/7 px-2 py-1 rounded-3xl">
                  <b className="text-sm font-normal line-through max-md:text-xs">
                    {formatPrice(product.newPrice)} ₽
                  </b>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={cn("flex gap-2")}>
          <PrePurchaseBtn>Предзаказ</PrePurchaseBtn>
          <UniqButtonLink href="#" variant="violetDark">
            Рассрочка
          </UniqButtonLink>
        </div>
      </div>
    </div>
  );
}
