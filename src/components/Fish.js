import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {

  handleClick = (event) => {
    this.props.addToCart(this.props.key2)
  }

  render() {

    const { image, name, desc, price, status } = this.props.fishDetail;

    const isAvailable = status === 'available';

    return (
      <li className='menu-fish'>
        <img src={image} />
        <h3 className='fish-name'>{name}</h3>
        <span className='price'>{formatPrice(price)}</span>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick} >{isAvailable ? 'add to cart' : 'uitgverkocht'}</button>
      </li>
    )
  }
}

export default Fish;