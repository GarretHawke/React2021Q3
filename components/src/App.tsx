import React, { Fragment } from 'react';
import Button from './components/Button';

const App = (): JSX.Element => (
  <Fragment>
    <h1>Hello, Inquisitor</h1>
    <img src='./img/inquisition.jpg' alt='image' width='800' />
    <Button />
  </Fragment>
);

export default App;