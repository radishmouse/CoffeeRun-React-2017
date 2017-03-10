import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Row from '../components/Row';

// import Button from './Button';
// import Welcome from './Welcome';

storiesOf('Row', module)
  .add('single', () => (
    <Row />
  ))
  .add('multiple', () => (
    <span>
      <Row val={1} />
      <Row val={2} />
      <Row val={3} />
    </span>
  ))


// storiesOf('Welcome', module)
//   .add('to Storybook', () => (
//     <Welcome showApp={linkTo('Button')}/>
//   ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));
