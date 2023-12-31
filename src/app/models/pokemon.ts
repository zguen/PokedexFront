import { Generation } from './generation';
import { Type } from './type';

export interface Pokemon {
  pokedexid: number;
  name: string;
  picture: string;
  pre_evolution: number;
  height: string;
  weight: string;
  id_generation: number;
  generation: Generation;
  types: Type[];
  description: string
}
