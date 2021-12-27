import React from 'react';
import { getFunName } from "../helpers";


export default class StorePicker extends React.Component {

  storeName = React.createRef();

  handleSubmit = event => {
    event.preventDefault();
    this.props.history.push(`/store/${this.storeName.current.value}`)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} action='#' className='store-selector'>
        <h2> please enter a store</h2>
        <input
          ref={this.storeName}
          name='store' defaultValue={getFunName()} />
        <button type='submit'>bezoek</button>
      </form>
    );
  }
}