import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Shield, Zap, Brain, Gauge } from 'lucide-react';
import type { Hero } from '../types/hero.interface';
import { HeroDetailStatCard } from './HeroDetailStatCard';

interface Props {
  hero: Hero | undefined;
}

const STAT_CARDS = [
  {
    key: 'strength' as const,
    label: 'Strength',
    icon: Zap,
    bgIcon: 'bg-red-100',
    iconColor: 'text-red-600',
    valueColor: 'text-red-600',
    progressColor: 'bg-red-500',
  },
  {
    key: 'intelligence' as const,
    label: 'Intelligence',
    icon: Brain,
    bgIcon: 'bg-purple-100',
    iconColor: 'text-purple-600',
    valueColor: 'text-purple-600',
    progressColor: 'bg-purple-500',
  },
  {
    key: 'speed' as const,
    label: 'Speed',
    icon: Gauge,
    bgIcon: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    valueColor: 'text-yellow-600',
    progressColor: 'bg-yellow-500',
  },
  {
    key: 'durability' as const,
    label: 'Durability',
    icon: Shield,
    bgIcon: 'bg-green-100',
    iconColor: 'text-green-600',
    valueColor: 'text-green-600',
    progressColor: 'bg-green-500',
  },
] as const;

export const HeroStatsTabContent = ({ hero }: Props) => {
  const getProgressValue = (
    key: keyof Pick<Hero, 'strength' | 'intelligence' | 'speed' | 'durability'>
  ) => hero?.[key] ?? 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STAT_CARDS.map(
          ({
            key,
            label,
            icon: Icon,
            bgIcon,
            iconColor,
            valueColor,
            progressColor,
          }) => (
            <HeroDetailStatCard
              key={key}
              label={label}
              value={hero?.[key] ?? 0}
              progressValue={getProgressValue(key)}
              icon={<Icon className={`w-8 h-8 ${iconColor}`} />}
              iconContainerClassName={bgIcon}
              valueClassName={valueColor}
              progressActiveColor={progressColor}
            />
          )
        )}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ability Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {STAT_CARDS.map(({ key, label }) => (
              <div
                key={key}
                className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium">{label}</div>
                <div className="flex-1">
                  <Progress
                    value={getProgressValue(key)}
                    className="h-4"
                  />
                </div>
                <div className="w-12 text-right font-bold">
                  {hero?.[key] ?? 0}/10
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
