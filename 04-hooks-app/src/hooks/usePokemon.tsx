import { useEffect, useState } from "react";

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

interface Props {
  pokemonId: number;
}

export const usePokemon = ({ pokemonId }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const getPokemonById = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setPokemon({
      id,
      name: data.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    });
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      await getPokemonById(pokemonId);
    };
    fetchPokemon();
  }, [pokemonId]);

  return { pokemon };
};
