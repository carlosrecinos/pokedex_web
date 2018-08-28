import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Container, ImageBox, ChangeImageButtom, SpriteImg,
} from './Components';


class Gallery extends Component {
    state = {
      showingPhoto: null,
    }

    componentDidMount() {
      const { showingPhoto } = this.state;
      const { images } = this.props;
      if (!showingPhoto) {
        this.setState({
          showingPhoto: parseInt(Math.random() * (_.size(images) + 1), 10),
        });
      }
    }

    componentWillReceiveProps(nextProps) {
      const { showingPhoto } = this.state;
      if (!showingPhoto) {
        console.log(nextProps);
        this.setState({
          showingPhoto: parseInt(Math.random() * (_.size(nextProps.images) + 1), 10),
        });
      }
    }

    render() {
      const { images } = this.props;
      const imagesQuantity = _.size(images);
      const { showingPhoto } = this.state;
      return (
        <Container>
          <ChangeImageButtom left />
          {
            _.map(images, (image, index) => (
              <ImageBox
                active={showingPhoto === index}
                showing={showingPhoto === index || showingPhoto === (index - 1) || showingPhoto === (index + 1)}
                left={(showingPhoto - 1) === index}
                right={(showingPhoto + 1) === index}
              >
                <SpriteImg src={image.url} />
              </ImageBox>
            ))
        }
          <ChangeImageButtom right />
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
