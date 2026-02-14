import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Hero } from '../types/hero.interface';

interface Props {
  hero: Hero | undefined;
  getStatusColor: (status: string) => string | undefined;
  getCategoryColor: (category: string) => string | undefined;
}

export const HeroInfoTabContent = ({
  hero,
  getStatusColor,
  getCategoryColor,
}: Props) => {
  const firstAppearance = hero?.firstAppearance || '';
  const activeYears =
    firstAppearance && !Number.isNaN(Number.parseInt(firstAppearance, 10))
      ? `${new Date().getFullYear() - Number.parseInt(firstAppearance, 10)} years`
      : '';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">Real Name:</span>
            <span className="font-semibold">{hero?.name || ''}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">Alias:</span>
            <span className="font-semibold">{hero?.alias || ''}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">Category:</span>
            <Badge
              className={`${getCategoryColor(hero?.category || '')} text-white`}>
              {hero?.category || ''}
            </Badge>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Status:</span>
            <Badge
              className={`${getStatusColor(hero?.status || '')} text-white`}>
              {hero?.status || ''}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Universe Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">Universe:</span>
            <span className="font-semibold">{hero?.universe || ''}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-gray-600">First Appearance:</span>
            <span className="font-semibold">{hero?.firstAppearance || ''}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Active Years:</span>
            <span className="font-semibold">{activeYears}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
