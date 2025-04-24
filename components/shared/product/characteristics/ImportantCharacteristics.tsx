import React from "react";
import {cn} from "@/lib/utils";
import {Characteristics, ClassName} from "@/types/types";
import {Container} from "@/components/shared/Container";

interface ImportantCharacteristicsProps extends ClassName {
  characteristics: Characteristics[];
}

export const ImportantCharacteristics: React.FC<ImportantCharacteristicsProps> = ({className, characteristics}) => {
  return (

    <section id="specifications" className={cn("", className)}>
      <Container>
        <div className={"bg-[var(--gray)] rounded-3xl p-8"}>
          <h2 className={"hidden"}>Важные характеристики</h2>
          <dl className="grid grid-cols-3 gap-5">
            {characteristics.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={"w-10 h-10 bg-black rounded-full"}>
                  {/*<Image*/}
                  {/*  src={item.image}*/}
                  {/*  alt={"#"}*/}
                  {/*  width={40}*/}
                  {/*  height={40}*/}
                  {/*/>*/}
                </div>
                <div className="">
                  <dt className={cn("text-[var(--gray-text)]")}>
                    {item.name}
                  </dt>
                  <dd className={cn("",)}>
                    {item.value} {item.unit}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
