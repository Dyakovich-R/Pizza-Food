'use client';

import React from 'react';
import { ProductCard } from './product-card';
import { Title } from './title';
import { useIntersection } from 'react-use';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  categoryId: number;
  listClassName?: string;
  className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  categoryId,
  listClassName,
  className,
}) => {
  const setActiveCategoryId = useCategoryStore(state => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActiveCategoryId, title]);

  return (
    <div
      className={className}
      id={title}
      ref={intersectionRef}
    >
      <Title
        text={title}
        size="lg"
        className="font-extrabold mb-5"
      />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map(item => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
