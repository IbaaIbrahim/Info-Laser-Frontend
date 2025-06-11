import React from "react";
import {Container} from "@/components/shared/Container";
import {CircleCheck} from "lucide-react";
import {cn} from "@/lib/utils";

export const PurchaseList: React.FC = () => {
  return (
    <section className={"mb-10"}>
      <Container className={""}>
        <div className={cn(
          "bg-[var(--gray)] rounded-3xl p-8",
          "max-md:p-3"
        )}>
          <h2 className={cn(
            "font-semibold text-4xl mb-5",
            "max-xl:text-3xl",
            "max-md:text-2xl",
          )}>Покупка</h2>
          <ul className={cn(
            "flex gap-10",
            "max-md:flex-col max-md:gap-5"
          )}>
            <li className={cn(
              "flex gap-2",
              "max-md:text-sm"
            )}>
              <CircleCheck size={25} className={"text-white fill-[var(--violet)] shrink-0"}/>
              <div>
                <p className={"font-semibold mb-2"}>Покупка со склада</p>
                <p>
                  При покупке из наличия клиент оплачивает полную стоимость станка. После этого происходит проверка
                  оборудования и передача заказа в исполнение. Мы передаем заказ в доставку или сообщаем о возможности
                  самовывоза.
                </p>
              </div>
            </li>
            <li className={cn(
              "flex gap-2",
              "max-md:text-sm"
            )}>
              <CircleCheck size={25} className={"text-white fill-[var(--violet)] shrink-0"}/>
              <div>
                <p className={"font-semibold mb-2"}>Покупка под заказ</p>
                <p>
                  Доставка оборудования под заказ занимает 60 дней. Клиент вносит предоплату 50%, по прибытие
                  контейнера,
                  оплачиваются остальные 50%. После мы проверяем оборудование и передаем заказ в доставку.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

