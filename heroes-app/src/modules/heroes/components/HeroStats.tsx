import { Heart, Loader2, Trophy, Users, Zap } from 'lucide-react';
import { useHeroesSummary } from '../hooks/useHeroesSummary';
import { HeroStatCard } from './HeroStatCard';
import { Badge } from '@/components/ui/badge';
import { use } from 'react';
import { FavoriteHeroContext } from '../context/FavoriteHeroContext';

export const HeroStats = () => {
  const { summary, isFetching } = useHeroesSummary();
  const { favoritesCount } = use(FavoriteHeroContext);

  return (
    <>
      {isFetching ? (
        <div className="flex justify-center items-center h-full my-20">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <HeroStatCard
            title="Total Characters"
            icon={<Users className="h-4 w-4 text-muted-foreground" />}>
            <div className="text-2xl font-bold">
              {summary?.totalHeroes ?? 0}
            </div>
            <div className="flex gap-1 mt-2">
              <Badge
                variant="default"
                className="text-xs">
                {summary?.heroCount ?? 0} Heroes
              </Badge>
              <Badge
                variant="destructive"
                className="text-xs">
                {summary?.villainCount ?? 0} Villains
              </Badge>
            </div>
          </HeroStatCard>

          <HeroStatCard
            title="Favorites"
            icon={<Heart className="h-4 w-4 text-muted-foreground" />}>
            <div className="text-2xl font-bold text-red-600">
              {favoritesCount}
            </div>
            <p className="text-xs text-muted-foreground">
              {(favoritesCount / (summary?.totalHeroes ?? 0)) * 100}% of total
            </p>
          </HeroStatCard>

          <HeroStatCard
            title="Strongest"
            icon={<Zap className="h-4 w-4 text-muted-foreground" />}>
            <div className="text-lg font-bold">
              {summary?.strongestHero?.name ?? ''}
            </div>
            <p className="text-xs text-muted-foreground">
              Strength: {summary?.strongestHero?.strength ?? 0}/10
            </p>
          </HeroStatCard>

          <HeroStatCard
            title="Smartest"
            icon={<Trophy className="h-4 w-4 text-muted-foreground" />}>
            <div className="text-lg font-bold">
              {summary?.smartestHero?.alias ?? ''}
            </div>
            <p className="text-xs text-muted-foreground">
              Intelligence: {summary?.smartestHero?.intelligence ?? 0}/10
            </p>
          </HeroStatCard>
        </div>
      )}
    </>
  );
};

export default HeroStats;
