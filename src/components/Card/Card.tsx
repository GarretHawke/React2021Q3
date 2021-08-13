import React from "react";
import './Card.scss';
import IFormValues from "@/components/shared";

const Card = ({ item }: { item: IFormValues }): JSX.Element => {
  return (
    <div className="card-container">
      <div className="image-container">
      </div>
      <div className="card-content">
        <h3 className="card-name">{item.firstName} {item.lastName}</h3>
        <div className="card-prop">
          <span className="card-prop__header">Gender:</span>
          <span className="card-prop__value">{item.isMale ? 'male' : 'female'}</span>
        </div>
        <div className="card-prop">
          <span className="card-prop__header">Race:</span>
          <span className="card-prop__value">{item._race}</span>
        </div>
        <div className="card-prop">
          <span className="card-prop__header">Class:</span>
          <span className="card-prop__value">{item._class}</span>
        </div>
        <div className="card-prop">
          <span className="card-prop__header">Birth date:</span>
          <span className="card-prop__value">{item.birthDate}</span>
        </div>
        <div className="quote-container">
          <div className="quote-image" style={{backgroundImage: `url(./img/welcome.jpg)`}}></div>
          <div className="quote-text">Welcome to the Inquisition!</div>
        </div>
      </div>
    </div>
  );
}

export default Card;