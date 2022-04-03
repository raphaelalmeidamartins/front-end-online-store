import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './CheckoutTable.css';
import 'bulma/css/bulma.min.css';

class CheckoutTable extends Component {
  render() {
    const { cartList, itemsQuantity } = this.props;

    return (
      <>
        <table className="CheckoutTable table">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Valor</th>
              <th>Qtde</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(itemsQuantity).map((id) => {
              const currentItem = cartList.find((item) => item.id === id);
              return (
                <tr key={ id }>
                  <td className="CheckoutTable-product">
                    <img src={ currentItem.thumbnail } alt={ currentItem.title } />
                    <p>{currentItem.title}</p>
                  </td>
                  <td className="CheckoutTable-product-price">
                    {`R$ ${currentItem.price.toFixed(2)}`}
                  </td>
                  <td className="CheckoutTable-product-quantity">
                    {itemsQuantity[id]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="CheckoutTable-total">
          {`Total: R$ ${cartList
            .reduce((acc, { price }) => acc + price, 0)
            .toFixed(2)}`}
        </p>
      </>
    );
  }
}

CheckoutTable.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsQuantity: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default CheckoutTable;
