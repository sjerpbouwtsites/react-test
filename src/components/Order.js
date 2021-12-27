import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {

  get totalPrice() {

    return Object.entries(this.props.order).reduce((prev, [curFishName, curOrderNumber]) => {
      const curFishTot = this.props.fishes[curFishName].price * curOrderNumber;
      return prev + curFishTot;
      //return prev + 1; // cur
    }, 0)
  }

  orderRow = ([orderKey, order]) => {
    if (!order) {
      return (
        <CSSTransition classNames='order' key='orderKey' timeout={{ enter: 250, exit: 250 }}></CSSTransition>
      );
    }
    return (
      <CSSTransition classNames='order' key='orderKey' timeout={{ enter: 250, exit: 250 }}>
        <li
          key={orderKey}>
          {order} x {orderKey}: {formatPrice(this.props.fishes[orderKey].price)}
          <button onClick={() => { this.props.removeFromCart(orderKey) }}> X </button>
        </li>
      </CSSTransition>
    );

  }

  render() {
    return (
      <div className='order-wrap'>
        <h2>Order</h2>
        <TransitionGroup component="ul" className='order'>
          {Object.entries(this.props.order)
            .map(([orderKey, order]) => {
              if (!order) {
                return (
                  <CSSTransition classNames='order' key={orderKey} timeout={{ enter: 250, exit: 250 }}></CSSTransition>
                );
              }
              return (
                <CSSTransition classNames='order' key={orderKey} timeout={{ enter: 250, exit: 250 }}>
                  <li
                    key={orderKey}>
                    {order} x {orderKey}: {formatPrice(this.props.fishes[orderKey].price)}
                    <button onClick={() => { this.props.removeFromCart(orderKey) }}> X </button>
                  </li>
                </CSSTransition>
              )
            })}
        </TransitionGroup>
        <div className='total'>
          <strong>total</strong> {formatPrice(this.totalPrice)}
        </div>
      </div>
    )
  }
}

export default Order;