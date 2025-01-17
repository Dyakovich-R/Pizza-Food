'use client';

import React, { useEffect } from 'react';
import { Title } from './title';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

/**
 * Filters Component
 *
 * This component renders a set of filters, including checkboxes and price range selection.
 * It allows users to filter products based on certain criteria such as price and ingredients.
 */

export const Filters: React.FC<Props> = ({ className }) => {
  // Destructure the hook to get ingredients, loading state, onAddId function, and selectedIds
  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients();

  // State to manage the selected sizes
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));

  // State to manage the selected pizza types
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([]),
  );

  // State to manage the price range
  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  // Transform ingredients into items for the checkbox group
  const items = ingredients.map(item => ({
    value: String(item.id),
    text: item.name,
  }));

  /**
   * Update the price range state
   *
   * @param name - The name of the price field to update ('priceFrom' or 'priceTo')
   * @param value - The new value for the specified price field
   */
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrices({
      ...prices,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(prices, selectedIngredients,sizes,pizzaTypes);
    
  }, [prices, selectedIngredients,sizes,pizzaTypes]);

  return (
    <div className={className}>
      {/* Title for the filters */}
      <Title
        text="Фільтрація"
        size="sm"
        className="mb-5 font-bold"
      />

          {/* Pizza type filter */}
      <CheckboxFiltersGroup
        title="Тип Тіста"
        name="sizes"
        className="mb-5"
        onClickCheckbox={togglePizzaTypes}
        selected={pizzaTypes}
        items={[
          { text: 'Тонке', value: '1' },
          { text: 'Стандартне', value: '2' },
        ]}
      />

      {/* Size filter */}
      <CheckboxFiltersGroup
        title="Розмір"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: '20 см', value: '20' },
          { text: '30 см', value: '30' },
          { text: '40 см', value: '40' },
        ]}
      />

  

      {/* Price range filter */}
      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Ціна від і до</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(prices.priceFrom)}
            onChange={e => updatePrice('priceFrom', +e.target.value)}
          />
          <Input
            type="number"
            placeholder="1000"
            min={10}
            max={1000}
            value={String(prices.priceTo)}
            onChange={e => updatePrice('priceTo', +e.target.value)}
          />
        </div>

        {/* Range slider for price selection */}
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrices({ priceFrom, priceTo })
          }
        />
      </div>

      {/* Checkbox group filter for ingredients */}
      <CheckboxFiltersGroup
        title={'Інгредієнти'}
        name="ingredients"
        className="mt-5"
        defaultItems={items.slice(0, 6)}
        items={items}
        limit={6}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  );
};
