import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AppContext } from '../context/AppContext';
import './AddToCartButton.css';

class AddToCartButton extends Component {
  render() {
    const {
      productId,
      productList,
      productObj,
    } = this.props;

    const {
      handleAddCartToList,
    } = this.context;

    return (
      <button
        type="button"
        className="AddToCartButton"
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
  productId: PropTypes.string,
  productList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  productObj: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.objectOf(PropTypes.any),
  ])),
};

AddToCartButton.contextType = AppContext;

export default AddToCartButton;
