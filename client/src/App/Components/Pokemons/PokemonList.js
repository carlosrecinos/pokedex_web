import React, { Component } from 'react';
import _ from 'lodash';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  PokemonList as PokemonListStyledComponent,
  PokemonCard, CardTitle, CardBody, PokemonBall, CardImage, CloseButton, PokemonModal,
} from './Components';
import { getPokemonsAction, getNextPokemonPage } from '../../../actions/AppAction';
import InfoBox from './InfoBox';

const getImageUrl = (url, returnId) => {
  const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const newUrl = url.slice(0, -1);
  const index = newUrl.lastIndexOf('/');
  const id = newUrl.slice(parseInt(index, 10) + 1);
  if (returnId) {
    return id;
  }
  return `${baseUrl}${id}.png`;
};
class PokemonList extends Component {
  state = {
    alreadyReached: false,
    clickedCard: {},
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
        nextPage(next);
        this.setState({
          alreadyReached: true,
        });
      }
    }
  };

  isBottom = el => el.getBoundingClientRect().bottom <= window.innerHeight

  handleCardClick = (e, pokemon, toOpen) => {
    e.stopPropagation();
    this.setState({
      clickedCard: {
        [pokemon.name]: toOpen,
      },
    });
  }

  render() {
    const { clickedCard } = this.state;
    const { pokemons } = this.props;
    return (
      <PokemonListStyledComponent>
        {
          _.map(pokemons, pokemon => (
            <PokemonModal
              clicked={clickedCard[pokemon.name]}
              onClick={(e) => { this.handleCardClick(e, pokemon, false); }}
              key={pokemon.name}
            >
              <PokemonCard
                clicked={clickedCard[pokemon.name]}
                onClick={(e) => { this.handleCardClick(e, pokemon, true); }}
              >
                <CardTitle>
                  {pokemon.name}
                  {
                clickedCard[pokemon.name]
                  ? (
                    <CloseButton
                      onClick={(e) => { this.handleCardClick(e, pokemon, false); }}
                    >
                    X
                    </CloseButton>
                  )
                  : ''
              }
                </CardTitle>
                <PokemonBall />
                <CardBody>
                  <LazyLoad>
                    <CardImage src={getImageUrl(pokemon.url)} />
                  </LazyLoad>
                </CardBody>
              </PokemonCard>
              {
                clickedCard[pokemon.name]
                  ? <InfoBox clicked={clickedCard[pokemon.name]} pokemonProp={pokemon} pokemonId={getImageUrl(pokemon.url, true)} />
                  : <div />
              }
            </PokemonModal>
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
