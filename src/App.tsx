import React, { Fragment, useState } from 'react';
import Form from '@/components/Form';
import Card from '@/components/Card';
import IFormValues from '@/components/shared';
import Header from '@/components/Header';

const App = (): JSX.Element => {
  const [formValues, setFormValues] = useState<IFormValues[] | []>([]);

  
  return (
    <Fragment>
      <Header />
      <div className="wrapper">
        <Form setFormValues={setFormValues} />
        <div className="cards-container">
          {formValues?.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default App;