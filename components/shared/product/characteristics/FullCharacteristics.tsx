import React from "react";
import {cn} from "@/lib/utils";
import {Characteristics, ClassName} from "@/types/types";

interface FullCharacteristicsProps extends ClassName {
  characteristics: Characteristics[];
}

export const FullCharacteristics: React.FC<FullCharacteristicsProps> = ({className, characteristics}) => {
  return (

    <section
      id="specifications"
      className={cn("col-start-5 col-end-13 bg-[var(--gray)] rounded-3xl p-8", className)}
    >
      <h2 className={"text-2xl font-semibold mb-5"}>Характеристики</h2>
      {characteristics && (() => {
        // Сортируем: сначала is_featured, затем по order
        const sorted = [...characteristics].sort(
          (a, b) =>
            Number(b.is_featured ?? 0) - Number(a.is_featured ?? 0) ||
            Number(a.order ?? 0) - Number(b.order ?? 0)
        );

        // Делим на 2 колонки
        const midpoint = Math.ceil(sorted.length / 2);
        const firstColumn = sorted.slice(0, midpoint);
        const secondColumn = sorted.slice(midpoint);

        return (
          <dl className="flex gap-x-10 text-sm mb-3">
            {[firstColumn, secondColumn].map((column, i) => (
              <div key={i} className="flex-1 space-y-3">
                {column.map((spec, index) => (
                  <div key={index} className="flex items-end">
                    <dt
                      className={cn(
                        "flex-1 relative overflow-hidden text-[var(--gray-text)] z-30",
                        "after:content-[''] after:absolute after:bottom-1 after:w-[80%] after:h-px after:border-b after:border-dotted after:border-gray-400 after:z-20",
                      )}
                    >
                      {spec.name}
                    </dt>
                    <dd className={cn("relative text-right z-30",)}>
                      {spec.value} {spec.unit}
                    </dd>
                  </div>
                ))}
              </div>
            ))}
          </dl>
        );
      })()}
    </section>
  );
}
