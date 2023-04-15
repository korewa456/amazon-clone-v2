import React, {useState, useEffect} from 'react'
import ReactPaginate from "react-paginate";
import "./SearchResultPagination.css"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const PER_PAGE = 8;

function SearchResultPagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }

  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;

  const currentPageData = data
    .slice(offset, offset + PER_PAGE)
    .map((res, index) => <img key={index} src={res.thumbnailURL} alt=""/>);
  console.log("currentPageData", currentPageData)

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="searchResultPagination__container">

      <ReactPaginate
        previousLabel={<div><KeyboardArrowLeftIcon className="searchResultPagination__directionArrow"/>Previous</div>}
        nextLabel={<div>Next<KeyboardArrowRightIcon className="searchResultPagination__directionArrow"/></div>}
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />

    </div>
  )
}

export default SearchResultPagination;

