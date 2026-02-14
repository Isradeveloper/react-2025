import { Zap } from 'lucide-react';

interface Props {
  power: string;
}

export const HeroPowerCard = ({ power }: Props) => {
  return (
    <div className="bg-linear-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
      <div className="flex items-center gap-3">
        <div className="bg-blue-500 p-2 rounded-full">
          <Zap className="w-4 h-4 text-white" />
        </div>
        <span className="font-medium text-blue-900">{power}</span>
      </div>
    </div>
  );
};
