import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BiCategory } from 'react-icons/bi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-negativo.png';
import './Header.css';

class Header extends Component {
  render() {
    const { itemsQuantity } = this.props;

    return (
      <header className="Header">
        <div className="Header-cart-icon Header-cart-icon-category">
          <BiCategory />
        </div>
        <img className="Header-logo" src={ logo } alt="March 25th Online Store" />
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          <div className="Header-cart-icon">
            <RiShoppingCartFill />
          </div>
          <div className="Header-cart-quantity">
            <span data-testid="shopping-cart-size">
              {itemsQuantity}
            </span>
          </div>
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  itemsQuantity: PropTypes.number.isRequired,
};

export default Header;
