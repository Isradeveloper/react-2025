interface Props {
  searches: string[];
  onTermClicked?: (term: string) => void;
}

export const PreviousSearches = ({ searches, onTermClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Previous Searches</h2>
      <ul className="previous-searches-list">
        {searches.map((search) => (
          <li
            key={search}
            onClick={() => onTermClicked?.(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};
