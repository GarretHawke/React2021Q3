import React from "react";
import "./Card.scss";

const Card = ({
  author,
  content,
  description,
  publishedAt,
  title,
  urlToImage,
  url
}: {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
  url: string;
}): JSX.Element => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="card-image" src={urlToImage ? urlToImage : "/img/news.jpg"} alt="image" />
      </div>
      <div className="card-content">
        <a className="title-link" href={url} target="_blank"><h3 className="title">{title}</h3></a>
        <p className="description">{description.slice(0, 150)}... <a className="full-paper" href={url} target="_blank"><span>See more</span></a></p>
        <div className="info-container">
          <h4 className="author">{author}</h4>
          <h5 className="date">{publishedAt.slice(0, 10)} {publishedAt.slice(11, publishedAt.length - 1)}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
