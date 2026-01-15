import { useEffect, useState } from 'react';

interface Props {
  placeholder?: string;
  buttonText?: string;
  onQuery?: (term: string) => void;
}

export const SearchBar = ({ placeholder, buttonText, onQuery }: Props) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onQuery?.(query);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [query, onQuery]);

  const handleSearch = () => {
    onQuery?.(query);
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>{buttonText || 'Search'}</button>
    </div>
  );
};
