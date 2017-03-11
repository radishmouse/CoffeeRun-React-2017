import React from 'react';
import { 
  storiesOf, 
  action, 
  linkTo,
  configure,
  addDecorator
} from '@kadira/storybook';

import Row from '../components/Row';
import RowDescription from '../components/RowDescription';

// This is for globally centering your stories.
// and it should come at the very end
addDecorator((story) => (
  <div style={{ textAlign: 'center'}}>
    {story()}
  </div>
));

storiesOf('Row', module)
  .add('single', () => (
    <Row clickHandler={_printTargetValue} />
  ))
  .add('multiple', () => (
    <span>
      <Row val={'1'} clickHandler={_printTargetValue} />
      <Row val={2} clickHandler={_printTargetValue} />
      <Row val={3} clickHandler={_printTargetValue} />
    </span>
  ));

storiesOf('RowDescription', module)
  .add('defaults',() => (
    <RowDescription />
  ))
  .add('custom',() => (
    <RowDescription 
      coffee='espresso'
      emailAddress='me@you.com'
      size='Grande'
      flavor='Almond'
      strength={1}
    />
  ))

const _printTargetValue = (e) => {
  console.log(`the story knows you clicked ${e.target.value} !`);
};

// And this makes that globaly centering...global...
configure(function () {}, module);