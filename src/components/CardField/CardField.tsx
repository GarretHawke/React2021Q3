import React from 'react';
import Card from '../Card';
import items from '../Card/ArrayOfCards';
import './CardField.scss';

const CardField = (): JSX.Element => {
  let counter = 0;
  return (
    <div className="card-field">
      {items.map(item => <Card item={item} key={counter++} />)}
    </div>
  )
}

export default CardField;