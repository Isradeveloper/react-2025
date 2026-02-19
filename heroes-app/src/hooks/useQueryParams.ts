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
  const query = searchParams.get('query') || '';
  const universe = searchParams.get('universe') || 'all';
  const status = searchParams.get('status') || 'all';

  const strength = Number(searchParams.get('strength')) || 0;
  const activeAccordion = searchParams.get('active-accordion');

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

  const toggleParam = (keyValuePairs: keyValuePair[]) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      const exists = keyValuePairs.some(({ key }) => next.get(key) != null);
      if (exists) {
        keyValuePairs.forEach(({ key }) => next.delete(key));
      } else {
        keyValuePairs.forEach(({ key, value }) => next.set(key, value));
      }
      return next;
    });
  };

  return {
    page,
    limit,
    category,
    universe,
    status,
    query,
    activeTab,
    selectedTab,
    strength,
    activeAccordion,
    handleSetSearchParams,
    toggleParam,
  };
};
