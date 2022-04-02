import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CheckoutTable extends Component {
  render() {
    const { cartList, itemsQuantity } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(itemsQuantity).map((id) => {
            const currentItem = cartList.find((item) => item.id === id);
            return (
              <tr key={ id }>
                <td>
                  <img src={ currentItem.thumbnail } alt={ currentItem.title } />
                  <p>{currentItem.title}</p>
                </td>
                <td>{`R$ ${currentItem.price.toFixed(2)}`}</td>
                <td>{itemsQuantity[id]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

CheckoutTable.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsQuantity: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default CheckoutTable;
