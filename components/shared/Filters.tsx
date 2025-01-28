import React from 'react';
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/Input";
import {RangeSlider} from "@/components/ui/Range-slider";
import {CheckboxFilterGroup} from "@/components/shared/Checkbox-filter-group";
import {ClassName} from "@/types/types";

export const Filters: React.FC<ClassName> = ({className}) => {
  return (
    <form
      className={cn('w-[250px] shadow-md shadow-md p-5 rounded-xl border border-gray-200', className)}>
      <h2 className="mb-5 font-semibold">Фильтрация</h2>

      <fieldset className="mb-3">
        <legend className="font-semibold mb-3">Цена от и до:</legend>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            min={0}
            max={150000}
            placeholder="0"
            defaultValue={0}
          />
          <Input
            type="number"
            min={100}
            max={150000}
            placeholder="150000"
          />
        </div>
        <RangeSlider min={0} max={150000} step={10} value={[0, 150000]}/>
      </fieldset>

      <CheckboxFilterGroup
        title="Материалы обработки"
        className="mt-5"
        items={[
          {
            text: 'Бумага',
            value: '1',
          },
          {
            text: 'Мех',
            value: '2',
          },
          {
            text: 'Дерево',
            value: '3',
          },
          {
            text: 'Картон',
            value: '4',
          },
          {
            text: 'Камень',
            value: '5',
          },
          {
            text: 'Кожа',
            value: '6',
          },
          {
            text: 'Пластик',
            value: '7',
          },
          {
            text: 'Резина',
            value: '8',
          },

        ]}
      />

      <CheckboxFilterGroup
        title="Производитель"
        className="mt-5"
        items={[
          {
            text: 'Rabbit 15',
            value: '1',
          },
          {
            text: 'Wattsan',
            value: '2',
          },
          {
            text: 'Zerder',
            value: '3',
          },
        ]}
      />


    </form>
  );
};