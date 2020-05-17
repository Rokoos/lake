import {
  FETCH_ROOMS,
  SET_LOADING,
  SET_PRICES,
  SET_FILTERS,
} from "../actions/types";

const INITIAL_STATE = {
  rooms: [],
  sortedRooms: [],
  type: "all",
  price: 0,
  minPrice: 0,
  maxPrice: 0,
  breakfast: false,
  capacity: 1,
  loading: true,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ROOMS:
      return {
        ...state,
        rooms: action.data,
        sortedRooms: action.data,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case SET_PRICES:
      return {
        ...state,
        price: action.maxPrice,
        maxPrice: action.maxPrice,
        minPrice: action.minPrice,
      };
    case SET_FILTERS:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};
