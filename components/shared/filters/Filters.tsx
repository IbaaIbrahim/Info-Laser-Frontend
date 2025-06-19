"use client";

import React, {useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {cn} from "@/lib/utils";
import {Switch} from "@/components/ui/Switch";
import qs from "qs";
import {Input} from "@/components/ui/Input";
import {RangeSlider} from "@/components/ui/Range-slider";
import {useSet} from "react-use";
import {FiltersGroup} from "@/components/shared/filters/FiltersGroup";

interface FiltersProps {
  className?: string;
}

export interface PriceProps {
  priceFrom?: number,
  priceTo?: number
}

export const Filters: React.FC<FiltersProps> = ({className}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [promoChecked, setPromoChecked] = useState(
    Object.fromEntries(searchParams.entries())["filter[label_id]"] === "2"
  );

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setPromoChecked(params["filter[label_id]"] === "2");
  }, [searchParams]);

  const updateFilter = (checked: boolean) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    if (checked) {
      currentParams["filter[label_id]"] = "2";
    } else {
      delete currentParams["filter[label_id]"];
    }
    // При изменении фильтра, сбрасываем страницу на 1
    currentParams["page"] = "1";

    localStorage.setItem("sortingAndFiltersParams", JSON.stringify(currentParams));
    router.replace(`?${qs.stringify(currentParams)}`, {scroll: false});
    setPromoChecked(checked);
  };

  const resetAllFiltersAndSorting = () => {
    localStorage.removeItem("sortingAndFiltersParams");
    const basePath = window.location.pathname;
    router.replace(basePath, {scroll: false});
    setPromoChecked(false);
  };

  // TODO Тут удалить моки (или доработать)
  const materials = [
    {name: 'Бумага', value: 'bumaga'},
    {name: 'Мех', value: 'meh'},
    {name: 'Дерево', value: 'derevo'},
    {name: 'Картон', value: 'karton'},
    {name: 'Камень', value: 'kamen'},
    {name: 'Кожа', value: 'koja'},
    {name: 'Пластик', value: 'plastik'},
    {name: 'Резина', value: 'rezina'}
  ];

  const manufacturer = [
    {name: 'Wattsan', value: 'wattsan'},
    {name: 'Rabbit 15', value: 'rabbit15'},
    {name: 'Zerder', value: 'zwrder'}
  ];

  const [selectedMaterials, {toggle: toggleMaterial}] = useSet(
    new Set(searchParams.get('materials')?.split(',') || [])
  );

  const [selectedManufacturers, {toggle: toggleManufacturer}] = useSet(
    new Set(searchParams.get('manufacturer')?.split(',') || [])
  );

  const [prices, setPrice] = React.useState<PriceProps>({
    priceFrom: searchParams.get('priceFrom') ? Number(searchParams.get('priceFrom')) : undefined,
    priceTo: searchParams.get('priceTo') ? Number(searchParams.get('priceTo')) : undefined,
  });


  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...prices,
      [name]: value,
    });
  };


  return (
    <div className={className}>
      <form className={cn("text-sm bg-[var(--gray)] p-5 rounded-3xl border border-gray-200")}>

        {/* Акция */}
        <fieldset className="flex items-center gap-3 border-b border-b-gray-200 mb-3 pb-3">
          <legend className="contents">
            <label className="block text-sm font-semibold" htmlFor="promo">
              Действует акция:
            </label>
          </legend>
          <Switch
            id="promo"
            checked={promoChecked}
            onCheckedChange={(checked) => updateFilter(checked)}
          />
        </fieldset>

        {/* Цена */}
        <fieldset className="mb-3">
          <legend className="font-semibold mb-3">Цена от и до:</legend>

          <div className="flex gap-3 mb-5">

            <Input
              type="number"
              min={0}
              max={150000}
              placeholder="0"
              value={String(prices.priceFrom)}
              onChange={(e) => updatePrice('priceFrom', Number(e.target.value))}
              className={"rounded-3xl bg-white"}
            />

            <Input
              type="number"
              min={100}
              max={150000}
              placeholder="150000"
              value={String(prices.priceTo)}
              onChange={(e) => updatePrice('priceTo', Number(e.target.value))}
              className={"rounded-3xl bg-white"}
            />
          </div>

          <RangeSlider
            min={0}
            max={150000}
            step={10}
            value={[prices.priceFrom || 0, prices.priceTo || 150000]}
            onValueChange={([priceFrom, priceTo]) => setPrice({priceFrom, priceTo})}
          />
        </fieldset>

        <FiltersGroup
          title={'Материалы обработки'}
          items={materials}
          defaultOpen={true}
          selectedIds={selectedMaterials}
          onClickCheckbox={toggleMaterial}
        />

        <FiltersGroup
          title={'Производитель'}
          items={manufacturer}
          selectedIds={selectedManufacturers}
          onClickCheckbox={toggleManufacturer}
        />

        <button
          type="button"
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-3xl hover:bg-red-600 transition-colors duration-300 hover:cursor-pointer"
          onClick={resetAllFiltersAndSorting}
        >
          Сбросить фильтр
        </button>
      </form>
    </div>
  );
};
