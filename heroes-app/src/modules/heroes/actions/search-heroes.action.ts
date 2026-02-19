import { heroApi } from '../api/hero.api';
import type { Hero } from '../types/hero.interface';

const API_URL = import.meta.env.VITE_API_URL;

export interface Options {
  name?: string;
  category?: string;
  team?: string;
  universe?: string;
  status?: string;
  strength?: number;
}

export const searchHeroesAction = async (options: Options) => {
  const filteredOptions = Object.fromEntries(
    Object.entries(options).filter(
      ([, value]) => value !== 'all' && value !== ''
    )
  );

  if (Object.keys(filteredOptions).length === 0) {
    return [];
  }

  const { data } = await heroApi.get<Hero[]>('/search', {
    params: filteredOptions,
  });

  return data.map((hero) => ({
    ...hero,
    strength: hero.strength * 10,
    intelligence: hero.intelligence * 10,
    speed: hero.speed * 10,
    durability: hero.durability * 10,
    image: `${API_URL}/images/${hero.image}`,
  }));
};
