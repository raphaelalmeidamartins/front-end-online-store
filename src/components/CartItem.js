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
    const { props } = this;
    const { id, title, thumbnail, price, handleRemoveItem } = props;
    const availableQuantity = props.available_quantity;

    return (
      <li className="CartItem">
        <div className="CartItem-container-item">
          <img src={ thumbnail } alt={ title } className="CartItem-image" />
          <p
            className="CartItem-title"
          >
            {title}
          </p>
        </div>
        <span className="CartItem-price">
          <span>R$</span>
          <span>{(price * quantity).toFixed(2)}</span>
        </span>
        <div className="CartItem-panel-quantity">
          <button
            type="button"
            className="CartItem-remove-item-button"
            onClick={ () => handleRemoveItem(id) }
          >
            <span>Remover</span>
          </button>
          <div className="CartItem-container-quantity">
            <button
              type="button"
              className="CartItem-icon"
              onClick={ () => this.decreaseQuantity() }
            >
              <span>
                {/* eslint-disable-next-line react/jsx-max-depth */}
                <BiMinus />
              </span>
            </button>
            <span
              className="CartItem-quantity"
            >
              {quantity}
            </span>
            <button
              type="button"
              className="CartItem-icon"
              onClick={ () => this.increaseQuantity() }
              disabled={ quantity === availableQuantity }
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
  id: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number.isRequired,
  available_quantity: PropTypes.number,
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

CartItem.defaultProps = {
  id: '',
  title: '',
  thumbnail: '',
  price: 0,
  available_quantity: 0,
};

export default CartItem;
