import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { ReactNode } from 'react';

interface Props {
  label: string;
  value: number;
  progressValue: number;
  icon: ReactNode;
  iconContainerClassName: string;
  valueClassName: string;
  progressActiveColor: string;
}

export const HeroDetailStatCard = ({
  label,
  value,
  progressValue,
  icon,
  iconContainerClassName,
  valueClassName,
  progressActiveColor,
}: Props) => {
  return (
    <Card className="text-center">
      <CardContent className="pt-6">
        <div className="flex justify-center mb-4">
          <div className={`${iconContainerClassName} p-3 rounded-full`}>
            {icon}
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2">{label}</h3>
        <div className={`text-3xl font-bold mb-2 ${valueClassName}`}>
          {value}
        </div>
        <Progress
          max={100}
          value={progressValue}
          className="h-2"
          activeColor={progressActiveColor}
        />
      </CardContent>
    </Card>
  );
};
