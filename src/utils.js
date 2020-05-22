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

export const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export const filteredRooms = ({ rooms, type, price, capacity, breakfast }) => {
  let tempRooms = [...rooms];
  if (type !== "all") {
    tempRooms = tempRooms.filter((room) => room.type === type);
  }

  tempRooms = tempRooms.filter((room) => room.price <= price);

  if (capacity !== 1) {
    tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
  }

  if (breakfast) {
    tempRooms = tempRooms.filter((room) => room.breakfast === true);
  }

  tempRooms = tempRooms.sort((a, b) => (a.price < b.price ? -1 : 1));

  return tempRooms;
};
