import { heroApi } from '../api/hero.api';
import type { Hero } from '../types/hero.interface';

const API_URL = import.meta.env.VITE_API_URL;

export const getHeroAction = async (slug: string) => {
  const { data } = await heroApi.get<Hero>(`${slug}`);

  return {
    ...data,
    strength: data.strength * 10,
    intelligence: data.intelligence * 10,
    speed: data.speed * 10,
    durability: data.durability * 10,
    image: `${API_URL}/images/${data.image}`,
  };
};
