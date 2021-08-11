import React from "react";
import './Card.scss';
import IFormValues from "@/components/shared";

const Card = ({ item }: { item: IFormValues }): JSX.Element => {
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