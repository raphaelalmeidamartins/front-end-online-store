import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
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
    const { productsList, query } = this.state;
    const {
      handleAddCartToList,
      itemsQuantity,
      displayCategories,
      toggleCategories,
    } = this.props;

    return (
      <main className="pageContainer">
        <CategoriesList
          filterByCategory={ this.filterByCategory }
          displayCategories={ displayCategories }
          toggleCategories={ toggleCategories }
        />
        <section className="SearchList">
          <div className="SearchList-searchbar">
            <input
              data-testid="query-input"
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
              data-testid="query-button"
              onClick={ this.fetchProducts }
              className="SearchList-searchbar-button"
            >
              <FiSearch />
            </button>
          </div>
          {Boolean(!productsList.length) && (
            <p
              className="SearchList-search-message"
              data-testid="home-initial-message"
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
                    handleAddCartToList={ handleAddCartToList }
                    itemsQuantity={ itemsQuantity }
                  />
                );
              })}
          </div>
        </section>
      </main>
    );
  }
}

SearchList.propTypes = {
  handleAddCartToList: PropTypes.func.isRequired,
  itemsQuantity: PropTypes.objectOf(PropTypes.number).isRequired,
  displayCategories: PropTypes.bool.isRequired,
  toggleCategories: PropTypes.func.isRequired,
};

export default SearchList;
