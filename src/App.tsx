import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';

const App = (): JSX.Element => {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/about'>
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;