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
    <Row />
  ))
  .add('multiple', () => (
    <span>
      <Row 
        id={'1'} 
        coffeeOrder={{
          coffee: 'black coffee',
          emailAddress: 'bob@bob.com',
          size: 'Tall',
          flavor: '',
          strength: 32
        }}
        clickHandler={_printTargetValue} 
      />
      <Row 
        id={2} 
        coffeeOrder={{
          coffee: 'frap',
          emailAddress: 'jiggy@bob.com',
          size: 'Tall',
          flavor: 'gold',
          strength: 3
        }}
        clickHandler={_printTargetValue} 
      />
      <Row 
        id={3} 
        coffeeOrder={{
          coffee: 'macchiato',
          emailAddress: 'joe@bob.com',
          size: 'Vente',
          flavor: 'orangina',
          strength: 70 
        }}
        clickHandler={_printTargetValue} 
      />
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