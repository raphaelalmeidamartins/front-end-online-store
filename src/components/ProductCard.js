import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import AddToCartButton from './AddToCartButton';
import FreeShipping from './FreeShipping';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const {
      title,
      image,
      price,
      productId,
      productList,
      availableQuantity,
      freeShipping,
    } = this.props;

    return (
      <section className="ProductCard">
        <Link to={ `/product/${productId}` }>
          <div className="ProductCard-Image">
            <img src={ image } alt={ title } />
          </div>
          <h3 className="ProductCard-title">{title}</h3>
          <div>
            {freeShipping && <FreeShipping />}
            <p className="ProductCard-price">
              <span className="ProductCard-price-symbol">{'R$ '}</span>
              {price.toFixed(2)}
            </p>
          </div>
        </Link>
        <AddToCartButton
          productId={ productId }
          productList={ productList }
          availableQuantity={ availableQuantity }
        />
      </section>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  productId: PropTypes.string.isRequired,
  productList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.objectOf(PropTypes.any),
  ]))).isRequired,
  availableQuantity: PropTypes.number.isRequired,
  freeShipping: PropTypes.bool.isRequired,
};

ProductCard.contextType = AppContext;

export default ProductCard;
