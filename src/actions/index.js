import { database } from "../firebase";
import { FETCH_ROOMS, SET_LOADING, SET_PRICES, SET_FILTERS } from "./types";

import { getMinPrice, getMaxPrice } from "../utils";

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

export const startFetchRooms = () => {
  return (dispatch) => {
    return database
      .collection("rooms")
      .get()
      .then((snapshot) => {
        const rooms = [];
        snapshot.docs.forEach((doc) => {
          rooms.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        dispatch(fetchRooms(rooms));
        dispatch(setLoading());
        dispatch(setPrices(rooms));
      });
  };
};
