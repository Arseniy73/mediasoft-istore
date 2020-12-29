import allGoods from "./allGoods";
import { ADD_TO_CART, REMOVE_FROM_CART, SET_PCS, SHOW_ALL, SORT_GOODS } from "./types";


const initialState = {
    goods: allGoods,
    cartGoods: [],
    totalSum: [0]
}

function total(goods) {
    if(goods.length)
    return goods.map(good => good.pcs*good.price).reduce((sum, value) => sum + value)
    else return 0
}

const handlers = {
    [SORT_GOODS]: (state, action) => ({...state, goods: allGoods.filter(good => good.sort === action.payload)}),
    [SHOW_ALL]: state => ({...state, goods: allGoods}),
    [ADD_TO_CART]: (state, action) => {
        const contain = state.cartGoods.find(item => item.id === action.payload)
        if (!contain) {
            const newCartGoods = state.cartGoods.concat(allGoods.filter(good => good.id === action.payload))
            return {...state, cartGoods: newCartGoods, totalSum: total(newCartGoods)}
        } return state
    },
    [REMOVE_FROM_CART]: (state, action) => {
        const newCartGoods = state.cartGoods.filter(good => good.id !== action.payload)
        return {...state, cartGoods: newCartGoods, totalSum: total(newCartGoods)}
    },
    [SET_PCS]: (state, action) => {
        const newCartGoods = state.cartGoods
        let item = newCartGoods.find(good => good.id === action.id)
        item.pcs = action.payload
        
        return {...state, cartGoods: newCartGoods, totalSum: total(newCartGoods)}
    },
    DEFAULT: state => state 
}

export const goodsReducer = (state = initialState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action) 
}
