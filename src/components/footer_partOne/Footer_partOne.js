import React from 'react';
import "./Footer_partOne.css";

function Footer_One() {
  return (
    <div>
         <div className='back'>Back To Top</div>
         <div className='footer__container'>
            <div className='footer__container__categories'>
               <div className='footer__title' > Get to Know Us</div>
               <div className='footer__hover'> Amazon Newsletter</div>
               <div className='footer__hover'> About Amazon</div>
               <div className='footer__hover'> Accessibility</div>
               <div className='footer__hover'> Sustainability</div>
               <div className='footer__hover'> Press Center</div>
               <div className='footer__hover'> Investor Relations</div>
               <div className='footer__hover'> Amazon Devices</div>
               <div className='footer__hover'> Amazon Science</div>

            </div>
            <div className='footer__container__categories'>
                <div className='footer__title'> Make Money with Uss</div>
                <div className='footer__hover'> Sell products on Amazon</div>
                <div className='footer__hover'> Sell apps on Amazon</div>
                <div className='footer__hover'> Supply to Amazon</div>
                <div className='footer__hover'> Protect & Build Your Brand</div>
                <div className='footer__hover'> Become an Affiliate</div>
                <div className='footer__hover'> Become a Delivery Driver</div>
                <div className='footer__hover'> Start a package delivery business</div>
                <div className='footer__hover'> Advertise Your Products</div>
                <div className='footer__hover'> Self-Publish with Us</div>
                <div className='footer__hover'> Host an Amazon Hub</div>
                <div className='footer__hover'> ›See More Ways to Make Money</div>


            </div>
            <div className='footer__container__categories'>
                <div className='footer__title'> Amazon Payment Products</div>
                <div className='footer__hover'> Amazon Rewards Visa Signature Cards</div>
                <div className='footer__hover'> Amazon Store Card</div>
                <div className='footer__hover'> Amazon Secured Card</div>
                <div className='footer__hover'> Amazon Business Card</div>
                <div className='footer__hover'> Shop with Points</div>
                <div className='footer__hover'> Credit Card Marketplace</div>
                <div className='footer__hover'> Reload Your Balance</div>
                <div className='footer__hover'> Amazon Currency Converter</div>
            </div>
            <div className='footer__container__categories'>
                <div className='footer__title'> Let Us Help You</div>
                <div className='footer__hover'> Amazon and COVID-19</div>
                <div className='footer__hover'> Your Account</div>
                <div className='footer__hover'> Your Orders</div>
                <div className='footer__hover'> Shipping Rates & Policies</div>
                <div className='footer__hover'> Amazon Prime</div>
                <div className='footer__hover'> Returns & Replacements</div>
                <div className='footer__hover'> Manage Your Content and Devices</div>
                <div className='footer__hover'> Your Recalls and Product Safety Alerts</div>
                <div className='footer__hover'> Amazon Assistant</div>
                <div className='footer__hover'> Help</div>
            </div>

         </div>
         
         <div className='footer__dropDown'>
          <img 
          className='logo'
          src='https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png'
          alt='amazon logo'
          />
          <select className='dropdown__language__one'>
            <option>🌐 English</option>
            <option>🌐 espanol</option>
          </select>
          <select className='dropdown__language__two'>
            <option>🇺🇸 United State</option>
            <option>🇨🇦 Canada</option>
            <option>🇪🇺 Europe</option>

          </select>
         </div>
    
   
    
   





    
    </div>
  )
}

export default Footer_One