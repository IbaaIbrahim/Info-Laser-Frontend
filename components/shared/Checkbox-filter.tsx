import React from 'react';
import {Checkbox} from '../ui/Checkbox';
import {FilterCheckbox} from "@/types/filter";

export const CheckboxFilter: React.FC<FilterCheckbox> = (
  {
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked,
    name,
  }
) => {
  return (
    <li className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${name}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${name}-${String(value)}`}
        className="leading-none cursor-pointer flex-1">
        {text}
      </label>
      {endAdornment}
    </li>
  );
};
