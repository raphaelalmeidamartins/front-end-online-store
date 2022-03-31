import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import './CartItem.css';

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
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 }, handleDecrease(id));
    }
  };

  increaseQuantity = () => {
    const { id, handleIncrease } = this.props;
    const { props } = this;
    const availableQuantity = props.available_quantity;
    const { quantity } = this.state;
    if (quantity < availableQuantity) {
      this.setState({ quantity: quantity + 1 }, handleIncrease(id));
    }
  };

  render() {
    const { quantity } = this.state;
    const { title, thumbnail, price } = this.props;

    return (
      <li className="CartItem">
        <div className="CartItem-container-item">
          <img src={ thumbnail } alt={ title } className="CartItem-image" />
          <p
            className="CartItem-title"
            data-testid="shopping-cart-product-name"
          >
            {title}
          </p>
          <span className="CartItem-price">
            <span>R$</span>
            <span>{(price * quantity).toFixed(2)}</span>
          </span>
        </div>
        <div className="CartItem-panel-quantity">
          <button type="button" className="CartItem-remove-item-button">
            <span>Remover</span>
          </button>
          <div className="CartItem-container-quantity">
            <button
              type="button"
              className="CartItem-icon"
              data-testid="product-decrease-quantity"
              onClick={ () => this.decreaseQuantity() }
            >
              <span>
                {/* eslint-disable-next-line react/jsx-max-depth */}
                <BiMinus />
              </span>
            </button>
            <span
              className="CartItem-quantity"
              data-testid="shopping-cart-product-quantity"
            >
              {quantity}
            </span>
            <button
              type="button"
              className="CartItem-icon"
              data-testid="product-increase-quantity"
              onClick={ () => this.increaseQuantity() }
            >
              <span>
                {/* eslint-disable-next-line react/jsx-max-depth */}
                <BiPlus />
              </span>
            </button>
          </div>
        </div>
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
