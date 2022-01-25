import { Route,redirect } from "react-router-dom";
import React from "react"

const PrivateRoute=({ element:element,...rest})=>{
const isAuth=localStorage.getItem("token");
    if (isAuth){
return<Route element={element}{...rest}/>;
    }
    return
<redirect path="/"/>;



};
export default PrivateRoute;