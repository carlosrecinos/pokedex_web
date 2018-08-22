import { GET_POKEMONS, INNER_POKEMONS, SET_NEXT_POKEMONS_PAGE } from '../actionTypes/ActionTypes';

const AppReducer = (state = {
  pokemons: {},
  next: '',
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
        next: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
export default AppReducer;
