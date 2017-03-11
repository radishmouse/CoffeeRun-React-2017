import React from 'react';

const RowDescription = ({
  coffee,
  emailAddress,
  size,
  flavor,
  strength
}) => (
  <span>{`${size} ${flavor} ${coffee} (${emailAddress}) [${strength}x]`}</span>
);

RowDescription.defaultProps = {
  coffee: '(coffee)',
  emailAddress: '(emailAddress)',
  size: '(size)',
  flavor: '(flavor)',
  strength: 0
};

export default RowDescription;