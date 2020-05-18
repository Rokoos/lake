import React, { Fragment } from "react";
import Room from "../Room/Room";
import Spinner from "../Spinner/Spinner";

const RoomsList = ({ rooms, loading }) => {
  const displayRooms = () => {
    return (
      <section className="roomslist">
        <div className="roomslist-center">
          {rooms.map((item) => {
            return <Room key={item.id} room={item} />;
          })}
        </div>
      </section>
    );
  };

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : rooms.length === 0 ? (
        <div className="empty-search">
          <h3>Unfortunately no rooms match your search params</h3>
        </div>
      ) : (
        displayRooms()
      )}
    </Fragment>
  );
};

export default RoomsList;
