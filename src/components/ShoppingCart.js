import PropTypes from 'prop-types';
import React from 'react';
import { AppContext } from '../context/AppContext';
import CartItem from './CartItem';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  handleCheckout = () => {
    const { history } = this.props;
    history.push('/checkout');
  }

  render() {
    const {
      cartList,
      itemsQuantity,
    } = this.context;

    return (
      <main className="ShoppingCart">
        {!cartList.length ? (
          <p>
            Seu carrinho está vazio
          </p>
        ) : (
          <ul className="ShoppingCart-items-list">
            {Object.keys(itemsQuantity)
              .sort()
              .map((productId) => (
                <CartItem
                  key={ productId }
                  { ...cartList.find((item) => item.id === productId) }
                  quantity={ itemsQuantity[productId] }
                />
              ))}
          </ul>
        )}
        <section className="ShoppingCart-checkout">
          <span className="ShoppingCart-total">
            <span className="ShoppingCart-total-label">Total:</span>
            <span className="ShoppingCart-total-value">
              <span>R$</span>
              <span>
                {cartList.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
              </span>
            </span>
          </span>
          <button
            type="button"
            className="ShoppingCart-checkout-button"
            onClick={ this.handleCheckout }
            disabled={ cartList.length === 0 }
          >
            Finalizar Compra
          </button>
        </section>
      </main>
    );
  }
}

ShoppingCart.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

ShoppingCart.contextType = AppContext;

export default ShoppingCart;
