import React from "react";
import './SearchBar.scss';

function SearchBar(): JSX.Element {

  return (
    <div className="wrapper">
      <h1>find everywhere</h1>
      <div className="search-container">
        <form>
          <input type="text" placeholder="&#128269;" />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;