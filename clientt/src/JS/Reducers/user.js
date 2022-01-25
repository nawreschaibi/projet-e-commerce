
import { LOAD_USER ,REGISTER_USER, LOGIN_USER ,FAIL_USER ,LOGOUT_USER} from "../Const/user";





const initialState={
    user:null,
    LOAD_USER:false,
    errors:null,
    isAuth:false,
};

export const useReducer =(state=initialState,{type,payload})=>{
 switch (type) {
    case REGISTER_USER:
        localStorage.setItem("token",payload.token);
        return{...state,LOAD_USER:false,user:payload.user,isAuth:true}
    case LOGIN_USER:
        localStorage.setItem("token",payload.token);
        return{...state,LOAD_USER:false,user:payload.user,isAuth:true}
    case LOAD_USER:
        return{...state,LOAD_USER:true};
     case FAIL_USER:  
     return {...state,LOAD_USER:false,errors:payload} ; 
default:
    return state;
 }
    

}