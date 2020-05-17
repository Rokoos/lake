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
    default:
      return state;
  }
};
