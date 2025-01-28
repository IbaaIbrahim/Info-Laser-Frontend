'use client';

import React from 'react';
import {CheckboxFilterProps} from "@/types/filter";
import {CheckboxFilter} from "@/components/shared/Checkbox-filter";

export const CheckboxFilterGroup: React.FC<CheckboxFilterProps> = (
  {
    title,
    items,
    className,
  }
) => {

  return (
    <fieldset className={className}>
      <legend className="font-semibold mb-3">{title}</legend>

      <ul className="flex flex-col gap-3">
        {items.map((item, index) => (
          <CheckboxFilter
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(idx) => console.log(idx)}
          />
        ))}
      </ul>

    </fieldset>
  );
};
