import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  PokemonInfo, InfoTitle, InfoBody, PokemonTypes, PokemonType, BasicInfo, XpContainer, WeightContainer,
} from './Components';
import { setPokemonInfo } from '../../../actions/AppAction';
import Gallery from './MiniGallery';
import { Host } from '../../../Constants';

class InfoBox extends Component {
  state = {

  }

  componentDidMount() {
    const { pokemonId, setPokemonInfo, pokemonProp } = this.props;
    setPokemonInfo(pokemonId, pokemonProp.name);
  }

  render() {
    const { pokemon, clicked } = this.props;
    const images = [];
    _.forEach(pokemon.sprites, (image, key) => {
      if (image) {
        images.push({
          url: image,
          name: key,
        });
      }
    });
    return (
      <PokemonInfo onClick={(e) => { e.stopPropagation(); }} clicked={clicked}>
        <InfoTitle>{pokemon.name}</InfoTitle>
        <InfoBody>
          <Gallery images={images} />
          <BasicInfo>
            <PokemonTypes>
              {
                _.map(pokemon.types, type => (
                  <PokemonType title={type.type.name} src={`${Host}/images/${type.type.name}.png`} />
                ))
              }
            </PokemonTypes>
            <WeightContainer>
              <b>Weight: </b>
              {`${parseInt(pokemon.weight, 10) / 10} lbs.`}
            </WeightContainer>
            <XpContainer>
              <b>XP: </b>
              {pokemon.base_experience}
            </XpContainer>
          </BasicInfo>
        </InfoBody>
      </PokemonInfo>
    );
  }
}
InfoBox.defaultProps = {
  pokemon: {},
};
const mapStateToProps = (store, ownProps) => ({
  pokemon: store.AppReducer.pokemonsInfo[ownProps.pokemonProp.name],
});
const mapDispatchToProps = dispatch => ({
  setPokemonInfo(id, name) {
    return dispatch(setPokemonInfo(id, name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBox);
