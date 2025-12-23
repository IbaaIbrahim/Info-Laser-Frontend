import React from "react";
import {cn} from "@/lib/utils";
import {Characteristics, ClassName} from "@/types/types";
import {Container} from "@/components/shared/Container";
import Image from "next/image";

interface ImportantCharacteristicsProps extends ClassName {
  characteristics: Characteristics[];
}

export const ImportantCharacteristics: React.FC<ImportantCharacteristicsProps> = ({className, characteristics}) => {
  // Фильтруем только характеристики с иконкой
  const characteristicsWithIcons = characteristics.filter(
    (item) => item.icon && item.icon.url
  );

  if (characteristicsWithIcons.length === 0) {
    return null;
  }

  return (
    <section id="specifications" className={cn("", className)}>
      <Container>
        <div className={"bg-[var(--gray)] rounded-3xl p-8 max-md:p-3"}>
          <h2 className={"hidden"}>Важные характеристики</h2>
          <dl className={cn(
            "grid grid-cols-3 gap-5",
            "max-md:grid-cols-2"
          )}>
            {characteristicsWithIcons.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={"w-10 h-10 rounded-full shrink-0 max-md:w-5 max-md:h-5 flex items-center justify-center overflow-hidden"}>
                  {item.icon?.url && (
                    <Image
                      src={item.icon.url}
                      alt={item.icon.name || item.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <div>
                  <dt className={cn(
                    "text-xs text-[var(--gray-text)]",
                    "max-md:text-[10px]"
                  )}>
                    {item.name}
                  </dt>
                  <dd className={cn("max-md:text-xs",)}>
                    {item.value}{item.unit ? ` ${item.unit}` : ""}
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
