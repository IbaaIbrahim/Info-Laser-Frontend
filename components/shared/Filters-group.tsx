'use client';

import React, {useState} from 'react';
import {ChevronDown, X} from 'lucide-react';
import {motion, AnimatePresence} from 'framer-motion';
import {Checkbox} from '@/components/ui/Checkbox';
import {FilterGroup} from '@/types/filter';

export const FiltersGroup: React.FC<FilterGroup> = ({title, items, defaultOpen = false}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <fieldset className="mb-3">

      <legend
        className="font-semibold flex items-center justify-between w-full mb-3 cursor-pointer"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        {title}
        {isOpen ? <X size={15}/> : <ChevronDown size={18}/>}
      </legend>

      <AnimatePresence>
        <motion.ul
          initial={{height: 0, opacity: 0}}
          animate={isOpen ? {height: 'auto', opacity: 1} : {}}
          exit={{height: 0, opacity: 0}}
          transition={{duration: 0.3, ease: 'easeInOut'}}
          className="flex flex-col gap-3 overflow-hidden"
        >
          {items.map((item) => (
            <li key={item.value} className="flex items-center space-x-2">
              <Checkbox
                value={String(item.value)}
                className="rounded-[8px] w-6 h-6 cursor-pointer"
                id={`item-${item.value}`}
              />
              <label htmlFor={`item-${item.value}`} className="leading-none cursor-pointer flex-1">
                {item.name}
              </label>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </fieldset>
  );
};
