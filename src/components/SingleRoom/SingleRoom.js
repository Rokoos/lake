import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import StyledTheme from "../StyledTheme/StyledTheme";
import Banner from "../Banner/Banner";
import { startFetchRooms } from "../../actions";
import { getRoom } from "../../utils";

class SingleRoom extends Component {
  state = {
    slug: this.props.match.params.slug,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchRooms();
  }
  render() {
    const room = getRoom(this.props.rooms, this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/" className="btn-primary">
            home
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      price,
      extras,
      breakfast,
      images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    return (
      <React.Fragment>
        <StyledTheme img={mainImg}>
          <Banner title={`${name}`}>
            <Link to="/" className="btn-primary">
              home
            </Link>
          </Banner>
        </StyledTheme>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>

              <h6>
                max capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>

              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ rooms: { rooms }, loading }) => ({
  rooms,
  loading,
});
export default connect(mapStateToProps, { startFetchRooms })(SingleRoom);
