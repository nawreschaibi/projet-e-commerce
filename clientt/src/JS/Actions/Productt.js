import {
  ADD_PRODUCTT,
  DELETE_PRODUCTT,
  GET_PRODUCTT_LOAD,
  GET_PRODUCTT_SUCCESS,
  GET_PRODUCTT_FAIL,
} from "../Const/Productt";
import axios from "axios";

export const ADDPRODUCTT = (Productt) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCTT });
  try {
    const result = await axios.post("/Productts/add", Productt);
    dispatch({ type: ADD_PRODUCTT, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTT_FAIL, payload: error.response.data });
  }
};
export const DELETEPRODUCTT = (Productt) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCTT });
  try {
    const result = await axios.post("/Productts/delete", Productt);
    localStorage.setItem("token", result.data.token);
    dispatch({ type: DELETE_PRODUCTT, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTT_FAIL, payload: error.response.data });
  }
};

export const getProduct = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTT_LOAD });
  try {
    let result = await axios.get("/Productts/");
    dispatch({ type: GET_PRODUCTT_SUCCESS, payload: result.data.result });
  } catch (error) {
    dispatch({ type: GET_PRODUCTT_FAIL, payload: error });
    console.log(error);
  }
};
