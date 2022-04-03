import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductById } from '../services/api';
import AddToCartButton from './AddToCartButton';
import FreeShipping from './FreeShipping';
import './ProductPage.css';
import ProductReviews from './ProductReviews';

class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      shipping: {},
      attributes: [],
    };
  }

  async componentDidMount() {
    const {
      match: { params },
    } = this.props;
    const product = await getProductById(params.id);
    this.setState({ ...product });
  }

  render() {
    const { title, thumbnail, price, attributes } = this.state;
    const { shipping } = this.state;
    const freeShipping = shipping.free_shipping;
    const { handleAddCartToList } = this.props;

    return (
      <main className="ProductPage">
        <section className="ProductPage-details">
          <div className="ProductPage-image"><img src={ thumbnail } alt={ title } /></div>
          <div className="ProductPage-info">
            <h2>{title}</h2>
            {freeShipping && <FreeShipping />}
            <p>{`R$ ${price}`}</p>
            <ul>
              {attributes.map((attr) => (
                <li key={ attr.id }>
                  <h3><strong>{`${attr.name}:`}</strong></h3>
                  <p>{attr.value_name}</p>
                </li>
              ))}
            </ul>
            <AddToCartButton
              handleAddCartToList={ handleAddCartToList }
              productObj={ this.state }
            />
          </div>
        </section>
        <ProductReviews { ...this.props } />
      </main>
    );
  }
}

ProductPage.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
  handleAddCartToList: PropTypes.func.isRequired,
};

export default ProductPage;
