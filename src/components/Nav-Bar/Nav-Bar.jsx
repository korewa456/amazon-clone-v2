import React from 'react';
import "./Nav-Bar.css";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav className='navBar'>
    <div className='navBar__option'>
    <Link className='navBar__optionOne'><span>Clinic</span>  </Link>
    <Link className='navBar__optionOne'><p>Same-Day Delivery</p></Link>
    <Link className='navBar__optionOne'><span>Amazon Basic</span>  </Link>
    <Link className='navBar__optionOne'><span>Customer Service</span>  </Link>
    <Link className='navBar__optionOne'><span>Groceries</span>  </Link>
    <Link className='navBar__optionOne'><span>Health & Household</span>  </Link>
    <Link className='navBar__optionOne'><span>Coupons</span>  </Link>
    <Link className='navBar__optionOne'><span>Amazon Home</span>  </Link>
    <Link className='navBar__optionOne'><span>Pet Supplies</span>  </Link>
    <Link className='navBar__optionOne'><span>Beauty & Personal Care</span>  </Link>
    <Link className='navBar__optionOne'><span>Home Improvement</span>  </Link>
    <Link className='navBar__optionOne'><span>Pharmacy</span>  </Link>
    </div>

    </nav>
  )
}

export default NavBar