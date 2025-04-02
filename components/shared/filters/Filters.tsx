'use client';

import React from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {cn} from '@/lib/utils';
import {Switch} from '@/components/ui/Switch';

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({className}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleResetFilters = () => {
    // Очищаем localStorage от параметров сортировки
    localStorage.removeItem('sortingAndFiltersParams');

    // Очищаем URL от query-параметров
    const currentPath = window.location.pathname; // Берём текущий путь без параметров
    router.replace(currentPath, {scroll: false}); // Меняем URL без перезагрузки
  };

  return (
    <div className={className}>
      <form className={cn('text-sm bg-[var(--gray)] p-5 rounded-3xl border border-gray-200')}>
        <fieldset className="flex items-center gap-3 border-b border-b-gray-200 mb-3 pb-3">
          <legend className="contents">
            <label className="block text-sm font-semibold" htmlFor="promo">
              Действует акция:
            </label>
          </legend>
          <Switch id="promo"/>
        </fieldset>

        <button
          type="button"
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-3xl hover:bg-red-600 transition-colors duration-300 hover:cursor-pointer"
          onClick={handleResetFilters}
        >
          Сбросить фильтр
        </button>
      </form>
    </div>
  );
};
