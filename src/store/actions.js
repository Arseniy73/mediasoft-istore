import { SHOW_ALL, SORT_GOODS } from "./types";

const sortGoods = (sort) => ({
  type: SORT_GOODS,
  payload: sort
});

const showAll = () => ({
    type: SHOW_ALL,
  });

export { sortGoods, showAll };