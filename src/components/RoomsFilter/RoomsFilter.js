import React from "react";
import { connect } from "react-redux";
import { setFilters } from "../../actions";
import { getUnique } from "../../utils";
import Title from "../Title/Title";

const RoomsFilter = ({
  setFilters,
  rooms: { rooms, type, price, minPrice, maxPrice, capacity, breakfast }
}) => {
  //get unique types
  let types = getUnique(rooms, "type");
  //add all
  types = ["all", ...types];

  //map to jsx
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity").sort();

  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });
  const handleChange = e => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFilters(name, value);
  };

  return (
    <section className="filter-container" id="rooms">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* price */}
        <div className="form-group">
          <label htmlFor="price">price: {price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end price */}
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end guests */}

        {/* extras */}
        <div
          className="form-group"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast included</label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  );
};
const mapStateToProps = state => ({
  rooms: state.rooms
});

export default connect(mapStateToProps, { setFilters })(RoomsFilter);
