import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '@/components/Header';
import HomePage from '@/pages/Home';
import AboutPage from '@/pages/About';

const App = (): JSX.Element => {
  
  return (
    <Router>
      <Header />
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