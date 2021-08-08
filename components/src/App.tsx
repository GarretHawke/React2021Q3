import React, { Fragment } from 'react';
import SearchBar from './components/SearchBar';
import Card from './components/Card';

const App = (): JSX.Element => (
  <Fragment>
    <SearchBar />
    <Card />
  </Fragment>
);

export default App;