import { SHOW_ALL, SORT_GOODS } from "./types";

const allGoods = [
    {id: 1, title: "Детское кресло", price: "6400", sort: 'chair', img: './img/goodsCard/1.jpg'},
    {id: 2, title: "Диван Forest", price: "24990", sort: 'sofa', img: './img/goodsCard/2.jpg'},
    {id: 3, title: "Диван Red Vine", price: "54990", sort: 'sofa', img: './img/goodsCard/3.jpg'},
    {id: 4, title: "Диван Yellow", price: "29990", sort: 'sofa', img: './img/goodsCard/4.jpg'},
    {id: 5, title: "Диван Валенсия", price: "89990", sort: 'sofa', img: './img/goodsCard/5.jpg'},
    {id: 6, title: "Диван Куба", price: "39900", sort: 'sofa', img: './img/goodsCard/6.jpg'},
    {id: 7, title: "Диван Лион", price: "42900", sort: 'sofa', img: './img/goodsCard/7.jpg'},
    {id: 8, title: "Диван Милан", price: "69900", sort: 'sofa', img: './img/goodsCard/8.jpg'},
    {id: 9, title: "Настольная лампа Steel", price: "3700", sort: 'lamp', img: './img/goodsCard/9.jpg'},
    {id: 10, title: "Настольная лампа Venice", price: "8400", sort: 'lamp', img: './img/goodsCard/10.jpg'},
    {id: 11, title: "Настольная лампа Volcano", price: "4800", sort: 'lamp', img: './img/goodsCard/11.jpg'},
    {id: 12, title: "Офисное кресло Orange", price: "4800", sort: 'chair', img: './img/goodsCard/12.jpg'},
]

const initialState = {
    goods: allGoods
}

/* function sortItems (sort) {
    setGoods(allGoods)
    setGoods((prevGoods) => prevGoods.filter(good => good.sort === sort))
} */

/* const handlers = {
    [SORT_GOODS]: (state = initialState, action) => ({
      ...state,
      goods: {...state, goods: [...state.goods.filter(good => good.sort === action.payload)]}
    }),
};

export const goodsReducer = (state = initialState, action) => {
    if(handlers[action.type]) {
        return handlers[action.type](state.action)
    }
    return state
} */

/* const handlers = {
    [SORT_GOODS]: (state = initialState, action) => ({
      ...state,
      goods: {...state, goods: [...state.goods.filter(good => good.sort === action.payload)]}
    }),
}; */

export const goodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_GOODS:
            return {...state, goods: allGoods.filter(good => good.sort === action.payload)}
        case SHOW_ALL:
            return {...state, goods: allGoods}
        default: return state
    }
}