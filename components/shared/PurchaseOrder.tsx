import React from "react";
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/Container";
import {ClassName} from "@/types/types";
import {DemoBtn} from "@/components/shared/btns/DemoBtn";
import Link from "next/link";

export const PurchaseOrder: React.FC<ClassName> = ({className}) => {
  return (
    <section className={cn("", className)}>
      <Container>
        <h2 className={cn("text-3xl font-semibold text-center mb-10")}>Порядок покупки</h2>
        <ul className={cn("grid grid-cols-12 gap-5")}>

          <li
            className={"col-start-1 col-end-5 grid grid-cols-12 rounded-3xl bg-[url('/img/purchase-order/1.jpg')] bg-no-repeat bg-cover px-7 pt-7 pb-16"}>
            <div className={"col-start-1 col-end-8"}>
              <p className={"text-xl font-semibold mb-2"}>
                Как найти подходящий станок для вашего бизнеса?
              </p>
              <p className={"text-sm mb-3"}>
                Продемонстрируем работу оборудования любым удобным способом
              </p>
              <DemoBtn className={"rounded-3xl py-5"} title={"Записаться на демонстрацию"}/>
            </div>

          </li>

          <li
            className={"col-start-5 col-end-9 grid grid-cols-12 rounded-3xl bg-[url('/img/purchase-order/2.jpg')] bg-no-repeat bg-cover px-7 pt-7 pb-16"}>
            <div className={"col-start-1 col-end-8"}>
              <p className={"text-xl font-semibold mb-2"}>
                Заключение договора
              </p>
              <p className={"text-sm mb-7"}>
                Согласование комплектации станка и конечной стоимости
              </p>

              <Link
                className={cn(
                  "text-[var(--violet)] bg-[var(--violet-dark)] rounded-3xl py-3 px-5 transition-colors",
                  "hover:text-white hover:bg-[var(--violet)]"
                )}
                href={"/delivery"}
              >
                Оплата и доставка
              </Link>
            </div>

          </li>

          <li className={"col-start-9 col-end-13 rounded-3xl"}>
            <div className={"bg-[var(--gray)] rounded-3xl p-7 mb-5"}>
              <p className={"text-xl font-semibold mb-2"}>
                Оплата
              </p>
              <p className={"text-sm mb-5"}>
                Покупая со склада вносите 100% оплату. Если берёте «под заказ» вносите аванс 50%, а остаток после
                поступления станка на склад.
              </p>
            </div>

            <Link
              href={"#"}
              className={cn("grid grid-cols-12 p-7 bg-[url('/img/purchase-order/3.jpg')] bg-no-repeat bg-cover rounded-3xl font-semibold")}
            >
              <span className={"block col-start-1 col-end-7"}>Собственная система рассрочки платежей</span>
            </Link>
          </li>

          <li
            className={"col-start-1 col-end-5 grid grid-cols-12 rounded-3xl bg-[url('/img/purchase-order/4.jpg')] bg-no-repeat bg-cover px-7 pt-7 pb-16"}>
            <div className={"col-start-1 col-end-8"}>
              <p className={"text-xl font-semibold mb-2"}>
                Доставляем по России и СНГ
              </p>
              <p className={"text-sm mb-5"}>
                Доставляются по России и странам Таможенного союза транспортными компаниями: Деловые линии, ПЭК,
                ЖелДорЭкспедиция, Автотрейдинг.
              </p>
            </div>
          </li>

          <li
            className={"col-start-5 col-end-9 grid grid-cols-12 rounded-3xl bg-[url('/img/purchase-order/5.jpg')] bg-no-repeat bg-cover px-7 pt-7 pb-16"}>
            <div className={"col-start-1 col-end-7"}>
              <p className={"text-xl font-semibold mb-2"}>
                Самовывоз со склада в Москве и СПб
              </p>
              <p className={"text-sm mb-5"}>
                г. Раменское, ул. Михалевича, 49
              </p>
              <p className={"text-sm mb-5"}>
                СПБ, Дальневосточный пр-т, д. 100
              </p>
            </div>

          </li>

          <li
            className={"col-start-9 col-end-13 grid grid-cols-12 rounded-3xl bg-[url('/img/purchase-order/6.jpg')] bg-no-repeat bg-cover px-7 pt-7 pb-16"}>
            <div className={"col-start-1 col-end-8"}>
              <p className={"text-xl font-semibold mb-2"}>
                Пусконаладочные работы
              </p>
              <p className={"text-sm mb-5"}>
                Установка оборудования, настройка СУ, проверка электроники и механических элементов, подключение системы
                безопасности и пробное тестирование
              </p>
            </div>
          </li>

        </ul>
      </Container>
    </section>
  );
}
