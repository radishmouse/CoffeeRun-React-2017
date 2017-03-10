import React from 'react';
import './Row.css';

const Row = ({val, clickHandler}) => (
  <label className="row">
    <input 
      type="checkbox" 
      value={val}
      onClick={clickHandler}
    />
    Fancy coffee number one x43
  </label>
);
export default Row;

const _handleClick = (e) => {
  console.log(`you clicked ${e.target.value} !`);
};