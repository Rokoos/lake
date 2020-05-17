import React, { Component, Fragment } from "react";
import { Link } from "react-scroll";
import Theme from "../Theme/Theme";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import RoomContainer from "../RoomContainer/RoomContainer";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Fragment>
        <Theme>
          <Banner
            title="Cheap rooms"
            subtitle="prices starting at €70 per night! "
          >
            <Link
              to="rooms"
              className="btn-primary"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              check it out!
            </Link>
          </Banner>
        </Theme>
        <Services />
        <RoomContainer />
      </Fragment>
    );
  }
}
