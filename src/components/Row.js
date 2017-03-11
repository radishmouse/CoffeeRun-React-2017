import React from 'react';
import './Row.css';

/*const Row = ({val, clickHandler}) => (
  <label className="row">
    <input 
      type="checkbox" 
      value={val}
      onClick={clickHandler}
    />
    Fancy coffee number one x43
  </label>
);

const _handleClick = (e) => {
  console.log(`you clicked ${e.target.value} !`);
};
*/

class Row extends React.Component {
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
}

Row.propTypes = {
  val: React.PropTypes.number
};

export default Row;


