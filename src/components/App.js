import React from "react";
import Header from "./Header.js";
import Order from "./Order.js";
import Inventory from "./Inventory.js";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  get storeId() {
    const params = this.props.match.params;
    if (!params.storeId || params.storeId === undefined) {
      return null
    }
    return params.storeId
  }

  componentDidMount() {
    const storeId = this.storeId;
    if (!storeId) { return };
    this.ref = base.syncState(`${this.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = fish => {
    const fishes = { ...this.state.fishes };
    const secs = Date.now();
    fishes[secs] = fish;
    this.setState({
      fishes
    })
  }

  updateFish = (fishKey, newFish) => {
    const fishes = { ...this.state.fishes };
    fishes[fishKey] = newFish;
    this.setState({
      fishes
    })
  }
  deleteFish = (fishKey) => {
    const fishes = { ...this.state.fishes }
    fishes[fishKey] = null;
    this.setState({ fishes })
  }

  addToCart = (key) => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({
      order
    })

  }

  removeFromCart = (orderKey) => {
    const order = { ...this.state.order }
    order[orderKey] = null;
    this.setState({
      order
    })
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes,
    })
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh seafood Markert' number={500} />
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map((key) => <Fish key2={key} addToCart={this.addToCart} fishDetail={this.state.fishes[key]} key={key}></Fish>)}
          </ul>
        </div>
        <Order removeFromCart={this.removeFromCart} order={this.state.order} fishes={this.state.fishes} />
        <Inventory
          storeId={this.storeId}
          fishes={this.state.fishes}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          addFish={this.addFish} />
      </div>
    )
  }
}

export default App;