import React from 'react'
import "./SearchResultLeftBar.css"
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function SearchResultLeftBar() {
  return (
    <div className="SearchResultLeftBar">
      <p className="SearchResultp">Eligible for Free Shipping</p>
      <span className="SearchResultspan"><input type="checkbox" /> Free Shipping by Amazon</span>
      <span className="SearchResultspan">All customers get FREE Shipping on orders over $25 shipped by Amazon</span>

      <p className="SearchResultp">Delivery Day</p>
      <span className="SearchResultspan"><input type="checkbox" /> Get It Today</span>
      <span className="SearchResultspan"><input type="checkbox" /> Get It by Tomorrow</span>

      <p className="SearchResultp">Amazon Local Stores</p>
      <span className="SearchResultspan"><input type="checkbox" /> Amazon Fresh</span>
      <span className="SearchResultspan"><input type="checkbox" /> Bristol Farms</span>
      <span className="SearchResultspan"><input type="checkbox" /> Whole Foods Market</span>

      <p className="SearchResultp">More-sustainable Products</p>
      <span className="SearchResultspan"><input type="checkbox" /> Climate Pledge Friendly</span>

      <p className="SearchResultp">Department</p>
      <span className="SearchResultspan">Sports Nutrition Whey Protein Powders</span>
      <span className="SearchResultspan">Sports Nutrition Protein Powder Blends</span>
      <span className="SearchResultspan">Sports Nutrition Plant Protein Powders</span>
      <span className="SearchResultspan">Sports Nutrition Pea Protein Powders</span>
      <span className="SearchResultspan">Protein Drinks</span>
      <span className="SearchResultspan">Powdered Drink Mixes & Flavorings</span>
      <span className="SearchResultspan">Sports Nutrition Weight Gainers</span>
      <span className="SearchResultspan">Vitamins, Minerals & Supplements</span>

      <p className="SearchResultp">Customer Reviews</p>
      <span className="SearchResultspan"><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarBorderIcon className="StarBorderIcon" /> & Up</span>
      <span className="SearchResultspan"><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /> & Up</span>
      <span className="SearchResultspan"><StarIcon className="StarIcon" /><StarIcon className="StarIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /> & Up</span>
      <span className="SearchResultspan"><StarIcon className="StarIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /><StarBorderIcon className="StarBorderIcon" /> & Up</span>
      
      <p className="SearchResultp">Brands</p>
      <span className="SearchResultspan"><input type="checkbox" /> Optimum Nutrition</span>
      <span className="SearchResultspan"><input type="checkbox" /> Dymatize</span>
      <span className="SearchResultspan"><input type="checkbox" /> Orgain</span>
      <span className="SearchResultspan"><input type="checkbox" /> Body Fortress</span>
      <span className="SearchResultspan"><input type="checkbox" /> Muscle Milk</span>
      <span className="SearchResultspan"><input type="checkbox" /> Premier Protein</span>
      <span className="SearchResultspan"><input type="checkbox" /> Isopure</span>
      <span className="SearchResultspan"><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" /> See more</span>

      <p className="SearchResultp">Price</p>
      <span className="SearchResultspan">Under $25</span>
      <span className="SearchResultspan">$25 to $50</span>
      <span className="SearchResultspan">$100 to $200</span>
      <span className="SearchResultspan">$200 & Above</span>
      <input className="input" placeholder="$ Min" /><input className="input" placeholder="$ Max" /><button className="button">Go</button>

      <p className="SearchResultp">Deals & Discounts</p>
      <span className="SearchResultspan">All Discounts</span>
      <span className="SearchResultspan">Today's Deals</span>

      <p className="SearchResultp">Protein Grams Per Serving</p>
      <span className="SearchResultspan"><input type="checkbox" /> Up to 10 g</span>
      <span className="SearchResultspan"><input type="checkbox" /> 10-19 g</span>
      <span className="SearchResultspan"><input type="checkbox" /> 20-29 g</span>
      <span className="SearchResultspan"><input type="checkbox" /> 30-39 g</span>
      <span className="SearchResultspan"><input type="checkbox" /> 40-49 g</span>
      <span className="SearchResultspan"><input type="checkbox" /> 50 g & above</span>

      <p className="SearchResultp">Protein Supplement Powder Diet Type</p>
      <span className="SearchResultspan"><input type="checkbox" /> Gluten Free</span>
      <span className="SearchResultspan"><input type="checkbox" /> Halal</span>
      <span className="SearchResultspan"><input type="checkbox" /> Keto</span>
      <span className="SearchResultspan"><input type="checkbox" /> Kosher</span>
      <span className="SearchResultspan"><input type="checkbox" /> Paleo</span>
      <span className="SearchResultspan"><input type="checkbox" /> Plant Based</span>
      <span className="SearchResultspan"><input type="checkbox" /> Vegan</span>
      <span className="SearchResultspan"><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" /> See more</span>

      <p className="SearchResultp">Protein Supplement Powder Material Type Free</p>
      <span className="SearchResultspan"><input type="checkbox" /> Dairy Free</span>
      <span className="SearchResultspan"><input type="checkbox" /> Fat Free</span>
      <span className="SearchResultspan"><input type="checkbox" /> Grain Free</span>
      <span className="SearchResultspan"><input type="checkbox" /> Lactose Free</span>
      <span className="SearchResultspan"><input type="checkbox" /> No Artificial Colors</span>
      <span className="SearchResultspan"><input type="checkbox" /> No Artificial Sweeteners</span>
      <span className="SearchResultspan"><input type="checkbox" /> Soy Free</span>
      <span className="SearchResultspan"><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" /> See more</span>

      <p className="SearchResultp">Protein Supplement Powder Age Range</p>
      <span className="SearchResultspan"><input type="checkbox" /> Adult</span>

      <p className="SearchResultp">Protein Supplement Powder Package Type</p>
      <span className="SearchResultspan"><input type="checkbox" /> Bottle</span>
      <span className="SearchResultspan"><input type="checkbox" /> Box</span>
      <span className="SearchResultspan"><input type="checkbox" /> Canister</span>
      <span className="SearchResultspan"><input type="checkbox" /> Jar</span>
      <span className="SearchResultspan"><input type="checkbox" /> Pouch</span>
      <span className="SearchResultspan"><input type="checkbox" /> Tub</span>

      <p className="SearchResultp">Health & Personal Care Format</p>
      <span className="SearchResultspan"><input type="checkbox" /> Capsule</span>
      <span className="SearchResultspan"><input type="checkbox" /> Creams</span>
      <span className="SearchResultspan"><input type="checkbox" /> Gel</span>
      <span className="SearchResultspan"><input type="checkbox" /> Liquids</span>
      <span className="SearchResultspan"><input type="checkbox" /> Powders</span>
      <span className="SearchResultspan"><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" /> See more</span>

      <p className="SearchResultp">Protein Supplement Powder Number of Items</p>
      <span className="SearchResultspan"><input type="checkbox" /> 1</span>
      <span className="SearchResultspan"><input type="checkbox" /> 2</span>
      <span className="SearchResultspan"><input type="checkbox" /> 3 & above</span>

      <p className="SearchResultp">Protein Supplement Powder Recommended Uses for Product</p>
      <span className="SearchResultspan"><input type="checkbox" /> Intra-Workout</span>
      <span className="SearchResultspan"><input type="checkbox" /> Post-Workout</span>
      <span className="SearchResultspan"><input type="checkbox" /> Pre-Workout</span>

      <p className="SearchResultp">Protein Supplement Powder Flavor</p>
      <span className="SearchResultspan"><input type="checkbox" /> Almond</span>
      <span className="SearchResultspan"><input type="checkbox" /> Banana</span>
      <span className="SearchResultspan"><input type="checkbox" /> Birthday Cake</span>
      <span className="SearchResultspan"><input type="checkbox" /> Blueberry</span>
      <span className="SearchResultspan"><input type="checkbox" /> Caramel</span>
      <span className="SearchResultspan"><input type="checkbox" /> Cherry</span>
      <span className="SearchResultspan"><input type="checkbox" /> Chocolate</span>
      <span className="SearchResultspan"><KeyboardArrowDownIcon className="KeyboardArrowDownIcon" /> See more</span>

      <p className="SearchResultp">Protein Supplement Powder Product Benefits</p>
      <span className="SearchResultspan"><input type="checkbox" /> Muscle Growth</span>
      <span className="SearchResultspan"><input type="checkbox" /> Weight Loss</span>

      <p className="SearchResultp">Subscription Options</p>
      <span className="SearchResultspan"><input type="checkbox" /> Subscribe & Save Eligible</span>

      <p className="SearchResultp">Packaging Option</p>
      <span className="SearchResultspan"><input type="checkbox" /> Fustration-Free Packaging</span>

      <p className="SearchResultp">International Shipping</p>
      <span className="SearchResultspan"><input type="checkbox" /> International Shipping Eligible</span>

      <p className="SearchResultp">Availability</p>
      <span className="SearchResultspan"><input type="checkbox" /> Include Out of Stock</span>
    </div>
  )
}

export default SearchResultLeftBar;
