import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADDPRODUCTT } from "./JS/Actions/Productt";
import "./modal.css";

function Modal() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [Image, setImage] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <div class="section full-height">
        <input
          class="modal-btn"
          type="checkbox"
          id="modal-btn"
          name="modal-btn"
        />
        <label for="modal-btn">
          ADD A PRODUCT<i class="uil uil-expand-arrows"></i>
        </label>
        <div class="modal">
          <div class="modal-wrap">
            <input
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              placeholder="Image"
              onChange={(e) => setImage(e.target.value)}
            />

            <button
              type="submit"
              onClick={() =>
                dispatch(
                  ADDPRODUCTT({ title: title, price: price, Image: Image })
                )
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
