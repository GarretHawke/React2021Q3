import React, { Fragment, useEffect, useState } from "react";
import Card from '@/components/Card';
import { Article } from "@/shared";
import { SortType } from '@/shared'
import './ResultsList.scss';

const ResultsList = ({
  articles,
  pageNumber,
  setPageNumber,
  sortHandler,
  resultsPerPage,
  setResultsPerPage,
  totalResults
}: {
  articles: Article[] | [];
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  sortHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  resultsPerPage: number;
  setResultsPerPage: React.Dispatch<React.SetStateAction<number>>;
  totalResults: number;
}): JSX.Element => {
  const [articlesPage, setArticlesPage] = useState(1);
  const [numberOfResults, setNumberOfResults] = useState(10);
  const [newTotalResults, setNewTotalResults] = useState(Math.ceil(totalResults / resultsPerPage));

  useEffect(() => {
    setArticlesPage(pageNumber);
    setNumberOfResults(resultsPerPage);
    setNewTotalResults(Math.ceil(totalResults / resultsPerPage));
  }, [pageNumber, resultsPerPage]);

  const setPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPageNumber(Number(value));
  };

  const setResults = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valuePerPage = event.target.value;
    setResultsPerPage(Number(valuePerPage));
  };

  return (
    <div className="results-container">
      <div className="sort-container">
        <span className="sort-header">Sort by</span>
        <div className="radio-container">
          <input
            className="radio_button"
            type="radio"
            id="1"
            name="sort"
            value={SortType.relevancy}
            defaultChecked={true}
            onChange={sortHandler}
          />
          <label className="radio_label" htmlFor="1">
            {SortType.relevancy}
          </label>
          <input
            className="radio_button"
            type="radio"
            id="2"
            name="sort"
            value={SortType.popularity}
            onChange={sortHandler}
          />
          <label className="radio_label" htmlFor="2">
            {SortType.popularity}
          </label>
          <input
            className="radio_button"
            type="radio"
            id="3"
            name="sort"
            value={SortType.publishedAt}
            onChange={sortHandler}
          />
          <label className="radio_label" htmlFor="3">
            {SortType.publishedAt}
          </label>
        </div>
      </div>
      <div className="sort-header">
        <span>Page</span>
        <input
          className="page-number"
          type="text"
          onChange={setPage}
          value={articlesPage}
        />
        ...
        <input
          className="page-number"
          type="text"
          onChange={() => {}}
          value={newTotalResults !== Infinity ? newTotalResults : totalResults}
        />
        <span>Results per page</span>
        <input
          className="page-number total"
          type="text"
          onChange={setResults}
          value={numberOfResults <= 100 ? numberOfResults : 100}
        />
      </div>
      <div className="cards-container">
        {articles?.map((article, index) => (
          <Card
            author={article.author}
            content={article.content}
            description={article.description}
            publishedAt={article.publishedAt}
            title={article.title}
            urlToImage={article.urlToImage}
            url={article.url}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsList;