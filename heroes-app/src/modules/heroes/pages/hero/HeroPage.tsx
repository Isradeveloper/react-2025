import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Gauge, Zap, Users, Award } from 'lucide-react';
import { useParams } from 'react-router';
import { useHero } from '../../hooks/useHero';
import { HeroPageHeader } from '../../components/HeroPageHeader';
import { HeroStatsTabContent } from '../../components/HeroStatsTabContent';
import { HeroPowersTabContent } from '../../components/HeroPowersTabContent';
import { HeroTeamTabContent } from '../../components/HeroTeamTabContent';
import { HeroInfoTabContent } from '../../components/HeroInfoTabContent';
import { CustomBreadcrumb } from '@/components/custom/CustomBreadcrumb';

export const HeroPage = () => {
  const { slug } = useParams();
  const {
    heroQuery: { data: superheroData },
    averagePower,
    getStatusColor,
    getCategoryColor,
    getUniverseColor,
  } = useHero(slug!);

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomBreadcrumb
        currentPage={superheroData?.alias ?? ''}
        breadcrumbs={[]}
      />

      <HeroPageHeader
        hero={superheroData}
        averagePower={averagePower}
        getStatusColor={getStatusColor}
        getCategoryColor={getCategoryColor}
        getUniverseColor={getUniverseColor}
      />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs
          defaultValue="stats"
          className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger
              value="stats"
              className="flex items-center gap-2">
              <Gauge className="w-4 h-4" />
              Stats
            </TabsTrigger>
            <TabsTrigger
              value="powers"
              className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Powers
            </TabsTrigger>
            <TabsTrigger
              value="team"
              className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Team
            </TabsTrigger>
            <TabsTrigger
              value="info"
              className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              Information
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="stats"
            className="space-y-6">
            <HeroStatsTabContent hero={superheroData} />
          </TabsContent>

          <TabsContent value="powers">
            <HeroPowersTabContent hero={superheroData} />
          </TabsContent>

          <TabsContent value="team">
            <HeroTeamTabContent hero={superheroData} />
          </TabsContent>

          <TabsContent value="info">
            <HeroInfoTabContent
              hero={superheroData}
              getStatusColor={getStatusColor}
              getCategoryColor={getCategoryColor}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default HeroPage;
