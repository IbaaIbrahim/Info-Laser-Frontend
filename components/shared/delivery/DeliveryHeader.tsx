import React from "react";
import {Container} from "@/components/shared/Container";
import {cn} from "@/lib/utils";

export const DeliveryHeader: React.FC = () => {
  return (
    <header className={cn(
      "relative min-h-[625px] mb-15 bg-[url('/img/delivery/delivery-header-bg.jpg')] bg-no-repeat bg-cover",
      "max-md:bg-[url('/img/delivery/delivery-header-bg-mobile.jpg')] max-md:mb-10",
    )}>
      <Container className={"relative z-30"}>
        <div className={"grid grid-cols-12"}>
          <div className={cn(
            "col-start-1 col-end-7 py-40",
            "max-md:col-span-full max-md:py-5"
          )}>
            <h1
              className={cn(
                "text-5xl font-semibold mb-8",
                "max-xl:text-4xl max-xl:mb-5",
                "max-md:text-3xl max-md:mb-3",
              )}
            >
              Оплата и доставка
            </h1>
            <p className={"max-md:text-sm"}>
              Оплата покупки возможна наличными в центральном офисе или безналичным переводом на расчетный счет.
            </p>
            <p className={"mb-5 max-md:text-sm"}>
              При этом мы оформляем все необходимые документы для юридических лиц и госучреждений.
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};

