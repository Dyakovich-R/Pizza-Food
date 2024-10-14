import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

const cats = [
  'Піца',
  'Комбо',
  'Закуски',
  'Коктелі',
  'Кава',
  'Напої',
  'Десерти',
];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-58 p-1 rounded-2xl', className)}
    >
      {cats.map((cat, index) => (
        <li
          className={cn(
            'flex items-center font-bold h-11 px-5 rounded-2xl hover:text-primary hover:scale-125 transition duration-300 ease-out ',
            activeIndex === index &&
              'bg-white shadow-md shadow-gray-500 text-primary ',
          )}
          key={index}
        >
          <button>{cat}</button>
        </li>
      ))}
    </div>
  );
};
