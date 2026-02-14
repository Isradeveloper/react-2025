import { useQuery } from '@tanstack/react-query';
import { getHeroAction } from '../actions/get-hero.action';

export const useHero = (slug: string) => {
  const heroQuery = useQuery({
    queryKey: ['hero', slug],
    queryFn: () => getHeroAction(slug),
  });

  const totalPower =
    (heroQuery.data?.strength ?? 0) +
    (heroQuery.data?.intelligence ?? 0) +
    (heroQuery.data?.speed ?? 0) +
    (heroQuery.data?.durability ?? 0);

  const averagePower = Math.round(totalPower / 4);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-800';
      case 'inactive':
        return 'bg-red-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'hero':
        return 'bg-blue-800';
      case 'villain':
        return 'bg-red-800';
    }
  };

  const getUniverseColor = (universe: string) => {
    switch (universe.toLowerCase()) {
      case 'dc':
        return 'bg-blue-800';
      case 'marvel':
        return 'bg-red-800';
    }
  };

  return {
    heroQuery,
    totalPower,
    averagePower,
    getStatusColor,
    getCategoryColor,
    getUniverseColor,
  };
};
