import PropTypes from 'prop-types';
import React from 'react';
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
      handleIncrease,
      handleDecrease,
      handleRemoveItem,
    } = this.props;

    return (
      <main className="ShoppingCart">
        {!cartList.length ? (
          <p data-testid="shopping-cart-empty-message">
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
                  handleDecrease={ handleDecrease }
                  handleIncrease={ handleIncrease }
                  handleRemoveItem={ handleRemoveItem }
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
          >
            Finalizar Compra
          </button>
        </section>
      </main>
    );
  }
}

ShoppingCart.defaultProps = {
  cartList: [],
};

ShoppingCart.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object),
  itemsQuantity: PropTypes.objectOf(PropTypes.number).isRequired,
  handleDecrease: PropTypes.func.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
};

export default ShoppingCart;
