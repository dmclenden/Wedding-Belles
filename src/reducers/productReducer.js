import { FETCH_PRODUCTS, SORT_BY_PRICE } from "../action/types";
import { FILTER_PRODUCTS_BY_SIZE  } from "../action/types";

const initialState= {items: [], filteredItems: [] , size:''}
export default function(state=initialState, action){
    switch(action.type){
        case FETCH_PRODUCTS:
            return{...state, items: action.payload, filteredItems:action.payload};
        case FILTER_PRODUCTS_BY_SIZE:
            return{...state, filteredItems: action.payload.items, size: action.payload.size};
        case SORT_BY_PRICE:
                    return{...state, filteredItems: action.payload.items, sort: action.payload.size};
            default:
                return state;
    }
}