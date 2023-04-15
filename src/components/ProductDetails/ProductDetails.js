import React from 'react'
import "./ProductDetails.css"
import IosShareIcon from '@mui/icons-material/IosShare';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProductSectionData from '../ProductSection/ProductSectionData.js';
import ProductDetailsCoupon from "./ProductDetailsCoupon.png";
import ProductDetailsPrime from "./ProductDetailsPrime.png";

function ProductDetails() {
    const productImage = ProductSectionData.map((product) =>
    <div className="productDetails__mainImage grayText">
        <img className="productDetails__mainImage productDetails__pointer" src={product.image} alt="" />
        <div className="productDetails__centerText">
            <span className="productDetails__mainImageClick2">Roll over image to zoom in</span>
            <span className="productDetails__MainImageClick">Click image to open expanded view</span>
        </div>
    </div>
    )
    const productPrice = ProductSectionData.map((price) =>
    <div>
        {price.price}
    </div>
    )
    const productBrand = ProductSectionData.map((brand) =>
    <div>
        {brand.brand}
    </div>
    )
    const productFlavor = ProductSectionData.map((flavor) =>
    <div>
        {flavor.flavor}
    </div>
    )
    const productDietType = ProductSectionData.map((dietType) =>
    <div>
        {dietType.dietType}
    </div>
    )
    const productProteinSource = ProductSectionData.map((proteinSource) =>
    <div>
        {proteinSource.proteinSource}
    </div>
    )
    const productUnitCount = ProductSectionData.map((unitCount) =>
    <div>
        {unitCount.unitCount}
    </div>
    )
  return (
    <div>
      <div className="productDetails">
        <div className="productDetails__otherImages">
            <img className="productDetails__enlargeImage productDetails__pointer" src="https://m.media-amazon.com/images/I/51vt+41KjuS._AC_US40_.jpg" alt="" />
            <img className="productDetails__enlargeImage productDetails__pointer" src="https://m.media-amazon.com/images/I/412oIBQQqFS._AC_US40_.jpg" alt="" />
            <img className="productDetails__enlargeImage productDetails__pointer" src="https://m.media-amazon.com/images/I/51W1Wlv919S._AC_US40_.jpg" alt="" />
            <img className="productDetails__enlargeImage productDetails__pointer" src="https://m.media-amazon.com/images/I/41C2GMyUt2S._AC_US40_.jpg" alt="" />
            <img className="productDetails__enlargeImage productDetails__pointer" src="https://m.media-amazon.com/images/I/41RiO9iiBsS._AC_US40_.jpg" alt="" />
            <span className="productDetails__otherImagesText">5 VIDEOS</span>
        </div>
        <div className="productDetails__imgContainer">
            {productImage[20]}
        </div>
        <div className="productDetails__enlargeImage2">
            <IosShareIcon className="productDetails__IosShareIcon productDetails__pointer"/>
        </div>
        <div className="productDetails__descriptionContainer">
            <h3>Optimum Nutrition Gold Standard 100% Whey Protein Powder, Extreme Milk Chocolate, 5 Pound (Packaging May Vary)</h3>
            <span className="blueText productDetails__pointer productDetailsOrangeTextHover productDetailsUnderline">Visit the Optimum Nutrition Store</span>
            <span><span className="productDetails__pointer">⭐⭐⭐⭐⭐</span><KeyboardArrowDownIcon className="grayText productDetails__pointer" /><span className="blueText productDetails__pointer productDetailsOrangeTextHover productDetailsUnderline">9,549 ratings</span> | <span className="blueText pointer productDetailsOrangeTextHover productDetailsUnderline productDetails__pointer">143 answered questions</span></span>
            <hr />
            <p className="productDetails__p grayText productDetails__overflow">Price: <span className="redText productDetails__largeFont productDetails__overflow">{productPrice[20]}</span><span className="redText productDetails__overflow"> ($1.01 / Ounce) </span></p>
            <span className="greenText2 productDetails__bold"><CheckCircleIcon className="greenText" /> Save $8.29 at checkout <span className="blueText productDetails__pointer productDetailsOrangeTextHover">Terms</span><KeyboardArrowDownIcon className="grayText productDetails__pointer"/></span>
            <span className="greenText"><img className="productDetails__coupon" src={ProductDetailsCoupon} alt="" /><input type="checkbox" />Save an extra 25% on your first Subscribe and Save Order.<span className="blueText pointer productDetailsOrangeTextHover productDetails__pointer">  Terms</span><KeyboardArrowDownIcon className="grayText pointer"/></span>
            <span><span className="blueText productDetails__bold">Get 5% back ($4.02 in rewards)</span> on the amount charged to your Amazon Prime Rewards Visa Signature Card.</span>
            <span>May be available at a lower price from <span className="blueText productDetails__pointer productDetailsOrangeTextHover productDetailsUnderline">other sellers</span>, potentially without free Prime Shipping.</span>
            <span>To use SNAP EBT, select <span className="productDetails__bold">one-time purchase</span></span>
            <div className="productDetails2">
                <div className="productDetails__itemInformation">
                    <p className="productDetails__p">Brand</p>
                    <p className="productDetails__p">Flavor</p>
                    <p className="productDetails__p">Diet Type</p>
                    <p className="productDetails__p">Protein Source</p>
                    <p className="productDetails__p">Unit Count</p>
                </div>
                <div className="productDetails__itemInformation2">
                    <p className="productDetails__p">{productBrand}</p>
                    <p className="productDetails__p">{productFlavor}</p>
                    <p className="productDetails__p">{productDietType}</p>
                    <p className="productDetails__p">{productProteinSource}</p>
                    <p className="productDetails__p">{productUnitCount}</p>
                </div>
            </div>
            <hr />
            <h4>About this item</h4>
            <ul>
                <li>Packaging may vary - new look with the same trusted quality</li>
                <li>Gold Standard 100% Whey - 24g of protein per serving to help build and maintain muscle when taken ove time with regular resistance training</li>
                <li>5.5g of naturally ocurring branched chain amino acids (BCAA and 11g of naturally occuring essential amino acids (EAAs) per serving to support muscle recovery</li>
                <li>Anytime formula - great before or after exercise, between meals, with a meal, or any time of day when you need extra protein</li>
                <li>The world's best-selling whey protein powder</li>
                <li>Banned substance tested and the highest quality control measures so you feel comfortable and confident consuming the product</li>
            </ul>
            <span><CommentOutlinedIcon className="grayText" /> <span className="blueText productDetails__pointer productDetailsOrangeTextHover productDetailsUnderline">Report incorrect product information.</span></span>
            <hr />
            <h3>Consider a similar item</h3>
            <div className="productDetails">
                <div>
                    <img className="productDetails__considerASimilarItem productDetails__pointer" src="https://m.media-amazon.com/images/I/71xqnuQ5JNL._AC_SY300_SX300_.jpg" alt="" />
                </div>
                <div>
                    <span className="blueText productDetails__pointer productDetailsOrangeTextHover productDetailsUnderline">Garden of Life Sport Whey Portein Powder Vanilla, Premium Grass Fed Whey Protein Isolate Plus Probiotics for Immune System Health, 24g Protein, Non GMO, Gluten Free, Cold Processed - 20 Servings</span>
                    <br/><span className="productDetails__bold">1.41 Pound (Pack of 1)</span>
                    <br/><span>⭐⭐⭐⭐⭐<span className="blueText productDetails__pointer productDetailsOrangeTextHover productDetailsUnderline">(3752)</span></span>
                    <br/><span className="redText">$41.44 <span className="grayText">($1.84/Ounce)<img className="productDetails__prime" src={ProductDetailsPrime} alt="" /></span></span>
                    <span className="greenText">Climate Pledge Friendly</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;