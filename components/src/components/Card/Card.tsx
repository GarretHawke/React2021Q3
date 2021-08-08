import React from 'react';
import './Card.scss';

const Card = ({ item }: {item: {name: string, image: string, link: string, race: string, class: string, classImage: string, specialization: string, specializationImage: string, quoteImage: string, quote: string}}): JSX.Element => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="card-image" src={item.image} alt="cassandra" />
        <div className="icon-container">
          <div className="icon favorite" title="add to favorite"></div>
          <a href={item.link}><div className="icon visit" title="explore"></div></a>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-name">{item.name}</h3>
        <div className="card-prop">
          <span className="card-prop__header">Race:</span>
          <span className="card-prop__value">{item.race}</span>
        </div>
        <div className="card-prop">
          <span className="card-prop__header">Class:</span>
          <span className="card-prop__value">{item.class}</span>
          <span className="card-prop__image" style={{backgroundImage: `url(${item.classImage})`}}></span>
        </div>
        <div className="card-prop">
          <span className="card-prop__header">Specialization:</span>
          <span className="card-prop__value">{item.specialization}</span>
          <span className="card-prop__image" style={{backgroundImage: `url(${item.specializationImage})`}}></span>
        </div>
        <div className="quote-container">
          <div className="quote-image" style={{backgroundImage: `url(${item.quoteImage})`}}></div>
          <div className="quote-text">{item.quote}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;