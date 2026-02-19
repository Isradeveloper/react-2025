import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '../../components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';
import { useQueryParams } from '@/hooks/useQueryParams';
import { useSearchHeroes } from '../../hooks/useSeachHeroes';
import { HeroGrid } from '../../components/HeroGrid';

export const SearchPage = () => {
  const { query, category, universe, status, strength } = useQueryParams();
  const { searchHeroes } = useSearchHeroes({
    name: query,
    category,
    universe,
    status,
    strength,
  });

  return (
    <>
      <CustomJumbotron
        title="Search Heroes"
        description="Find your favorite superheroes and villains"
      />

      <CustomBreadcrumb
        currentPage="Search"
        breadcrumbs={[]}
      />

      <HeroStats />

      <SearchControls />

      <HeroGrid heroes={searchHeroes.data ?? []} />
    </>
  );
};

export default SearchPage;
