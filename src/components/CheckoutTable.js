import 'bulma/css/bulma.min.css';
import React, { Component } from 'react';
import { AppContext } from '../context/AppContext';
import './CheckoutTable.css';

class CheckoutTable extends Component {
  render() {
    const { cartList, itemsQuantity } = this.context;

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

CheckoutTable.contextType = AppContext;

export default CheckoutTable;
