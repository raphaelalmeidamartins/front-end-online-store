import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import SearchList from './components/SearchList';
import ShoppingCart from './components/ShoppingCart';
/* Agora foi!! */

class App extends Component {
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
    const { cartList, itemsQuantity, displayCategories } = this.state;

    return (
      <HashRouter>
        <Route
          path="/"
          render={ (props) => (
            <Header
              itemsQuantity={ Object.values(itemsQuantity)
                .reduce((acc, item) => {
                  acc += item;
                  return acc;
                }, 0) }
              toggleCategories={ this.toggleCategories }
              { ...props }
              displayCategories={ displayCategories }
            />
          ) }
        />
        <Switch>
          <Route exact path="/">
            <SearchList
              handleAddCartToList={ this.handleAddCartToList }
              itemsQuantity={ itemsQuantity }
              displayCategories={ displayCategories }
              toggleCategories={ this.toggleCategories }
            />
          </Route>
          <Route
            path="/shopping-cart"
            render={ (props) => (
              <ShoppingCart
                { ...props }
                cartList={ cartList }
                itemsQuantity={ itemsQuantity }
                handleDecrease={ this.handleDecrease }
                handleIncrease={ this.handleIncrease }
                handleRemoveItem={ this.handleRemoveItem }
              />
            ) }
          />
          <Route
            exact
            path="/product/:id"
            render={ (props) => (
              <ProductPage
                handleAddCartToList={ this.handleAddCartToList }
                { ...props }
              />
            ) }
          />
          <Route path="/checkout">
            <Checkout
              itemsQuantity={ itemsQuantity }
              cartList={ cartList }
            />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
