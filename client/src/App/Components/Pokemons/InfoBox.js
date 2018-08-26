import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PokemonInfo, InfoTitle } from './Components';
import { setPokemonInfo } from '../../../actions/AppAction';

class InfoBox extends Component {
  state = {

  }

  componentDidMount() {
    const { pokemonId } = this.props;
    this.props.setPokemonInfo(pokemonId);
  }

  render() {
    const { pokemon, clicked } = this.props;
    return (
      <PokemonInfo onClick={(e) => { e.stopPropagation(); }} clicked={clicked}>
        <InfoTitle>{pokemon.name}</InfoTitle>
      </PokemonInfo>
    );
  }
}
InfoBox.defaultProps = {
  pokemon: {},
};
const mapStateToProps = (store, ownProps) => ({
  pokemon: store.AppReducer.pokemonsInfo[ownProps.pokemon.name],
});
const mapDispatchToProps = dispatch => ({
  setPokemonInfo(name) {
    return dispatch(setPokemonInfo(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBox);
