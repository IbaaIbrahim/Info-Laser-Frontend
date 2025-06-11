import React from "react";
import {Container} from "@/components/shared/Container";
import Image from "next/image";
import {CircleCheck} from "lucide-react";
import Map from "@/components/shared/yandex/Map";
import {deliveryLocation, deliveryPlaces, STORAGE_MSK, STORAGE_SPB} from "@/lib/variables";
import {cn} from "@/lib/utils";

export const DeliveryPickup: React.FC = () => {

  return (
    <section className={"mb-10 max-md:mb-5"}>
      <Container>
        <div className={cn(
          "grid grid-cols-12 gap-10 bg-[var(--gray)] rounded-3xl p-8",
          "max-md:p-3 max-md:gap-0 max-md:gap-y-8"
        )}>

          <div className={cn(
            "col-start-1 col-end-7",
            "max-md:col-span-full"
          )}>
            <h2 className={cn(
              "font-semibold text-4xl mb-10",
              "max-xl:text-3xl max-xl:mb-5",
              "max-md:text-2xl max-xl:mb-3",
            )}>Доставка</h2>
            <div className={"mb-10 max-xl:mb-5 max-md:text-sm break-words"}>
              <p className={"mb-5 max-md:mb-3"}>
                При покупке под заказ доставка занимает 60 дней + время доставки по России. Кроме доставки по России мы
                можем привезти ваш станок в страны ближнего зарубежья. Доставка осуществляется транспортными компаниями
                ПЭК, Деловые линии и другими.
              </p>
              <p>
                Конечная стоимость доставки лазерного и фрезерного оборудования зависит от веса и габаритов, подробнее
                уточняйте у наших менеджеров.
              </p>
            </div>
            <ul className={"flex items-center gap-5 max-md:gap-3 max-[350px]:flex-col"}>
              <li>
                <Image
                  className={"max-md:max-w-[140px]"}
                  src={"img/icons/delivery/pek-icon.svg"} alt={"ПЭК"}
                  width={274}
                  height={38}
                />
              </li>
              <li>
                <Image
                  className={"max-md:max-w-[140px]"}
                  src={"img/icons/delivery/delo-icon.svg"} alt={"Деловые линии"}
                  width={276} height={42}
                />
              </li>
            </ul>
          </div>

          <div className={cn(
            "col-start-7 col-end-13",
            "max-md:col-span-full"
          )}>
            <p className={cn(
              "text-2xl font-semibold mb-2",
              "max-xl:text-xl",
              "max-md:text-lg",
            )}>Самовывоз</p>
            <div className={cn(
              "mb-5",
              "max-md:text-sm"
            )}>
              <p className={"mb-3"}>Самовывоз доступен со складов в Москве и Санкт-Петербурге:</p>
              <ul className={"space-y-2"}>
                <li className={"flex gap-2"}>
                  <CircleCheck size={25} className={"text-white fill-[var(--violet)] shrink-0"}/>
                  <span>{STORAGE_MSK}</span>
                </li>
                <li className={"flex gap-2"}>
                  <CircleCheck size={25} className={"text-white fill-[var(--violet)] shrink-0"}/>
                  <span>{STORAGE_SPB}</span>
                </li>
              </ul>
            </div>

            <div className={cn(
              "w-full h-[450px] rounded-3xl overflow-hidden",
              "max-xl:h-[350px]",
              "max-md:h-[250px]"
            )}>
              <Map places={deliveryPlaces} location={deliveryLocation}/>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

