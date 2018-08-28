import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Container, ImageBox, ChangeImageButtom, SpriteImg, ImageName, ArrowDiv, CirclesContainer, Circle,
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

    prevImage = () => {
      const { showingPhoto } = this.state;
      if (!(showingPhoto === 0)) {
        this.setState({
          showingPhoto: showingPhoto - 1,
        });
      }
    }

    nextImage = () => {
      const { showingPhoto } = this.state;
      const { images } = this.props;
      if (!((_.size(images) - 1) === showingPhoto)) {
        this.setState({
          showingPhoto: showingPhoto + 1,
        });
      }
    }

    setActiveImage = (index) => {
      this.setState({
        showingPhoto: index,
      });
    }

    render() {
      const { images } = this.props;
      const imagesQuantity = _.size(images);
      const { showingPhoto } = this.state;
      return (
        <Container>
          <ChangeImageButtom left onClick={this.prevImage}>
            <ArrowDiv left />
          </ChangeImageButtom>
          {
            _.map(images, (image, index) => (
              <ImageBox
                active={showingPhoto === index}
                showing={showingPhoto === index || showingPhoto === (index - 1) || showingPhoto === (index + 1)}
                left={(showingPhoto - 1) === index}
                right={(showingPhoto + 1) === index}
                onClick={() => { this.setActiveImage(index); }}
              >
                <SpriteImg active={showingPhoto === index} src={image.url} left={(showingPhoto - 1) === index} right={(showingPhoto + 1) === index} />
                <ImageName>{image.name}</ImageName>
              </ImageBox>
            ))
          }
          <ChangeImageButtom right onClick={this.nextImage}>
            <ArrowDiv right />
          </ChangeImageButtom>
          <CirclesContainer>
            {
            _.map(images, (image, index) => (
              <Circle title={image.name} onClick={() => { this.setActiveImage(index); }} />
            ))
            }
          </CirclesContainer>
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
