import React from "react";
import Image from "next/image";
import {Container} from "@/components/shared/Container";
import {DemoBtn} from "@/components/shared/btns/DemoBtn";

export const DeliveryHeader: React.FC = () => {
  return (
    <header className={"relative min-h-[625px] mb-15"}>
      <Image
        src="/img/delivery/delivery-header-bg.jpg"
        alt="Оплата и доставка"
        fill
        className="absolute object-cover object-center z-0"
        priority
      />

      <Container className={"relative z-30"}>
        <div className={"grid grid-cols-12"}>
          <div className={"col-start-1 col-end-7 py-40"}>
            <h1 className={"text-5xl font-semibold mb-8"}>Оплата и доставка</h1>
            <p>
              Оплата покупки возможна наличными в центральном офисе или безналичным переводом на расчетный счет.
            </p>
            <p className={"mb-5"}>
              При этом мы оформляем все необходимые документы для юридических лиц и госучреждений.
            </p>
            <DemoBtn className={"rounded-3xl"} title={"Заявка на сервис"}/>
          </div>
        </div>
      </Container>
    </header>
  );
};

