import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import { useSet } from 'react-use';

import React from 'react';

interface Props {
  ingredients: Ingredient[];
  loading: boolean;
  selectedIngredients: Set<string>;
  onAddId: (id: string) => void;
}

/**
 * A hook that fetches all the ingredients from the API and provides a way to filter them.
 */
export const useFilterIngredients = (): Props => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  /**
   * Fetches all the ingredients from the API and sets the state with the result.
   */
  React.useEffect(() => {
    setLoading(true);
    Api.ingredients
      .getAllIngredients()
      .then(item => {
        setIngredients(item);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    ingredients,
    loading,
    onAddId: toggle,
    selectedIngredients: selectedIds,
  };
};
