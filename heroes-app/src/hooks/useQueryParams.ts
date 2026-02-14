import { useMemo } from 'react';
import { useSearchParams } from 'react-router';

export type HeroTab = 'all' | 'favorites' | 'heroes' | 'villains';

interface keyValuePair {
  key: string;
  value: string;
}

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 6;
  const category = searchParams.get('category') || 'all';

  const activeTab = (searchParams.get('tab') as HeroTab) || 'all';

  const selectedTab = useMemo(() => {
    const validTabs = ['all', 'favorites', 'heroes', 'villains'];

    return validTabs.includes(activeTab) ? activeTab : 'all';
  }, [activeTab]);

  const handleSetSearchParams = (keyValuePairs: keyValuePair[]) => {
    setSearchParams((prev) => {
      keyValuePairs.forEach(({ key, value }) => {
        prev.set(key, value);
      });
      return prev;
    });
  };

  return {
    page,
    limit,
    category,
    activeTab,
    selectedTab,
    handleSetSearchParams,
  };
};
