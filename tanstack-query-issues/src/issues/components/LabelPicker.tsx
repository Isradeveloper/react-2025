import { useLabels } from "../hooks";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner";

interface LabelPickerProps {
  onSelectLabel: (label: string) => void;
  selectedLabels: string[];
}

export const LabelPicker = ({
  onSelectLabel,
  selectedLabels,
}: LabelPickerProps) => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading) return <LoadingSpinner />;

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`px-2 py-1 rounded text-xs font-semibold hover:bg-slate-800 cursor-pointer animate-fadeIn ${
            selectedLabels.includes(label.name) ? "selected-label" : ""
          }`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          onClick={() => onSelectLabel(label.name)}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
