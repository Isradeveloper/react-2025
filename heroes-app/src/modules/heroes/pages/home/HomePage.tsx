import { Heart } from 'lucide-react';
import { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CustomJumbotron } from '@/components/custom/CustomJumbotron';
import { HeroStats } from '../../components/HeroStats';
import { HeroGrid } from '../../components/HeroGrid';
import { CustomPagination } from '@/components/custom/CustomPagination';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';
import { useHeroesSummary } from '../../hooks/useHeroesSummary';
import { usePaginatedHeroes } from '../../hooks/usePaginatedHeroes';
import { useQueryParams } from '@/hooks/useQueryParams';

export const HomePage = () => {
  const { page, limit, category, selectedTab, handleSetSearchParams } =
    useQueryParams();
  const { summary } = useHeroesSummary();

  const {
    paginatedHeroes: { data },
  } = usePaginatedHeroes(page, limit, category);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
    return () => cancelAnimationFrame(id);
  }, [page]);

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Superhero Universe"
          description="Discover, explore, and manage your favorite superheroes and villains"
        />

        <CustomBreadcrumb
          currentPage="Superhero Universe"
          breadcrumbs={[]}
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs
          value={selectedTab}
          className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                handleSetSearchParams([
                  { key: 'tab', value: 'all' },
                  { key: 'category', value: 'all' },
                  { key: 'page', value: '1' },
                ])
              }>
              All Characters ({summary?.totalHeroes ?? 0})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                handleSetSearchParams([
                  { key: 'tab', value: 'favorites' },
                  { key: 'category', value: 'favorites' },
                  { key: 'page', value: '1' },
                ])
              }>
              <Heart className="h-4 w-4" />
              Favorites (0)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                handleSetSearchParams([
                  { key: 'tab', value: 'heroes' },
                  { key: 'category', value: 'hero' },
                  { key: 'page', value: '1' },
                ])
              }>
              Heroes ({summary?.heroCount ?? 0})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => {
                handleSetSearchParams([
                  { key: 'tab', value: 'villains' },
                  { key: 'category', value: 'villain' },
                  { key: 'page', value: '1' },
                ]);
              }}>
              Villains ({summary?.villainCount ?? 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">All characters</TabsContent>
          <TabsContent value="favorites">Favorites</TabsContent>
          <TabsContent value="heroes">Heroes</TabsContent>
          <TabsContent value="villains">Villains</TabsContent>
        </Tabs>

        {/* Character Grid */}
        <HeroGrid heroes={data?.heroes || []} />

        {/* Pagination */}
        <CustomPagination totalPages={data?.pages ?? 0} />
      </>
    </>
  );
};
