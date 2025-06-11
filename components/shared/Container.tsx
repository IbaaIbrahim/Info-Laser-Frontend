import {cn} from '@/lib/utils';
import React from 'react';
import {ClassName} from "@/types/types";

export const Container: React.FC<React.PropsWithChildren<ClassName>> = ({className, children}) => {
  return <div className={cn(
    "mx-auto max-w-[1470px] px-8",
    "max-xl:px-6",
    "max-md:px-4",
    className
  )}>
    {children}
  </div>;
};
