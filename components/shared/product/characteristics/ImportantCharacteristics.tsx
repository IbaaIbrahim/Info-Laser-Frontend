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
        <div className={"bg-[var(--gray)] rounded-3xl p-8 max-md:p-3"}>
          <h2 className={"hidden"}>Важные характеристики</h2>
          <dl className={cn(
            "grid grid-cols-3 gap-5",
            "max-md:grid-cols-2"
          )}>
            {characteristics.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={"w-10 h-10 bg-black rounded-full shrink-0 max-md:w-5 max-md:h-5"}>
                  {/*<Image*/}
                  {/*  src={item.image}*/}
                  {/*  alt={"#"}*/}
                  {/*  width={40}*/}
                  {/*  height={40}*/}
                  {/*/>*/}
                </div>
                <div>
                  <dt className={cn(
                    "text-xs text-[var(--gray-text)]",
                    "max-md:text-[10px]"
                  )}>
                    {item.name}
                  </dt>
                  <dd className={cn("max-md:text-xs",)}>
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
