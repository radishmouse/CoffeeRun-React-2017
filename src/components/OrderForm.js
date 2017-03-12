import React from 'react';
import OrderFormField from './OrderFormField';

const blankOrder = () => ({
  currentOrder: {
    coffee: '',
    emailAddress: '',
    size: '',
    strength: 42,
    flavor: ''
  }
});
const generateOrder = () => {
  let current = sessionStorage.getItem('currentOrder');
  if (current) {
    return {
      currentOrder: JSON.parse(current)
    }
  } else {
    return blankOrder();
  }

}

class OrderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = generateOrder();
    this.handleSubmit = this.props.submitHandler || this._handleSubmit;
  }

  render() {
    var {currentOrder:o} = this.state;
    return (
      <form onSubmit={this._handleSubmit}>
        <OrderFormField 
          type='text' 
          name='coffee'
          onChange={this._updateCurrentOrder}
          value={o.coffee}
        />

        <OrderFormField 
          type='email' 
          name='emailAddress'
          onChange={this._updateCurrentOrder}
          value={o.emailAddress}
        />

        <OrderFormField 
          type='text' 
          name='size'
          onChange={this._updateCurrentOrder}
          value={o.size}
        />

        <OrderFormField 
          type='text' 
          name='flavor'
          onChange={this._updateCurrentOrder}
          value={o.flavor}
        />

        <OrderFormField 
          type='range' 
          min={1}
          max={100}
          name='strength'
          onChange={this._updateCurrentOrder}
          value={o.strength}
        />

        <input type='submit' />
      </form>
    );
  }

  // had to define this as arrow functoin
  // to avoid using `this._updateCurrentOrder.bind(this)`
  // in all my onChange handlers above
  _updateCurrentOrder = (e) => {
    // console.log(`${e.target.name}: ${e.target.value}`);
    // console.log(this);
    this.setState({
      currentOrder: {
        ...this.state.currentOrder, 
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.currentOrder);
    // this.currentOrder[e.target.name] = e.target.value;
    // this.props.submitHandler(this.currentOrder);
    // this.reset();
  }

  // also using fat arrow for binding to OrderForm instance
  _handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.currentOrder);
    // sessionStorage.setItem('currentOrder', JSON.stringify(this.state.currentOrder));
    let newOrder = {...this.state.currentOrder, id: (new Date()).getTime()};
    this.props.submitHandler(newOrder);
    this.setState(blankOrder());

    // and now, to focus on an element, we have to get its `ref`
  }
}

// const _handleSubmit = (e) => {
  // e.preventDefault();
  // console.log(e);
// };
export default OrderForm;