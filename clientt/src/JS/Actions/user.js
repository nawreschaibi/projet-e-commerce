import { LOAD_USER ,REGISTER_USER, LOGIN_USER ,FAIL_USER ,LOGOUT_USER} from "../Const/user";
import axios from "axios";

export const REGISTER_USER =(user)=>async (dispatch) => {
    dispatch({type:LOAD_USER});
    try {
  const result= await axios.post ("/user/register",user)
        dispatch ({type:REGISTER_USER,payload:result.data});}
        catch (error) {
            dispatch({type:FAIL_USER,payload:error.response.data})
        }
};

export const LOGIN_USER =(user)=>async (dispatch) => {
    dispatch({type:LOAD_USER});
    try {
   const result= await axios.post ("/user/login",user)
   localStorage.setItem("token",result.data.token)
      dispatch ({type:LOGIN_USER,payload:result.data});}
     catch (error) {
           dispatch({type:FAIL_USER,payload:error.response.data})
         }
 };