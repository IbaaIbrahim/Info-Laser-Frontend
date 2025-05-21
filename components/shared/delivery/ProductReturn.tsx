import React from "react";
import {Container} from "@/components/shared/Container";
import Image from "next/image";
import {CircleCheck, Phone} from "lucide-react";
import {cn} from "@/lib/utils";
import {ClassName} from "@/types/types";
import {DemoBtn} from "@/components/shared/btns/DemoBtn";
import Link from "next/link";

type Item = {
  id: number
  text: string
}

type ProductReturnData = {
  first_list: Item[];
  second_list: Item[];
};

interface ProductReturnProps extends ClassName {
  data: ProductReturnData;
}

export const ProductReturn: React.FC<ProductReturnProps> = ({className, data}) => {

  return (
    <section className={"mb-10"}>
      <Container>
        <div className={cn("bg-[var(--gray)] p-3 rounded-3xl", className)}>
          <header className={"relative h-[330px] rounded-3xl overflow-hidden mb-5"}>
            <Image
              src={"/img/delivery/delivery-product-return.jpg"}
              fill
              alt={"Возврат товара и гарантийные обязательства"}
            />
          </header>
          <div className={"px-5 mb-10"}>
            <h2 className={"text-4xl font-semibold mb-10"}>Возврат товара и гарантийные обязательства</h2>
            <p className={"mb-5"}>
              Технически сложное оборудование, такое как лазерные станки, резаки и граверы для металлов и неметаллов,
              лазерные маркеры (далее по тексту — Лазерные станки) надлежащего качества обмену и возврату не подлежит.
              На все Лазерные станки предоставляется гарантия 1 год.
            </p>
            <ul className="space-y-2 mb-8">
              {data.first_list.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <CircleCheck size={20} className={"text-white fill-[var(--violet)] shrink-0"}/>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
            <p className={"text-xl mb-5"}>
              Время ремонта зависит от сложности неисправности.
              Но мы обязательно постараемся выполнить его в самые короткие сроки.
            </p>
            <ol className="space-y-3 mb-5">
              {data.second_list.map((item, index) => (
                <li key={item.id} className="flex items-start gap-3">
                  <div
                    className="min-w-[18px] min-h-[18px] flex items-center justify-center bg-[var(--violet)] text-white font-bold rounded-full text-xs shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-sm">{item.text}</p>
                </li>
              ))}
            </ol>
            <p className={"text-xl mb-5"}>
              В том случае, если вам пришел Лазерный станок ненадлежащего качества, вы можете его вернуть нам.
            </p>
            <p className={"mb-5"}>
              После того, как мы убедимся, что мы поставили вам Лазерный станок действительно ненадлежащего качества, мы
              возвращаем вам деньги, либо аналогичный Лазерный станок надлежащего качества.
            </p>
            <p>
              Возврат Лазерного станка ненадлежащего качества осуществляется за ваш счет.
            </p>
          </div>
          <div className={"grid grid-cols-12 gap-2"}>
            <div className={"col-start-1 col-end-7 bg-white p-5 rounded-3xl"}>
              <p className={"text-xl font-semibold mb-5"}>
                Обратиться в тех. поддержку
              </p>
              <p className={"mb-5"}>
                По вопросу ремонта Лазерных станков вы можете обращаться в Техническую поддержку компании Infolaser или
                к вашему персональному менеджеру.
              </p>
              <div className={"flex items-center gap-8"}>
                <DemoBtn title={"Написать в тех. поддержку"} className={"rounded-3xl py-5"}/>
                <Link
                  href="tel:88002222741"
                  className="flex items-center gap-x-2 hover:text-[var(--violet)] font-semibold transition-colors"
                >
                  <Phone size={18}/>
                  8 (800) 222-27-41
                </Link>
              </div>
            </div>
            <div className={"col-start-7 col-end-13 bg-white p-5 rounded-3xl"}>
              <p className={"text-xl font-semibold mb-5"}>
                Отправить на ремонт
              </p>
              <p className={"mb-5"}>
                Лазерные станки ненадлежащего качества мы принимаем на оценку на нашем складе по адресу 140101, Россия,
                г. Раменское, ул. Михалевича, 49.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

