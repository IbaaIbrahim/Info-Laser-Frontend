import React from "react";
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/Container";
import {ClassName} from "@/types/types";
import {DemoBtn} from "@/components/shared/btns/DemoBtn";
import Link from "next/link";
import Image from "next/image";

export const PurchaseOrder: React.FC<ClassName> = ({className}) => {
  return (
    <section className={cn("", className)}>
      <Container>
        <h2 className={cn("text-3xl font-semibold text-center mb-10")}>Порядок покупки</h2>
        <ul className={cn("grid grid-cols-12 gap-5")}>

          <li className={"relative col-start-1 col-end-5 rounded-3xl overflow-hidden"}>
            <div className={""}>
              <Image
                src={"/img/purchase-order/1.jpg"}
                alt={"Как найти подходящий станок для вашего бизнеса?"}
                width={670}
                height={465}
                className={"w-full h-full object-cover"}
              />
              <DemoBtn className={"absolute bottom-10 left-5 rounded-3xl py-5"} title={"Записаться на демонстрацию"}/>
            </div>
          </li>
          <li className={"col-start-5 col-end-9 rounded-3xl overflow-hidden"}>
            <div className={"relative"}>
              <Image
                src={"/img/purchase-order/2.jpg"}
                alt={"Заключение договора"}
                width={670}
                height={465}
                className={"w-full h-full object-cover"}
              />
              <Link
                className={cn(
                  "absolute bottom-35 left-5 text-[var(--violet)] bg-[var(--violet-dark)] rounded-3xl py-3 px-5 transition-colors",
                  "hover:text-white hover:bg-[var(--violet)]"
                )}
                href={"/delivery"}
              >
                Оплата и доставка
              </Link>
            </div>

          </li>
          <li className={"col-start-9 col-end-13"}>
            <div className={"rounded-3xl mb-5 overflow-hidden"}>
              <Image
                src={"/img/purchase-order/3.jpg"}
                alt={"Оплата"}
                width={671}
                height={279}
                className={"w-full h-full object-cover"}
              />
            </div>

            <Link
              href={"#"}
              className={cn("rounded-3xl")}
            >
              <div className={"rounded-3xl overflow-hidden"}>
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
          <li className={"col-start-1 col-end-5 rounded-3xl overflow-hidden"}>
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
          <li className={"col-start-5 col-end-9 rounded-3xl overflow-hidden"}>
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
          <li className={"col-start-9 col-end-13 rounded-3xl overflow-hidden"}>
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
