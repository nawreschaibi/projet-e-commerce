import React from "react";
import "./Product.css";

function product({ product }) {
 //  console.log("this is the basket", basket);
  const addToBasket = () => {
    //dispatch the item into the data layer
     //dispatch({
     // type: "ADD_TO_BASKET",
      // item: {
       //  id: id,
      // title: title,
       //image: image,
      // price: price,
     // },
    // });
  };//
  
  return (
    <div className="product">
      <div className="product_info">
        <p>{product.title}</p>
        <p className="product_price">
          <strong>{product.price}</strong>
          <small>DT</small>
        </p>
      </div>
      <img className="product_img" src={product.Image} alt="" />
      <div class="cont">
   <div class="crtdiv">
      <span class="qty">
      <span class="dec">
      <i class="fa fa-minus-square" aria-hidden="true"></i>
      </span>
     
      <span class="inc">
      <i class="fa fa-plus-square" aria-hidden="true"></i>
      </span>
      </span>
      
   </div>
</div>
    </div>
  );
}

export default product;
