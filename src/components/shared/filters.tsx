import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title
        text="Фільтрація"
        size="sm"
        className="mb-5 font-bold"
      />

      {/* Checkbox*/}
      <div className="flex flex-col gap-4">
        <FilterCheckbox
          text="Можна зібрати"
          value="1"
        />
        <FilterCheckbox
          text="Новинки"
          value="2"
        />
      </div>

      {/* filters price */}
      <div className="mt-5 border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Ціна від і до</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="1000"
            min={10}
            max={1000}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
        />
      </div>

      <CheckboxFiltersGroup
        title={'Інгредієнти'}
        className="mt-5"
        defaultItems={[
          {
            text: 'Сирний соус',
            value: '1',
          },

          {
            text: 'Моцарелла',
            value: '2',
          },
          {
            text: 'Чесник',
            value: '3',
          },
          {
            text: 'Квашені огірок',
            value: '4',
          },
          {
            text: 'Червона цибуля',
            value: '5',
          },
          {
            text: 'Помідори',
            value: '6',
          },
        ]}
        items={[
          {
            text: 'Сирний соус',
            value: '1',
          },

          {
            text: 'Моцарелла',
            value: '2',
          },
          {
            text: 'Чесник',
            value: '3',
          },
          {
            text: 'Квашений огірок',
            value: '4',
          },
          {
            text: 'Червона цибуля',
            value: '5',
          },
          {
            text: 'Помідори',
            value: '6',
          },
          {
            text: 'Сирний соус',
            value: '1',
          },

          {
            text: 'Моцарелла',
            value: '2',
          },
          {
            text: 'Чесник',
            value: '3',
          },
          {
            text: 'Квашений огірок',
            value: '4',
          },
          {
            text: 'Червона цибуля',
            value: '5',
          },
          {
            text: 'Помідори',
            value: '6',
          },
        ]}
        limit={6}
      />
    </div>
  );
};
