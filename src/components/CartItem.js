import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CartItem extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1,
    };
  }

  componentDidMount() {
    const { quantity } = this.props;
    this.setState({ quantity });
  }

  decreaseQuantity = () => {
    const { id, handleDecrease } = this.props;
    const { quantity } = this.state;
    if (quantity > 1) this.setState({ quantity: quantity - 1 }, handleDecrease(id));
  }

  increaseQuantity = () => {
    const { id, handleIncrease } = this.props;
    const { props } = this;
    const availableQuantity = props.available_quantity;
    const { quantity } = this.state;
    if (quantity < availableQuantity) {
      this.setState({ quantity: quantity + 1 }, handleIncrease(id));
    }
  }

  render() {
    const { quantity } = this.state;
    const { title, thumbnail, price } = this.props;

    return (
      <li className="CartItem">
        <button type="button">Remover</button>
        <img src={ thumbnail } alt={ title } />
        <span data-testid="shopping-cart-product-name">{title}</span>
        <div>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => this.decreaseQuantity() }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{quantity}</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => this.increaseQuantity() }
          >
            +
          </button>
        </div>
        <span>{`R$ ${price}`}</span>
      </li>

    );
  }
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  available_quantity: PropTypes.number.isRequired,
};

export default CartItem;
