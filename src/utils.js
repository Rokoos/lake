export const getMaxPrice = (rooms) => {
  return Math.max(...rooms.map((room) => room.price));
};

export const getMinPrice = (items) => {
  return Math.min(...items.map((item) => item.price));
};

export const getRoom = (rooms, slug) => {
  let tempRooms = [...rooms];
  const room = tempRooms.find((room) => room.slug === slug);
  return room;
};
