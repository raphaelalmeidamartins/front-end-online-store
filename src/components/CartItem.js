import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaMinusSquare, FaPlusSquare, FaTrashAlt } from 'react-icons/fa';
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
        <button type="button" className="CartItem-icon">
          <span>
            <FaTrashAlt />
          </span>
        </button>
        <img src={ thumbnail } alt={ title } className="CartItem-image" />
        <span
          className="CartItem-title"
          data-testid="shopping-cart-product-name"
        >
          {title}
        </span>
        <div className="CartItem-container-quantity">
          <button
            type="button"
            className="CartItem-icon"
            data-testid="product-decrease-quantity"
            onClick={ () => this.decreaseQuantity() }
          >
            <span>
              <FaMinusSquare />
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
              <FaPlusSquare />
            </span>
          </button>
        </div>
        <span className="CartItem-price">{`R$ ${price}`}</span>
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
