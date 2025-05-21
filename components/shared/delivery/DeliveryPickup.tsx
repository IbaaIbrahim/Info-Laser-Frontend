import React from "react";
import {Container} from "@/components/shared/Container";
import Image from "next/image";
import {CircleCheck} from "lucide-react";
import Map from "@/components/shared/yandex/Map";
import {deliveryLocation, deliveryPlaces} from "@/lib/variables";

export const DeliveryPickup: React.FC = () => {

  return (
    <section className={"mb-10"}>
      <Container>
        <div className={"grid grid-cols-12 gap-10 bg-[var(--gray)] rounded-3xl p-8"}>

          <div className={"col-start-1 col-end-7"}>
            <h2 className={"font-semibold text-4xl mb-10"}>Доставка</h2>
            <div className={"mb-10"}>
              <p className={"mb-5"}>
                При покупке под заказ доставка занимает 60 дней + время доставки по России. Кроме доставки по России мы
                можем привезти ваш станок в страны ближнего зарубежья. Доставка осуществляется транспортными компаниями
                ПЭК, Деловые линии и другими.
              </p>
              <p>
                Конечная стоимость доставки лазерного и фрезерного оборудования зависит от веса и габаритов, подробнее
                уточняйте у наших менеджеров.
              </p>
            </div>
            <ul className={"flex items-center gap-5"}>
              <li>
                <Image src={"img/icons/delivery/pek-icon.svg"} alt={""} width={274} height={38}/>
              </li>
              <li>
                <Image src={"img/icons/delivery/delo-icon.svg"} alt={""} width={276} height={42}/>
              </li>
            </ul>
          </div>

          <div className={"col-start-7 col-end-13"}>
            <p className={"text-2xl font-semibold mb-2"}>Самовывоз</p>
            <div className={"mb-5"}>
              <p className={"mb-3"}>Самовывоз доступен со складов в Москве и Санкт-Петербурге:</p>
              <ul className={"space-y-2"}>
                <li className={"flex gap-2"}>
                  <CircleCheck size={25} className={"text-white fill-[var(--violet)] shrink-0"}/>
                  <span>140101, г. Раменское, ул. Михалевича, 49</span>
                </li>
                <li className={"flex gap-2"}>
                  <CircleCheck size={25} className={"text-white fill-[var(--violet)] shrink-0"}/>
                  <span>195213, г. Санкт-Петербург, Дальневосточный проспект, д. 100</span>
                </li>
              </ul>
            </div>

            <div className={"w-full h-[450px] rounded-3xl overflow-hidden"}>
              <Map places={deliveryPlaces} location={deliveryLocation}/>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

