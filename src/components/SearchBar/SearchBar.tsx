import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { axiosInstance, apiKey } from "@/service";
import { Article, GET200_Articles, SortType } from "@/shared";
import "./SearchBar.scss";

const SearchBar = ({
  searchValue,
  setSearchValue,
  isLoading,
  setIsLoading,
  setArticles,
  sortBy,
  page,
  resultsPerPage,
  setTotalResults
}: {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setArticles: React.Dispatch<React.SetStateAction<[] | Article[]>>;
  sortBy: SortType;
  page: number;
  resultsPerPage: number;
  setTotalResults: React.Dispatch<React.SetStateAction<number>>
}): JSX.Element => {
  const [requestError, setRequestError] = useState<number | undefined>(
    undefined
  );

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setRequestError(undefined);
    try {
      const response: AxiosResponse<GET200_Articles> = await axiosInstance.get(
        `v2/everything?q=${searchValue}&sortBy=${sortBy}&pageSize=${resultsPerPage}&page=${page}&apiKey=${apiKey}`
      );
      setTotalResults(response.data.totalResults);
      setArticles(response.data.articles);
    } catch (event) {
      if (event instanceof TypeError) {
        console.error(TypeError);
      } else if (event instanceof EvalError) {
        console.error(EvalError);
      } else if (typeof event === "string") {
        console.error(event);
      } else if (axios.isAxiosError(event)) {
        setRequestError(event.response?.status);
        console.error(event);
      } else {
        console.error(event);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <h1>explore the world news</h1>
      <div className="search-container">
        <form onSubmit={submitHandler}>
          <input
            className="searchbar"
            type="text"
            value={searchValue}
            onChange={changeHandler}
            disabled={isLoading}
            placeholder={
              requestError === 400
                ? "Oops! Empty request"
                : "Enter your request..."
            }
          />
          <button className="submit-button" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Search"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
