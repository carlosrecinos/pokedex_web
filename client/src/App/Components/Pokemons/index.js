import React from 'react';

import { ButtonsWrapper, PokemonButton, PokemonsWrapper } from './Components';
import PokemonList from './PokemonList';

const Pokemons = () => (
  <PokemonsWrapper>
    <ButtonsWrapper />
    <PokemonList />
  </PokemonsWrapper>
);

export default (Pokemons);
