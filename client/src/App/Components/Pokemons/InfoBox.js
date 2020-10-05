import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  PokemonInfo, InfoTitle, InfoBody, PokemonTypes, PokemonType, BasicInfo, XpContainer, WeightContainer, InfoBoxLoader, InfoBoxLoaderContainer, BrownBackground, InfoContainer, BasicInfoTitle,
} from './Components';
import { setPokemonInfo } from '../../../actions/AppAction';
import Gallery from './MiniGallery';
import { Host } from '../../../Constants';

class InfoBox extends Component {
  state = {
    loading: true,
  }

  componentDidMount() {
    const { pokemonId, setPokemonInfo, pokemonProp } = this.props;
    setPokemonInfo(pokemonId, pokemonProp.name)
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  handleInfoClick = (e) => {
    e.stopPropagation();
  }

  render() {
    const { pokemon, clicked, imageSrc } = this.props;
    const { loading } = this.state;
    const images = _.filter(pokemon.sprites, (sprite) => typeof sprite === "string")
    _.forEach(images, (image, key) => {
      if (image) {
        images.push({
          url: image,
          name: key,
        });
      }
    });
    return (
      <PokemonInfo onClick={this.handleInfoClick} clicked={clicked}>
        {
          loading
            ? (
              <InfoBoxLoaderContainer>
                <InfoBoxLoader src={imageSrc} />
              </InfoBoxLoaderContainer>
            )
            : (
              <React.Fragment>
                <InfoTitle>{pokemon.name}</InfoTitle>
                <InfoBody>
                  <Gallery images={images} />

                  <InfoContainer>
                    <BrownBackground>
                      <BasicInfoTitle>Types</BasicInfoTitle>
                      <PokemonTypes>
                        {
                        _.map(pokemon.types, type => (
                          <PokemonType title={type.type.name} src={`${Host}/images/${type.type.name}.png`} />
                        ))
                      }
                      </PokemonTypes>
                    </BrownBackground>

                    <BrownBackground>
                      <WeightContainer>
                        <b>Weight: </b>
                        {`${parseInt(pokemon.weight, 10) / 10} lbs`}
                      </WeightContainer>
                      <XpContainer>
                        <b>XP: </b>
                        {pokemon.base_experience}
                      </XpContainer>
                    </BrownBackground>
                  </InfoContainer>

                </InfoBody>
              </React.Fragment>
            )
        }
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
  setPokemonInfo(id, name, forceFetch) {
    return dispatch(setPokemonInfo(id, name, forceFetch));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoBox);
