import React from "react";
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/Container";
import {ClassName} from "@/types/types";
import {DemoBtn} from "@/components/shared/btns/DemoBtn";

export const ProductGeneralAccessoriesBanner: React.FC<ClassName> = ({className}) => {
  return (
    <div className={cn("", className)}>
      <Container>
        <div
          className={cn(
            "grid grid-cols-12 bg-[var(--gray)] bg-[url('/img/product/accessory.jpg')] bg-cover bg-no-repeat bg-right rounded-3xl px-10 py-20",
            "max-md:bg-[url('/img/product/accessory-mobile.jpg')] max-md:px-5 max-md:py-5 max-md:rounded-[20px]"
          )}>
          <div
            className={cn(
              "col-start-1 col-end-7",
              "max-xl:bg-white/70 max-xl:rounded-3xl max-xl:p-2 ",
              "max-md:col-span-full max-md:rounded-[20px]"
            )}
          >

            <p className={cn("text-2xl font-semibold mb-5 max-md:text-xl")}>
              Все станки Wattsan изготавливаются из легко заменяемых и общедоступных комплектующих
            </p>

            <p className={cn("text-sm max-md:text-xs")}>
              Легко заменяемых и общедоступных комплектующих можно всегда найти в любой стране. Это позволяет
              значительно уменьшить простои в любой форс-мажорной ситуации. А сервисная служба Wattsan оперативно
              подскажет в чем конкретно может быть неисправность и при необходимости направит лучших инженеров вам на
              помощь.
            </p>

            <DemoBtn title={"Техническая поддержка"} className={cn("mt-5")}/>
          </div>
        </div>
      </Container>
    </div>
  );
}
