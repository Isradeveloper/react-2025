import { GifList } from './gifs/components/GifList';
import { PreviousSearches } from './gifs/components/PreviousSearches';
import { useGifs } from './gifs/hooks/useGifs';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';

export const GifsApp = () => {
  const { previousSearches, gifs, handleTermClicked, handleQuery } = useGifs();

  return (
    <>
      <CustomHeader
        title="Gif Researcher"
        description="Discover and share the perfect gif"
      />

      <SearchBar
        placeholder="Search a gif"
        onQuery={handleQuery}
      />

      <PreviousSearches
        searches={previousSearches}
        onTermClicked={handleTermClicked}
      />

      <GifList gifs={gifs} />
    </>
  );
};
