import PropTypes from 'prop-types';
import React, { Component } from 'react';
import provincies from '../data/provinces';
import './Checkout.css';
import CheckoutTable from './CheckoutTable';

class Checkout extends Component {
  render() {
    const { cartList, itemsQuantity } = this.props;

    return (
      <main className="Checkout">
        {Boolean(!cartList.length) && <p>Seu carrinho está vazio</p>}
        {Boolean(cartList.length) && (
          <>
            <section className="Checkout-products">
              <h2>Revise seus itens</h2>
              <CheckoutTable
                cartList={ cartList }
                itemsQuantity={ itemsQuantity }
              />
            </section>
            <form>
              <h2>Informações do Comprador</h2>
              <div>
                <label htmlFor="fullName" className="Checkout-label-fullName">
                  <input
                    type="text"
                    data-testid="checkout-fullname"
                    placeholder="Nome Completo"
                    name="fullName"
                    id="fullName"
                  />
                </label>
                <label htmlFor="cpf" className="Checkout-label-cpf">
                  <input
                    type="text"
                    data-testid="checkout-cpf"
                    placeholder="CPF"
                    name="cpf"
                    id="cpf"
                  />
                </label>
              </div>
              <div>
                <label
                  htmlFor="checkout-email"
                  className="Checkout-label-email"
                >
                  <input
                    type="email"
                    placeholder="Email"
                    name="checkout-email"
                    id="checkout-email"
                  />
                </label>
                <label htmlFor="phone" className="Checkout-label-phone">
                  <input
                    type="text"
                    data-testid="checkout-phone"
                    placeholder="Telefone"
                    name="phone"
                    id="phone"
                  />
                </label>
              </div>
              <div>
                <label htmlFor="cep" className="Checkout-label-cep">
                  <input
                    type="text"
                    data-testid="checkout-cep"
                    placeholder="CEP"
                    name="cep"
                    id="cep"
                  />
                </label>
                <label htmlFor="city" className="Checkout-label-city">
                  <input
                    type="text"
                    placeholder="Cidade"
                    name="city"
                    id="city"
                  />
                </label>
                <label htmlFor="province" className="Checkout-label-province">
                  <select placeholder="UF" name="province" id="province">
                    {provincies.map((province) => (
                      <option key={ province }>{province}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <label htmlFor="address" className="Checkout-label-address">
                  <input
                    type="text"
                    placeholder="Endereço"
                    name="address"
                    id="address"
                  />
                </label>
                <label htmlFor="house-number" className="Checkout-label-number">
                  <input
                    type="text"
                    placeholder="Número"
                    name="house-number"
                    id="house-number"
                  />
                </label>
              </div>
              <div>
                <label
                  htmlFor="complement"
                  className="Checkout-label-complement"
                >
                  <input
                    type="text"
                    placeholder="Complemento"
                    name="complement"
                    id="complement"
                  />
                </label>
              </div>
              <h2>Método de pagamento</h2>
              <div className="Checkout-payment">
                <label htmlFor="boleto">
                  <input id="boleto" type="radio" name="payment-method" />
                  Boleto
                </label>
                <label htmlFor="visa">
                  <input id="visa" type="radio" name="payment-method" />
                  Crédito
                </label>
                <label htmlFor="mastercard">
                  <input id="mastercard" type="radio" name="payment-method" />
                  Pix
                </label>
              </div>
              <button type="button">Finalizar Compra</button>
            </form>
          </>
        )}
      </main>
    );
  }
}

Checkout.propTypes = {
  cartList: PropTypes.arrayOf(PropTypes.object).isRequired,
  itemsQuantity: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Checkout;
