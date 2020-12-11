import allGoods from "./allGoods";
import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_ALL, SORT_GOODS } from "./types";


const initialState = {
    goods: allGoods,
    cartGoods: []
}

export const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_GOODS:
            return {...state, goods: allGoods.filter(good => good.sort === action.payload)}
        case SHOW_ALL:
            return {...state, goods: allGoods}
        case ADD_TO_CART:
            const contain = state.cartGoods.find(item => item.id === action.payload)
            if (!contain) {
                return {...state, cartGoods: state.cartGoods.concat(allGoods.filter(good => good.id === action.payload))}
            } return state
        case REMOVE_FROM_CART:
            return {...state, cartGoods: state.cartGoods.filter(good => good.id !== action.payload)}
        default: return state
    }
}