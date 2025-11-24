import { useLabels } from "../hooks";
import { LoadingSpinner } from "../../shared/components/LoadingSpinner";

export const LabelPicker = () => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading)
    return (
      <LoadingSpinner />
    );

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className="px-2 py-1 rounded text-xs font-semibold hover:bg-slate-800 cursor-pointer animate-fadeIn"
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
