import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './AddToCartButton.css';

class AddToCartButton extends Component {
  render() {
    const {
      handleAddCartToList,
      productId,
      productList,
      productObj,
      dataTestId,
    } = this.props;
    return (
      <button
        type="button"
        className="ProductCard-Button"
        data-testid={ dataTestId }
        onClick={ () => handleAddCartToList(productId, productList, productObj) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartButton.defaultProps = {
  productId: '',
  productList: [],
  productObj: undefined,
};

AddToCartButton.propTypes = {
  handleAddCartToList: PropTypes.func.isRequired,
  productId: PropTypes.string,
  productList: PropTypes.arrayOf(PropTypes.object),
  productObj: PropTypes.objectOf(PropTypes.any),
  dataTestId: PropTypes.string.isRequired,
};

export default AddToCartButton;
