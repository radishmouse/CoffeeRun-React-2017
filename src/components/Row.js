import React from 'react';
import './Row.css';

const Row = ({val}) => (
  <label className="row">
    <input 
      type="checkbox" 
      value={val}
      onClick={_handleClick}
    />
    Fancy coffee number one x43
  </label>
);
export default Row;

const _handleClick = (e) => {
  console.log(`you clicked ${e.target.value} !`);
};