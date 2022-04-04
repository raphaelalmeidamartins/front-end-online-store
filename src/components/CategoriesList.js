import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getCategories } from '../services/api';
import './CategoriesList.css';

class CategoriesList extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };

  render() {
    const { categories } = this.state;
    const {
      filterByCategory,
      displayCategories,
      toggleCategories,
      categoryId,
    } = this.props;

    return (
      <aside
        className={
          displayCategories
            ? 'CategoriesList'
            : 'CategoriesList CategoriesList-hidden'
        }
      >
        <h2>Categorias</h2>
        <ul>
          {categories.map((item) => (
            <li key={ item.id }>
              <label
                htmlFor={ item.id }
                className={
                  item.id === categoryId ? 'CategoriesList-selected' : null
                }
              >
                <input
                  id={ item.id }
                  type="radio"
                  name="categories"
                  value={ item.id }
                  onChange={ filterByCategory }
                  onClick={ toggleCategories }
                />
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

CategoriesList.propTypes = {
  filterByCategory: PropTypes.func.isRequired,
  displayCategories: PropTypes.bool.isRequired,
  toggleCategories: PropTypes.func.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default CategoriesList;

// Pair programming Lazaro Ramos, Leonardo Begnossi
