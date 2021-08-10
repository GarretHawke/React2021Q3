import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Card from './components/Card';

const App = (): JSX.Element => {
  const [formValues, setFormValues] = useState([{}]);
  return (
    <Fragment>
      <Form setFormValues={setFormValues} />
      {formValues.map((item, index) => <Card item={item} key={index} />)}
    </Fragment>
  );
};

export default App;