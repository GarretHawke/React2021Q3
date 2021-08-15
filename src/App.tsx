import React, { Fragment, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import ResultsList from '@/components/ResultsList';
import { Article, SortType } from '@/shared';

const App = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Article[] | []>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.relevancy);
  const [page, setPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);

  const sortHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.value) {
      case SortType.relevancy:
        setSortBy(SortType.relevancy);
        break;
      case SortType.popularity:
        setSortBy(SortType.popularity);
        break;
      case SortType.publishedAt:
        setSortBy(SortType.publishedAt);
        break;
      default:
        break;
    }
  };
  
  return (
    <Fragment>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setArticles={setArticles}
        sortBy={sortBy}
        page={page}
        resultsPerPage={resultsPerPage}
      />
      {articles.length !== 0 && (
        <ResultsList
          articles={articles}
          pageNumber={page}
          setPageNumber={setPage}
          sortHandler={sortHandler}
          resultsPerPage={resultsPerPage}
          setResultsPerPage={setResultsPerPage}
        />
      )}
    </Fragment>
  );
};

export default App;