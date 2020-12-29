const getGoods = (state) => state.goods.goods;
const getCartGoods = (state) => state.goods.cartGoods;
const getTotalSum = (state) => state.goods.totalSum


export { getGoods, getCartGoods, getTotalSum };