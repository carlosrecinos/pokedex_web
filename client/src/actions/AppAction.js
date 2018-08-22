import Axios from 'axios';
import _ from 'lodash';
import { GET_POKEMONS, SET_NEXT_POKEMONS_PAGE, INNER_POKEMONS } from '../actionTypes/ActionTypes';

export const getPokemonsAction = () => (dispatch, getState) => new Promise((resolve, reject) => {
  if (_.size(getState().AppReducer.pokemons) === 0) {
    Axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => {
        dispatch({
          type: GET_POKEMONS,
          payload: _.keyBy(response.data.results, 'name'),
        });
        dispatch({
          type: SET_NEXT_POKEMONS_PAGE,
          payload: response.data.next,
        });
        resolve();
      })
      .catch(() => {
        reject();
      });
  }
});

export const getNextPokemonPage = url => dispatch => new Promise((resolve, reject) => {
  console.log('object', url);
  if (url) {
    Axios.get(url)
      .then((response) => {
        dispatch({
          type: INNER_POKEMONS,
          payload: _.keyBy(response.data.results, 'name'),
        });
        dispatch({
          type: SET_NEXT_POKEMONS_PAGE,
          payload: response.data.next,
        });
        resolve();
      })
      .catch(() => {
        reject();
      });
  } else {
    resolve();
  }
});
