import React, { Fragment } from 'react';
import SearchBar from './components/SearchBar';
import CardField from './components/CardField';

const App = (): JSX.Element => (
  <Fragment>
    <SearchBar />
    <CardField />
  </Fragment>
);

export default App;