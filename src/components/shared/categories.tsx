'use client'

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: 'Піца' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктелі' },
  { id: 5, name: 'Кава' },
  { id: 6, name: 'Напої' },
  { id: 7, name: 'Десерти' },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId= useCategoryStore(state=>state.activeId)
  
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-58 p-1 rounded-2xl', className)}
    >
      {cats.map(({name,id}, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 px-5 rounded-2xl hover:text-primary hover:scale-125 transition duration-300 ease-out ',
            categoryActiveId === id &&
              'bg-white shadow-md shadow-gray-500 text-primary ',
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
