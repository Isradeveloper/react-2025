import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';
import type { Hero } from '../types/hero.interface';

interface Props {
  hero: Hero | undefined;
}

export const HeroTeamTabContent = ({ hero }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-6 h-6 text-green-500" />
          Team
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-8">
          <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
            <Users className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">
            {hero?.team || ''}
          </h3>
          <p className="text-gray-600">
            {hero?.status} member of the team {hero?.team}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
