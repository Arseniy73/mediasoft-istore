import { ADD_TO_CART, REMOVE_FROM_CART, SET_PCS, SHOW_ALL, SORT_GOODS } from "./types";

const sortGoods = (sort) => ({
  type: SORT_GOODS,
  payload: sort
});

const showAll = () => ({
    type: SHOW_ALL,
});

const addToCart = (id) => ({
    type: ADD_TO_CART,
    payload: id
});

const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

const setPcs = (id, pcs) => ({
  type: SET_PCS,
  payload: pcs,
  id
})

export { sortGoods, showAll, addToCart, removeFromCart, setPcs };