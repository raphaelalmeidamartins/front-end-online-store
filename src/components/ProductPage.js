import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductPageCarousel from './ProductPageCarousel';
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
      pictures: [{ url: '' }],
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct = async () => {
    const {
      match: { params },
    } = this.props;
    const product = await getProductById(params.id);
    this.setState({ ...product });
  }

  render() {
    const { title, price, attributes, pictures } = this.state;
    const { shipping } = this.state;
    const freeShipping = shipping.free_shipping;
    const { handleAddCartToList } = this.props;

    return (
      <main className="ProductPage">
        <section className="ProductPage-details">
          <ProductPageCarousel pictures={ pictures } />
          <div className="ProductPage-info">
            <h2>{title}</h2>
            {freeShipping && <FreeShipping />}
            <p>{`R$ ${price}`}</p>
            <ul>
              {attributes.map((attr) => (
                <li key={ attr.id }>
                  <h3>
                    <strong>{`${attr.name}:`}</strong>
                  </h3>
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
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string),
  }).isRequired,
  handleAddCartToList: PropTypes.func.isRequired,
};

export default ProductPage;
