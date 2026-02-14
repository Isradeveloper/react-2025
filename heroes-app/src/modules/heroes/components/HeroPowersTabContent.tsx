import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap } from 'lucide-react';
import type { Hero } from '../types/hero.interface';
import { HeroPowerCard } from './HeroPowerCard';

interface Props {
  hero: Hero | undefined;
}

export const HeroPowersTabContent = ({ hero }: Props) => {
  const powers = hero?.powers ?? [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="w-6 h-6 text-yellow-500" />
          Powers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {powers.map((power, index) => (
            <HeroPowerCard key={`${power}-${index}`} power={power} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
