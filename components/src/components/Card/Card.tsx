import React from 'react';
import items from './ArrayOfCards';
import './Card.scss';

const Card = (): JSX.Element => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="card-image" src={items[0].image} alt="cassandra" />
        <div className="icon-container">
          <div className="icon favorite" title="add to favorite"></div>
          <a href={items[0].link}><div className="icon visit" title="explore"></div></a>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-name">{items[0].name}</h3>
        <div className="card-prop">
          <span className="card-prop__header">Race:</span>
          <span className="card-prop__value">{items[0].race}</span>
        </div>
        <div className="card-prop">
          <span className="card-prop__header">Class:</span>
          <span className="card-prop__value">{items[0].class}</span>
        </div>
        <div className="card-prop">
          <span className="card-prop__header">Specialization:</span>
          <span className="card-prop__value">{items[0].specialization}</span>
        </div>
        <div className="quote-container">
          <div className="quote-image" style={{backgroundImage: `url(${items[0].quoteImage})`}}></div>
          <div className="quote-text">{items[0].quote}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;