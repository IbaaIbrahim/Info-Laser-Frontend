import React from "react";
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/Container";
import {ClassName} from "@/types/types";
import {DemoBtn} from "@/components/shared/btns/DemoBtn";
import Image from "next/image";

export const ProductBenefitBanner: React.FC<ClassName> = ({className}) => {
  return (
    <div className={cn("", className)}>
      <Container>
        <div className={cn("grid grid-cols-12 bg-[var(--gray)] rounded-3xl overflow-hidden")}>
          <div className={cn("col-start-1 col-end-7")}>
            <Image
              src={"/img/product/benefit.jpg"}
              alt={"Пусконаладочные работы"}
              width={1061}
              height={705}
              className={"w-full h-full object-cover rounded-3xl"}
            />
          </div>
          <div className={cn("col-start-7 col-end-13 place-content-center px-13")}>
            <p className={cn("text-2xl font-semibold mb-5")}>
              Блок для преимущества оборудования с картинкой и текстом
            </p>

            <p className={cn("text-sm")}>
              Легко заменяемых и общедоступных комплектующих можно всегда найти в любой стране. Это позволяет
              значительно уменьшить простои в любой форс-мажорной ситуации. А сервисная служба Wattsan оперативно
              подскажет в чем конкретно может быть неисправность и при необходимости направит лучших инженеров вам на
              помощь.
            </p>

            <DemoBtn title={"Написать нам"} className={cn("rounded-3xl mt-5 py-6")}/>
          </div>
        </div>
      </Container>
    </div>
  );
}
