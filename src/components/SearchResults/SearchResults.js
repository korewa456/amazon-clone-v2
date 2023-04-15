import React from 'react'
import "./SearchResults.css"
import SearchResultLeftBar from "../SearchResultLeftBar/SearchResultLeftBar"
import SearchResultProductPage from "../SearchResultProductPage/SearchResultProductPage"

function SearchResults() {
  return (
    <div className="SearchResults">
      <SearchResultLeftBar />
      <SearchResultProductPage />
    </div>
  )
}

export default SearchResults;
