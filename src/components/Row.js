import React from 'react';
import './Row.css';
import RowDescription from './RowDescription';


const Row = ({id, coffeeOrder, clickHandler}) => (
  <label className="row">
    <input 
      type="checkbox" 
      value={id}
      onClick={clickHandler}
    />
    <RowDescription {...coffeeOrder} />
  </label>
);

const _logFromRow = (e) => {
  console.log(`Row knows you clicked ${e.target.value} !`);
};


/*class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {val, clickHandler} = this.props;
    return (
      <label className="row">
        <input 
          type="checkbox" 
          value={val}
          onClick={clickHandler}
        />
        Fancy coffee number one x43
      </label>
    );
  }
}*/

Row.propTypes = {
  id: React.PropTypes.number.isRequired
};

Row.defaultProps = {
 id: 42,
 clickHandler: _logFromRow
};
export default Row;


