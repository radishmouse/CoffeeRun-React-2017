import React from 'react';
import './OrderFormField.css';

const OrderFormField = ({
  name,
  type,
  onChange,
  value
}) => (
  <fieldset className="fieldset">
        <label>{name}</label>
        <input 
          type={type}
          name={name}
          onChange={onChange}
          value={value}
        />
  </fieldset>
);

export default OrderFormField;