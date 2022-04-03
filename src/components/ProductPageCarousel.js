import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import './ProductPageCarousel.css';

class ProductPageCarousel extends Component {
  state = { }

  render() {
    const { pictures } = this.props;

    return (
      <Carousel>
        {pictures.map(({ url }, index) => (
          <div className="Carousel-item" key={ `item-${index + 1}` }>
            <img src={ url } alt={ `foto-${index}` } />
          </div>
        ))}
      </Carousel>
    );
  }
}

ProductPageCarousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

ProductPageCarousel.defaultProps = {
  pictures: [],
};

export default ProductPageCarousel;
