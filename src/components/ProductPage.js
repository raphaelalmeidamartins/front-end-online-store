import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductById } from '../services/api';
import AddToCartButton from './AddToCartButton';
import FreeShipping from './FreeShipping';
import ProductReviews from './ProductReviews';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      shipping: {},
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const product = await getProductById(params.id);
    this.setState({ ...product });
  }

  render() {
    const { title, thumbnail, price } = this.state;
    const { shipping } = this.state;
    const freeShipping = shipping.free_shipping;
    const { handleAddCartToList } = this.props;

    return (
      <div>
        <section>
          {freeShipping && <FreeShipping />}
          <h2 data-testid="product-detail-name">{title}</h2>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
          <AddToCartButton
            handleAddCartToList={ handleAddCartToList }
            dataTestId="product-detail-add-to-cart"
            productObj={ this.state }
          />
        </section>
        <ProductReviews { ...this.props } />
      </div>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
  handleAddCartToList: PropTypes.func.isRequired,
};

export default ProductPage;
