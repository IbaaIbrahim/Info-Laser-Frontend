import React from "react";
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/Container";
import {ClassName} from "@/types/types";
import {DemoBtn} from "@/components/shared/btns/DemoBtn";
import Link from "next/link";
import Image from "next/image";
import {UniqButtonLink} from "@/components/ui/UniqButtonLink";

export const PurchaseOrder: React.FC<ClassName> = ({className}) => {
  return (
    <section className={cn("", className)}>
      <Container>
        <h2 className={cn(
          "text-3xl font-semibold text-center mb-10",
          "max-md:text-2xl max-md:mb-5"
        )}>
          Порядок покупки
        </h2>
        <ul className={cn(
          "grid grid-cols-12 gap-5",
          "max-lg:gap-0 max-lg:gap-y-5"
        )}>
          <li className={cn(
            "col-start-1 col-end-5 rounded-3xl overflow-hidden",
            "max-lg:col-span-full",
            "max-md:rounded-[20px]"
          )}>
            <div className={"relative"}>
              <Image
                src={"/img/purchase-order/1.jpg"}
                alt={"Как найти подходящий станок для вашего бизнеса?"}
                width={670}
                height={465}
                className={"w-full h-full object-cover"}
              />
              <div className="absolute bottom-0 left-0 p-5">
                <DemoBtn title="Записаться на демонстрацию"/>
              </div>
            </div>
          </li>
          <li className={cn(
            "col-start-5 col-end-9 rounded-3xl overflow-hidden ",
            "max-lg:col-span-full",
            "max-md:rounded-[20px]"
          )}>
            <div className={"relative"}>
              <Image
                src={"/img/purchase-order/2.jpg"}
                alt={"Заключение договора"}
                width={670}
                height={465}
                className={"w-full h-full object-cover"}
              />
              <div className="absolute bottom-0 left-0 p-5">
                <UniqButtonLink href={"/delivery"} variant={"violetDark"}>Оплата и доставка</UniqButtonLink>
              </div>

            </div>

          </li>
          <li className={cn(
            "col-start-9 col-end-13",
            "max-lg:col-span-full",
            "max-md:rounded-[20px]"
          )}>
            <div className={"rounded-3xl mb-5 overflow-hidden max-md:rounded-[20px]"}>
              <Image
                src={"/img/purchase-order/3.jpg"}
                alt={"Оплата"}
                width={671}
                height={279}
                className={"w-full h-full object-cover"}
              />
            </div>
            <Link
              href={"delivery"}
              className={cn("rounded-3xl max-md:rounded-[20px]")}
            >
              <div className={"rounded-3xl overflow-hidden max-md:rounded-[20px]"}>
                <Image
                  src={"/img/purchase-order/4.jpg"}
                  alt={"Собственная система рассрочки платежей"}
                  width={671}
                  height={156}
                  className={"w-full h-full object-cover"}
                />
              </div>
            </Link>
          </li>
          <li className={cn(
            "col-start-1 col-end-5 rounded-3xl overflow-hidden",
            "max-lg:col-span-full",
            "max-md:rounded-[20px]"
          )}>
            <div className={""}>
              <Image
                src={"/img/purchase-order/5.jpg"}
                alt={"Доставляем по России и СНГ"}
                width={670}
                height={465}
                className={"w-full h-full object-cover"}
              />
            </div>
          </li>
          <li className={cn(
            "col-start-5 col-end-9 rounded-3xl max-md:rounded-[20px] overflow-hidden",
            "max-lg:col-span-full",
            "max-md:rounded-[20px]"
          )}>
            <div className={""}>
              <Image
                src={"/img/purchase-order/6.jpg"}
                alt={"Самовывоз"}
                width={670}
                height={465}
                className={"w-full h-full object-cover"}
              />
            </div>
          </li>
          <li className={cn(
            "col-start-9 col-end-13 rounded-3xl max-md:rounded-[20px] overflow-hidden",
            "max-lg:col-span-full",
            "max-md:rounded-[20px]"
          )}>
            <div className={""}>
              <Image
                src={"/img/purchase-order/7.jpg"}
                alt={"Пусконаладочные работы"}
                width={670}
                height={465}
                className={"w-full h-full object-cover"}
              />
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
