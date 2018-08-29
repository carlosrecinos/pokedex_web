import Axios from 'axios';
import _ from 'lodash';
import {
  GET_POKEMONS, SET_NEXT_POKEMONS_PAGE, INNER_POKEMONS, SET_POKEMON_INFO,
} from '../actionTypes/ActionTypes';

export const getPokemonsAction = () => (dispatch, getState) => new Promise((resolve, reject) => {
  if (_.size(getState().AppReducer.pokemons) === 0) {
    const { lastOffset } = getState().AppReducer;
    Axios.get(`/pokemon/?offset=${0}&&limit=${20}`)
      .then((response) => {
        dispatch({
          type: GET_POKEMONS,
          payload: _.keyBy(response.data.data.results, 'name'),
        });
        dispatch({
          type: SET_NEXT_POKEMONS_PAGE,
          payload: response.data.data.next,
        });
        resolve();
      })
      .catch(() => {
        reject();
      });
  }
});

export const getNextPokemonPage = () => (dispatch, getState) => new Promise((resolve, reject) => {
  console.log(getState().AppReducer);
  const { lastOffset } = getState().AppReducer;
  Axios.get(`/pokemon/?offset=${lastOffset + 21}&&limit=${20}`)
    .then((response) => {
      dispatch({
        type: INNER_POKEMONS,
        payload: _.keyBy(response.data.data.results, 'name'),
      });
      dispatch({
        type: SET_NEXT_POKEMONS_PAGE,
      });
      resolve();
    })
    .catch(() => {
      reject();
    });
});

export const setPokemonInfo = (pokemonId, pokemonName, forceFetch) => (dispatch, getState) => new Promise((resolve, reject) => {
  if (!getState().AppReducer.pokemonsInfo[pokemonName] || forceFetch) {
    Axios.get(`/pokemon/${pokemonId}`)
      .then((response) => {
        dispatch({
          type: SET_POKEMON_INFO,
          payload: response.data.data,
        });
        resolve();
      })
      .catch((error) => {
        reject();
        alert('Error');
        console.error('Error:', error);
      });
  } else {
    resolve();
  }
});
