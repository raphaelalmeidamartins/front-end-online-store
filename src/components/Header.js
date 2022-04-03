import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BiCategory } from 'react-icons/bi';
import { RiShoppingCartFill } from 'react-icons/ri';
import { TiArrowBackOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-normal.png';
import './Header.css';

class Header extends Component {
  render() {
    const {
      itemsQuantity,
      toggleCategories,
      displayCategories,
      history,
      history: {
        location: { pathname },
      },
    } = this.props;

    return (
      <header className="Header">
        <div className="Header-container">
          { pathname === '/' && (
            <button
              type="button"
              className="Header-cart-icon Header-cart-icon-category"
              onClick={ toggleCategories }
            >
              { displayCategories ? <TiArrowBackOutline /> : <BiCategory />}
            </button>)}
          { pathname !== '/' && (
            <button
              type="button"
              className="Header-cart-icon Header-cart-icon-category"
              onClick={ () => history.goBack() }
            >
              <TiArrowBackOutline />
            </button>)}
          <img className="Header-logo" src={ logo } alt="March 25th Online Store" />
          <Link to="/shopping-cart">
            <div className="Header-cart-icon">
              <RiShoppingCartFill />
            </div>
            <div className="Header-cart-quantity">
              <span>
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
  displayCategories: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Header;
