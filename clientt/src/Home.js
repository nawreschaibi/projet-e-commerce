import React, { useEffect } from "react";
import "./home.css";
import marr from "./marr.jpg";
import Product from "./product";

import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./JS/Actions/Productt";

function Home() {
  const dispatch = useDispatch();
  const Productt = useSelector((state) => state.ProducttReducer.listProductt);
  const loadProductt = useSelector(
    (state) => state.ProducttReducer.loadProductt
  );
  console.log(Productt, loadProductt);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <div className="home">
        <div className="home_container">
        <img className="Home_image" src={marr} />
          <h1 className="soli">SOLEMAG</h1>
          <p className="qote">CHOOSE ONE AND GET THE BEST PRICE</p>

           
            {Productt ? (
              Productt.map((el) => <Product product={el} />)
            ) : (
              <h1>loading</h1>
            )}
          </div> 
        </div>
      </div>
    
  );
}

export default Home;
