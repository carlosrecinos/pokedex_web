import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Container } from './Components';

class Gallery extends Component {
    state = {}

    render() {
      const { images } = this.props;
      return (
        <Container>
          {
            _.map(images, image => (
              <p>{image.name}</p>
            ))
          }
        </Container>
      );
    }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};
export default Gallery;
