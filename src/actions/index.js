import { database } from "../firebase/firebase";
import { FETCH_ROOMS, SET_LOADING, SET_PRICES, SET_FILTERS } from "./types";

const fetchRooms = (data) => ({
  type: FETCH_ROOMS,
  data,
});

const setLoading = () => ({
  type: SET_LOADING,
});

export const setFilters = (name, value) => ({
  type: SET_FILTERS,
  name,
  value,
});

export const setPrices = (data) => {
  const maxPrice = getMaxPrice(data);
  const minPrice = getMinPrice(data);

  return {
    type: SET_PRICES,
    maxPrice,
    minPrice,
  };
};
