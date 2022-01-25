
import { DELETE_PRODUCTT, ADD_PRODUCTT ,GET_PRODUCTT_LOAD,GET_PRODUCTT_SUCCESS,GET_PRODUCTT_FAIL} from "../Const/Productt"

const initialState = {

listProductt:[]
};
const ProducttReducer = ( state =initialState,action)=>{
    switch (action.type){
        case ADD_PRODUCTT:
            return {
                ...state,listProductt:[...state.listProductt,action.payload]
           };

case DELETE_PRODUCTT: 
return {...state,listProductt:[...state.listProductt.filter((el)=>el.id!==action.payload)]};
case GET_PRODUCTT_LOAD:
    return { ...state, loadCours: true };
case GET_PRODUCTT_SUCCESS:
    return { ...state, listProductt: action.payload, loadProductt: false };
case GET_PRODUCTT_FAIL:
    return { ...state, loadProductt: false, errors: action.payload };

default : return state;
       };
 
};

   
       
     






export default ProducttReducer ;