import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
      <section className="Checkout">
        <form>
          <h2>Informações do Comprador</h2>
          <label htmlFor="fullName">
            <input
              type="text"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              name="fullName"
            />
          </label>
          <label htmlFor="checkoutEmail">
            <input
              type="email"
              data-testid="checkout-email"
              placeholder="Email"
              name="checkoutEmail"
            />
          </label>
          <label htmlFor="cpf">
            <input
              type="text"
              data-testid="checkout-cpf"
              placeholder="CPF"
              name="cpf"
            />
          </label>
          <label htmlFor="phone">
            <input
              type="text"
              data-testid="checkout-phone"
              placeholder="Telefone"
              name="phone"
            />
          </label>
          <label htmlFor="cep">
            <input
              type="text"
              data-testid="checkout-cep"
              placeholder="CEP"
              name="cep"
            />
          </label>
          <label htmlFor="address">
            <input
              type="text"
              data-testid="checkout-address"
              placeholder="Endereço"
              name="address"
            />
          </label>
          <button
            type="button"
          >
            Finalizar Compra
          </button>
        </form>
      </section>
    );
  }
}

export default Checkout;
