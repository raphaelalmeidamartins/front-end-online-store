import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
      itemsQuantity: {},
    };
  }

  componentDidMount() {
    const { cartList, itemsQuantity } = this.props;
    this.setState({ cartList, itemsQuantity });
  }

  render() {
    const { cartList, itemsQuantity } = this.state;
    const { handleIncrease, handleDecrease } = this.props;

    return (
      <section className="ShoppingCart">
        {!cartList.length ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          <ul>
            {Object.keys(itemsQuantity).map((productId) => (
              <CartItem
                key={ productId }
                { ...cartList.find((item) => item.id === productId) }
                quantity={ itemsQuantity[productId] }
                handleDecrease={ handleDecrease }
                handleIncrease={ handleIncrease }
              />
            ))}
          </ul>
        )}
        <Link data-testid="checkout-products" to="/checkout">Finalizar Compra</Link>
      </section>
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
};

export default ShoppingCart;
