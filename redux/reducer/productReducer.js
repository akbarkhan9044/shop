import {ACTION} from '@/redux/constant/action_constant';
const initialState={
    cart:[]
}


export default function productReducer(state=initialState,action){

    switch(action.type){
        case "ADD_TO_CART":
        const index=state.cart.findIndex((item)=>item._id=== action.payload._id);
        if(index===-1){
       
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        }else{
            const removeItem=state.cart.filter((item)=>item._id !== action.payload._id);
            
            return {

                ...state,
                cart:removeItem
            }
        }
        case ACTION.REMOVE_FROM_CART:
            const removeItem=state.cart.filter((item)=>item._id=== action.payload.id);
            return{
                ...state,
                cart:removeItem
            }
        default:
            return state;

    }

}