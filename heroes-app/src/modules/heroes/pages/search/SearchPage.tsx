import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '../../components/HeroStats';
import { SearchControls } from './ui/SearchControls';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';

export const SearchPage = () => {
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
    </>
  );
};

export default SearchPage;
