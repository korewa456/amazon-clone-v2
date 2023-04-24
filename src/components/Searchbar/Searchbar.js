import React, { useState } from "react";
import "./Searchbar.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import SignInButton from "../SignInButton/SignInButton"
import LogoutButton from "../LogoutButton/LogoutButton"


function SearchBar({isLoggedIn}) {
  const [searchInput, setSearchInput] = useState(null);
  const [signInIsShown, setSignInIsShown] = useState(false);
  const [openSignInProfile, setOpenSignInProfile] = useState(false);
  const [logoutIsShown, setLogoutIsShown] = useState(false);
  const [openLogoutProfile, setOpenLogoutProfile] = useState(false);


  function getData(val) {
    setSearchInput(val.target.value);
  }
  let linkto = "/";
  if (
    searchInput === "Protein Powder" ||
    searchInput === "protein powder" ||
    searchInput === "protein"
  ) {
    linkto = "/searchResults";
  } else {
    linkto = "/";
  }
  let button = (
    <Link to={linkto}>
      <SearchIcon className="searchBar__searchIcon searchBar__searchIconHover searchBar__roundedEdgesRight searchBarHover" />
    </Link>
  );

  return (
    <div className="searchBar">
      {/* Logo */}
      <Link to="/">
        <img
          className="searchBar__logo searchBarHover"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Deliver to */}
      <div className="searchBar__Nav">
          {isLoggedIn ? 
            <div className="searchBar__option">
              <span className="searchBar__optionLine1 searchBar__padding">
                Deliver to Brian
              </span>
              <span className="searchBar__optionLine2">
                <LocationOnOutlinedIcon className="searchBar__locationIcon" />
                Eastvale 92880
              </span>
            </div>
          : 
            <div className="searchBar__option">
              <span className="searchBar__optionLine1 searchBar__padding">
                Hello
              </span>
              <span className="searchBar__optionLine2">
                <LocationOnOutlinedIcon className="searchBar__locationIcon" />
                Select your address
              </span>
            </div>
          }
      </div>
      {/* Search Box */}
      <div className="searchBar__search">
        <input
          type="text"
          className="searchBar__searchInput searchBar__roundedEdgesLeft"
          onChange={getData}
          placeholder="Search Amazon"
        />
        {button}
      </div>
      {/* Links */}
      <div className="searchBar__Nav">
        {/* Language Change */}
        <div className="searchBar__option">
          <span className="searchBar__optionLine1"></span>
          <span className="searchBar__optionLine2">
            <img
              className="searchBar__languageFlag"
              src="https://em-content.zobj.net/thumbs/240/twitter/322/flag-united-states_1f1fa-1f1f8.png"
              alt=""
            />
            EN
            <ArrowDropDownIcon className="searchBar__ArrowDropDownIcon searchBar__gray" />
          </span>
        </div>
        {/* 1st Link */}
        {isLoggedIn ?
          <div className="searchBar__option">
            <span className="searchBar__optionLine1" onMouseEnter={() => setLogoutIsShown(true)}
              onMouseLeave={() => setLogoutIsShown(false)} onClick={() => setOpenLogoutProfile((prev) => !prev)}>Hello, Brian</span>
            <span className="searchBar__optionLine2" onMouseEnter={() => setLogoutIsShown(true)}
              onMouseLeave={() => setLogoutIsShown(false)} onClick={() => setOpenLogoutProfile((prev) => !prev)}>Account & Lists{" "}<ArrowDropDownIcon className="searchBar__ArrowDropDownIcon searchBar__gray" /></span>
          </div>
        :
          <div className="searchBar__option">
            <span className="searchBar__optionLine1" onMouseEnter={() => setSignInIsShown(true)}
              onMouseLeave={() => setSignInIsShown(false)} onClick={() => setOpenSignInProfile((prev) => !prev)}>Hello, sign in</span>
            <span className="searchBar__optionLine2" onMouseEnter={() => setSignInIsShown(true)}
              onMouseLeave={() => setSignInIsShown(false)} onClick={() => setOpenSignInProfile((prev) => !prev)}>Account & Lists{" "}<ArrowDropDownIcon className="searchBar__ArrowDropDownIcon searchBar__gray" /></span>
          </div>
        }
        {signInIsShown && (
        <div>
          <SignInButton />
        </div>
      )}
      {
        openSignInProfile && <SignInButton />
      }
      {logoutIsShown && (
        <div>
          <LogoutButton />
        </div>
      )}
      {
        openLogoutProfile && <LogoutButton />
      }
        {/* 2nd Link */}
        <div className="searchBar__option">
          <span className="searchBar__optionLine1">Returns</span>
          <span className="searchBar__optionLine2">& Orders</span>
        </div>
        {/* Shopping Cart */}
        <div className="searchBar__optionBasket">
          <Link
            to="/checkOut"
            style={{ textDecoration: "none", color: "white" }}
          >
            <ShoppingCartOutlinedIcon className="searchBarHover" />
            <span className="searchBar__optionLine2 searchBar__shoppingCartIcon">
              Cart
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
