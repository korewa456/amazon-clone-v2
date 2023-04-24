import "./App.css";
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductPage from "./ProductPage";
import SearchBar from "./components/Searchbar/Searchbar";
import ProductSection from "./components/ProductSection/ProductSection";
import FooterPart2 from "./components/FooterPart2/FooterPart2";
import ShoppingCartPage from "./components/ShoppingCartPage/ShoppingCartPage";
import Frequent_purchase_Carousel from "./components/FrequentPurchase/Frequent_purchase_carousel";
import Footer_One from "./components/footer_partOne/Footer_partOne";
import SearchResults from "./components/SearchResults/SearchResults";
import NavBar from "./components/Nav-Bar/Nav-Bar";
import LoginPage from "./components/LoginPage/LoginPage";
import CreateAccount from "./components/LoginPage/CreateAccount"
import ProductComponentTemplate from "./components/ProductComponentTemplate/ProductComponentTemplate";
import ProductComponent from "./components/ProductComponentTemplate/ProductComponent"
import PasswordPage from "./components/LoginPage/PasswordPage"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoginClick() {
    setIsLoggedIn(true);
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchBar isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />
              <NavBar />
              <ProductSection />
              <Home />
              <Frequent_purchase_Carousel />
              <Footer_One />
              <FooterPart2 />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <LoginPage />
            </div>
          }
        />
                <Route
          path="/password"
          element={
            <div>
              <PasswordPage isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />
            </div>
          }
        />
                <Route
          path="/register"
          element={
            <div>
              <CreateAccount />
            </div>
          }
        />
        <Route
          path="/order"
          element={
            <div>
              <h1>Order</h1>
            </div>
          }
        />
        <Route
          path="/ProductPage"
          element={
            <div>
              <SearchBar isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />
              <ProductPage />
              <Footer_One />
              <FooterPart2 />
            </div>
          }
        />
        <Route
          path="/checkOut"
          element={
            <div>
              <SearchBar isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />
              <ShoppingCartPage />
              <Footer_One />
              <FooterPart2 />
            </div>
          }
        />
        <Route
          path="/searchResults"
          element={
            <div>
              <SearchBar isLoggedIn={isLoggedIn} handleLoginClick={handleLoginClick} />
              <SearchResults />
              <Footer_One />
              <FooterPart2 />
            </div>
          }
        />
        <Route
          path="/ProductComponentTemplate"
          element={
            <div>
              <ProductComponentTemplate />
            </div>
          }
        />
        <Route
          path="/ProductComponent"
          element={
            <div>
              <ProductComponent />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
