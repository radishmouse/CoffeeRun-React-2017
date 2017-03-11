import React from 'react';
import Row from './Row';

const CheckList = ({ordersArray, clickHandler}) => (
    <div>
      {ordersArray.map(({order}) => (
        <Row 
          id={order.id} 
          coffeeOrder={order} 
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );

const _logFromCheckList = (e) => {
  console.log(`CheckList knows you clicked ${e.target} `);
};

CheckList.propTypes = {
  ordersArray: React.PropTypes.array.isRequired,
  clickHandler: React.PropTypes.func
}

CheckList.defaultProps = {
  clickHandler: _logFromCheckList
};

export default CheckList;