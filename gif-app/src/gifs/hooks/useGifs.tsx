import { useRef, useState } from 'react';
import { getGifsByQueryAction } from '../actions/get-gifs-by-query.action';
import type { Gif } from '../interfaces/gif.interface';

export const useGifs = () => {
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {


    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifsByQueryAction(term);
    setGifs(gifs);
  };

  const handleQuery = async (term: string) => {
    const parsedTerm = term.trim().toLowerCase();

    if (
      parsedTerm.length === 0 ||
      previousSearches.includes(parsedTerm) ||
      !parsedTerm
    )
      return;

    const currentTerms = previousSearches.slice(0, 7);

    setPreviousSearches([parsedTerm, ...currentTerms]);

    const newGifs = await getGifsByQueryAction(parsedTerm);
    setGifs(newGifs);
    gifsCache.current[parsedTerm] = newGifs;
  };

  return {
    gifs,
    previousSearches,

    handleTermClicked,
    handleQuery,
  };
};
