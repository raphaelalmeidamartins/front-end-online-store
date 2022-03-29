import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BiCategory } from 'react-icons/bi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-normal.png';
import './Header.css';

class Header extends Component {
  render() {
    const { itemsQuantity, toggleCategories } = this.props;

    return (
      <header className="Header">
        <div className="Header-container">
          <button
            type="button"
            className="Header-cart-icon Header-cart-icon-category"
            onClick={ toggleCategories }
          >
            <BiCategory />
          </button>
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
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  itemsQuantity: PropTypes.number.isRequired,
  toggleCategories: PropTypes.func.isRequired,
};

export default Header;
