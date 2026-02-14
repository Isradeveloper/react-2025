import { heroApi } from '../api/hero.api';
import type { HeroesResponse } from '../types/get-heroes-response.interface';

const baseUrl = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (
  page: number = 1,
  limit: number = 6,
  category = 'all'
) => {
  const { data } = await heroApi.get<HeroesResponse>(`/`, {
    params: {
      limit,
      offset: (page - 1) * limit,
      category,
    },
  });

  const heroes = data.heroes.map((hero) => ({
    ...hero,
    image: `${baseUrl}/images/${hero.image}`,
  }));

  return {
    ...data,
    heroes,
  };
};
