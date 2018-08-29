import {
  GET_POKEMONS, INNER_POKEMONS, SET_NEXT_POKEMONS_PAGE, SET_POKEMON_INFO,
} from '../actionTypes/ActionTypes';

const AppReducer = (state = {
  pokemons: {},
  next: '',
  pokemonsInfo: {},
  lastOffset: 0,
}, action) => {
  switch (action.type) {
    case GET_POKEMONS: {
      return {
        ...state,
        pokemons: action.payload,
      };
    }
    case INNER_POKEMONS: {
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          ...action.payload,
        },
      };
    }
    case SET_NEXT_POKEMONS_PAGE: {
      return {
        ...state,
        lastOffset: (state.lastOffset + 20),
      };
    }
    case SET_POKEMON_INFO: {
      return {
        ...state,
        pokemonsInfo: {
          ...state.pokemonsInfo,
          [action.payload.name]: action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};
export default AppReducer;
