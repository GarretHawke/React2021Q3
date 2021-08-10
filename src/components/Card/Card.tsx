import React from "react";
import './Card.scss';

const Card = ({ item }: { item: { firstName: string, lastName: string, birthDate: string, _gender: string, _race: string, _class: string, agree: boolean } }): JSX.Element => {
  return (
    <div>
      <div>{item.firstName}</div>
      <div>{item.lastName}</div>
      <div>{item.birthDate}</div>
      <div>{item._gender}</div>
      <div>{item._race}</div>
      <div>{item._class}</div>
      <div>{item.agree}</div>
    </div>
  );
}

export default Card;