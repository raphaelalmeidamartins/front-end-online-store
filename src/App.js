import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import SearchList from './components/SearchList';
import ShoppingCart from './components/ShoppingCart';
import { AppProvider } from './context/AppContext';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <HashRouter>
          <Route
            path="/"
            render={ (props) => (
              <Header { ...props } />
            ) }
          />
          <Switch>
            <Route exact path="/">
              <SearchList />
            </Route>
            <Route
              path="/shopping-cart"
              render={ (props) => (
                <ShoppingCart { ...props } />
              ) }
            />
            <Route
              exact
              path="/product/:id"
              render={ (props) => (
                <ProductPage { ...props } />
              ) }
            />
            <Route path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </HashRouter>
      </AppProvider>
    );
  }
}

export default App;
