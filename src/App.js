import "./App.css";
import React from "react";
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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchBar />
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
              <SearchBar />
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
              <SearchBar />
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
              <SearchBar />
              <SearchResults />
              <Footer_One />
              <FooterPart2 />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
