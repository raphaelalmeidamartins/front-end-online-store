import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AppContext } from '../context/AppContext';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoriesList from './CategoriesList';
import ProductCard from './ProductCard';
import './SearchList.css';

class SearchList extends Component {
  constructor() {
    super();

    this.state = {
      categoryId: '',
      query: '',
      productsList: [],
    };
  }

  async componentDidMount() {
    await this.fetchProducts();
  }

  fetchProducts = async () => {
    const { categoryId, query } = this.state;
    const response = await getProductsFromCategoryAndQuery(categoryId, query);
    const productsList = response.results;
    this.setState({ productsList });
  };

  handleQueryInput = ({ target }) => {
    const query = target.value;
    this.setState({ query }, this.fetchProducts);
  };

  filterByCategory = ({ target }) => {
    const categoryId = target.value;
    this.setState(
      {
        categoryId,
      },
      this.fetchProducts,
    );
  };

  render() {
    const { productsList, query, categoryId } = this.state;

    return (
      <main className="pageContainer">
        <CategoriesList
          filterByCategory={ this.filterByCategory }
          categoryId={ categoryId }
        />
        <section className="SearchList">
          <div className="SearchList-searchbar">
            <input
              type="text"
              value={ query }
              onChange={ this.handleQueryInput }
              onKeyDown={ (e) => {
                if (e.key === 'Enter') {
                  this.fetchProducts();
                }
              } }
            />
            <button
              type="button"
              onClick={ this.fetchProducts }
              className="SearchList-searchbar-button"
            >
              <FiSearch />
            </button>
          </div>
          {Boolean(!productsList.length) && (
            <p
              className="SearchList-search-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
          <div className="SearchList-container-cards">
            {Boolean(productsList.length)
              && productsList.map((product) => {
                const { shipping } = product;
                const freeShipping = shipping.free_shipping;
                return (
                  <ProductCard
                    key={ product.id }
                    item={ product }
                    title={ product.title }
                    image={ product.thumbnail }
                    price={ product.price }
                    freeShipping={ freeShipping }
                    availableQuantity={ product.available_quantity }
                    productId={ product.id }
                    productList={ productsList }
                  />
                );
              })}
          </div>
        </section>
      </main>
    );
  }
}

SearchList.contextType = AppContext;

export default SearchList;
