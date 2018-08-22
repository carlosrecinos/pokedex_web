import React from 'react';

import { ButtonsWrapper, PokemonButton, PokemonsWrapper } from './Components';
import PokemonList from './PokemonList';

const Pokemons = () => (
  <PokemonsWrapper>
    <ButtonsWrapper>
      <PokemonButton>
        Generation I
      </PokemonButton>
      <PokemonButton>
        Generation II
      </PokemonButton>
      <PokemonButton>
        Generation III
      </PokemonButton>
      <PokemonButton>
        Generation IV
      </PokemonButton>
      <PokemonButton>
        Generation V
      </PokemonButton>
    </ButtonsWrapper>
    <PokemonList />
  </PokemonsWrapper>
);

export default (Pokemons);
