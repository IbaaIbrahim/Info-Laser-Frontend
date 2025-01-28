import React from "react";

export interface FilterCheckbox {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

export interface CheckboxFilterProps {
  title: string,
  items: FilterItems[],
  className?: string,
}

export type FilterItems = FilterCheckbox;