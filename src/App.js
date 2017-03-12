import React, { Component } from 'react';
import './App.css';

import OrderForm from './components/OrderForm';
import CheckList from './components/CheckList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }
  render() {
    return (
      <div>
      <OrderForm 
        submitHandler={this._addOrder}
      />
      <CheckList 
        ordersArray={this.state.orders} 
        clickHandler={this._removeOrder}
      />
      </div>
    );
  }

  _addOrder = (order) => {
    this.setState({
      orders: [...this.state.orders, order]
    });
  }

  _removeOrder = (id) => {
    console.log(`removing order ${id}`);
    this.setState({
      orders: this.state.orders.filter((o) => o.id !== id)
    })
  }
}

export default App;
