import React from "react";
import {cn} from "@/lib/utils";
import {Characteristics, ClassName} from "@/types/types";

interface ShortCharacteristicsProps extends ClassName {
  characteristics: Characteristics[];
}

export const ShortCharacteristics: React.FC<ShortCharacteristicsProps> = ({className, characteristics}) => {
  return (
    <>
      {/* Краткие характеристики */}
      {characteristics && (() => {
        // Фильтруем только характеристики с is_featured = 1
        const featured = characteristics.filter(
          (char) => char.is_featured === 1 || char.is_featured === true
        );

        // Сортируем по order
        const sorted = [...featured].sort(
          (a, b) => Number(a.order ?? 0) - Number(b.order ?? 0)
        );

        // Делим на 2 колонки
        const midpoint = Math.ceil(sorted.length / 2);
        const firstColumn = sorted.slice(0, midpoint);
        const secondColumn = sorted.slice(midpoint);

        return (
          <dl className={cn(
            "flex gap-x-10 text-sm mb-3",
            "max-md:text-xs",
            className
          )}>
            {[firstColumn, secondColumn].map((column, i) => (
              <div key={i} className="flex-1 space-y-1">
                {column.map((spec, index) => (
                  <div key={index} className="flex items-end">
                    <dt
                      className={cn(
                        "flex-1 relative overflow-hidden text-[var(--gray-text)] z-30",
                        "after:content-[''] after:absolute after:bottom-1 after:w-[80%] after:h-px after:border-b after:border-dotted after:border-gray-400 after:z-20",
                        spec.is_featured ? "font-bold" : ""
                      )}
                    >
                      {spec.name}
                    </dt>
                    <dd
                      className={cn(
                        "relative bg-white text-right z-30",
                        spec.is_featured ? "font-bold" : ""
                      )}
                    >
                      {spec.value}{spec.unit ? ` ${spec.unit}` : ""}
                    </dd>
                  </div>
                ))}
              </div>
            ))}
          </dl>
        );
      })()}
    </>
  );
}
