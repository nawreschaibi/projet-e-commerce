import Modal from "./Modal";
import React, { useEffect } from "react";
import "./shop.css";
import Product from "./product";

import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./JS/Actions/Productt";

function Shop() {
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
      <Modal />

            
          );
        ; : (
                <h1>loading</h1>
              )

            </div>
         
    
  );
}

export default Shop;
