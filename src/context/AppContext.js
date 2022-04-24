import PropTypes from 'prop-types';
import React, { Component, createContext } from 'react';

const AppContext = createContext({});

class AppProvider extends Component {
  constructor() {
    super();

    this.state = {
      cartList: [],
      itemsQuantity: {},
      displayCategories: false,
    };
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) this.setState({ ...cart });
  }

  componentDidUpdate() {
    localStorage.setItem('cart', JSON.stringify(this.state));
  }

  handleAddCartToList = (productId, list, productObj) => {
    const { cartList } = this.state;
    if (productObj) {
      if (this.isItemAvailable(productObj)) {
        this.setState({
          cartList: [...cartList, productObj],
        }, this.updateQuantity);
      }
    } else {
      const selectedProduct = list.find((product) => product.id === productId);
      if (this.isItemAvailable(selectedProduct)) {
        this.setState({ cartList: [...cartList, selectedProduct] }, this.updateQuantity);
      }
    }
  };

  isItemAvailable = (productObj) => {
    const { cartList } = this.state;
    const itemsInTheCart = cartList.filter((item) => item.id === productObj.id);
    if (itemsInTheCart.length < productObj.available_quantity) {
      return true;
    }
    return false;
  }

  handleDecrease = (productId) => {
    const { cartList, itemsQuantity } = this.state;
    if (itemsQuantity[productId] > 1) {
      const updatedList = [...cartList];
      const currItem = cartList.find((item) => item.id === productId);
      const index = cartList.indexOf(currItem);
      updatedList.splice(index, 1);
      this.setState({ cartList: updatedList }, this.updateQuantity);
    }
  }

  handleIncrease = (productId) => {
    const { cartList } = this.state;
    const updatedList = [...cartList];
    const currItem = cartList.find((item) => item.id === productId);
    this.setState({ cartList: [...updatedList, currItem] }, this.updateQuantity);
  }

  handleRemoveItem = (productId) => {
    const { cartList } = this.state;
    const updatedList = [...cartList].reduce((acc, item) => {
      if (item.id !== productId) {
        return [...acc, item];
      }
      return acc;
    }, []);
    this.setState({ cartList: updatedList }, this.updateQuantity);
  }

  updateQuantity = () => {
    const { cartList } = this.state;
    const cartItems = [...new Set(cartList)];

    const itemsQuantity = cartItems.reduce((obj, curr) => {
      const accObj = obj;
      accObj[curr.id] = cartList.reduce((acc, item) => {
        if (item.id === curr.id) return acc + 1;
        return acc;
      }, 0);
      return { ...obj, ...accObj };
    }, {});

    this.setState({ itemsQuantity });
  }

  toggleCategories = () => {
    this.setState((state) => ({ displayCategories: !state.displayCategories }));
  }

  render() {
    const contextValue = {
      ...this.state,
      handleAddCartToList: this.handleAddCartToList,
      handleDecrease: this.handleDecrease,
      handleIncrease: this.handleIncrease,
      handleRemoveItem: this.handleRemoveItem,
      toggleCategories: this.toggleCategories,
    };

    const { children } = this.props;

    return (
      <AppContext.Provider value={ contextValue }>
        {children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export { AppProvider, AppContext };
