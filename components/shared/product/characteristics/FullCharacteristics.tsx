'use client';

import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {Characteristics, ClassName} from "@/types/types";
import {Button} from "@/components/ui/Button";

interface FullCharacteristicsProps extends ClassName {
  characteristics: Characteristics[];
}

export const FullCharacteristics: React.FC<FullCharacteristicsProps> = (
  {
    className,
    characteristics,
  }) => {
  const [showAllMobile, setShowAllMobile] = useState(false);

  if (!characteristics) return null;

  // Сортируем: сначала is_featured, затем по order
  const sorted = [...characteristics].sort(
    (a, b) =>
      Number(b.is_featured ?? 0) - Number(a.is_featured ?? 0) ||
      Number(a.order ?? 0) - Number(b.order ?? 0)
  );

  // Делим на 2 колонки (для desktop)
  const midpoint = Math.ceil(sorted.length / 2);
  const firstColumn = sorted.slice(0, midpoint);
  const secondColumn = sorted.slice(midpoint);

  return (
    <section
      id="specifications"
      className={cn(
        "col-start-5 col-end-13 bg-[var(--gray)] rounded-3xl p-8",
        "max-md:col-span-full max-md:bg-white max-md:p-0",
        className
      )}
    >
      <h2 className="text-2xl font-semibold mb-5 max-md:text-lg max-md:mb-3">
        Характеристики
      </h2>

      {/* desktop view */}
      <dl className={cn(
        "hidden md:flex gap-x-10 text-sm mb-3",
        "max-md:text-xs max-md:gap-x-0"
      )}
      >
        {[firstColumn, secondColumn].map((column, i) => (
          <div key={i} className="flex-1 space-y-3">
            {column.map((spec, index) => (
              <div key={index} className="flex items-end">
                <dt className={cn(
                  "flex-1 relative overflow-hidden text-[var(--gray-text)] z-30",
                  "after:content-[''] after:absolute after:bottom-1 after:w-[80%] after:h-px after:border-b after:border-dotted after:border-gray-400 after:z-20"
                )}
                >
                  {spec.name}
                </dt>
                <dd className="relative text-right z-30">
                  {spec.value} {spec.unit}
                </dd>
              </div>
            ))}
          </div>
        ))}
      </dl>

      {/* mobile view */}
      <dl className="md:hidden text-xs">
        {/* первые 7 всегда */}
        {sorted.slice(0, 7).map((spec, index) => (
          <div key={index} className="flex items-end mb-3">
            <dt
              className={cn(
                "flex-1 relative overflow-hidden text-[var(--gray-text)] z-30",
                "after:content-[''] after:absolute after:bottom-1 after:w-[80%] after:h-px after:border-b after:border-dotted after:border-gray-400 after:z-20"
              )}
            >
              {spec.name}
            </dt>
            <dd className="relative text-right z-30">
              {spec.value} {spec.unit}
            </dd>
          </div>
        ))}

        {/* контент спойлера */}
        <div
          className={cn(
            "transition-all duration-300 overflow-hidden",
            showAllMobile ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          {sorted.slice(7).map((spec, index) => (
            <div key={index} className="flex items-end mb-3">
              <dt
                className={cn(
                  "flex-1 relative overflow-hidden text-[var(--gray-text)] z-30",
                  "after:content-[''] after:absolute after:bottom-1 after:w-[80%] after:h-px after:border-b after:border-dotted after:border-gray-400 after:z-20"
                )}
              >
                {spec.name}
              </dt>
              <dd className="relative text-right z-30">
                {spec.value} {spec.unit}
              </dd>
            </div>
          ))}
        </div>
      </dl>
      
      {/* кнопка для mobile */}
      {sorted.length > 7 && (
        <div className="md:hidden mt-3">
          <Button
            variant="violetDark"
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="w-full"
          >
            {showAllMobile ? "Скрыть характеристики" : "Показать все характеристики"}
          </Button>
        </div>
      )}
    </section>
  );
};
