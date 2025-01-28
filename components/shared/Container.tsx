import {cn} from '@/lib/utils';
import React from 'react';
import {ClassName} from "@/types/types";

export const Container: React.FC<React.PropsWithChildren<ClassName>> = ({className, children}) => {
  return <div className={cn('mx-auto max-w-[1750px] px-9', className)}>{children}</div>;
};
