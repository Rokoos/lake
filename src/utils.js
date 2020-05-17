export const getMaxPrice = (rooms) => {
  return Math.max(...rooms.map((room) => room.price));
};

export const getMinPrice = (items) => {
  return Math.min(...items.map((item) => item.price));
};
