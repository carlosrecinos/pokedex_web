import React, { Component } from 'react';
import _ from 'lodash';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  PokemonList as PokemonListStyledComponent,
  PokemonCard, CardTitle, CardBody, PokemonBall, CardImage,
} from './Components';
import { getPokemonsAction, getNextPokemonPage } from '../../../actions/AppAction';

const getImageUrl = (url) => {
  const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const newUrl = url.slice(0, -1);
  const index = newUrl.lastIndexOf('/');
  const id = newUrl.slice(parseInt(index, 10) + 1);
  return `${baseUrl}${id}.png`;
};
class PokemonList extends Component {
  state = {
    alreadyReached: false,
  }

  componentDidMount() {
    const { getPokemons } = this.props;
    getPokemons();
    document.addEventListener('scroll', this.trackScroll);
  }

  componentWillReceiveProps(nextProps) {
    const { pokemons } = this.props;
    const pokemonsQuantity = _.size(nextProps.pokemons);
    const actualPokemonsQuantity = _.size(pokemons);
    if (actualPokemonsQuantity < pokemonsQuantity) {
      this.setState({ alreadyReached: false });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScroll);
  }

  trackScroll = () => {
    const wrappedElement = document.getElementById('root');
    const { alreadyReached } = this.state;
    const { next, nextPage, pokemons } = this.props;
    const pokemonsQuantity = _.size(pokemons);
    if (this.isBottom(wrappedElement)) {
      if (!alreadyReached || (pokemonsQuantity === 0)) {
        console.log('ASDSA');
        nextPage(next);
        this.setState({
          alreadyReached: true,
        });
      }
    }
  };

  isBottom = el => el.getBoundingClientRect().bottom <= window.innerHeight

  render() {
    const { pokemons } = this.props;
    return (
      <PokemonListStyledComponent>
        {
          _.map(pokemons, pokemon => (
            <PokemonCard key={pokemon.name}>
              <CardTitle>{pokemon.name}</CardTitle>
              <PokemonBall />
              <CardBody>
                <LazyLoad>
                  <CardImage src={getImageUrl(pokemon.url)} />
                </LazyLoad>
              </CardBody>
            </PokemonCard>
          ))
        }
      </PokemonListStyledComponent>
    );
  }
}

PokemonList.propTypes = {
  pokemons: PropTypes.objectOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  getPokemons: PropTypes.func.isRequired,
  next: PropTypes.string.isRequired,
  nextPage: PropTypes.func.isRequired,
};

PokemonList.defaultProps = {
  pokemons: {},
};
const mapStateToProps = ({ AppReducer }) => ({
  pokemons: AppReducer.pokemons,
  next: AppReducer.next,
});
const mapDispatchToProps = dispatch => ({
  getPokemons() {
    return dispatch(getPokemonsAction());
  },
  nextPage(url) {
    return dispatch(getNextPokemonPage(url));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
