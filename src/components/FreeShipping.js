import React, { Component } from 'react';
import { GiCardboardBoxClosed } from 'react-icons/gi';
import './FreeShipping.css';

class FreeShipping extends Component {
  render() {
    return (
      <span className="FreeShipping" data-testid="free-shipping">
        Frete Grátis
        <div className="FreeShipping-icon">
          <GiCardboardBoxClosed />
        </div>
      </span>
    );
  }
}

export default FreeShipping;
