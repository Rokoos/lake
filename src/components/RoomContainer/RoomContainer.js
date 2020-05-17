import React from "react";
import RoomsList from "../RoomsList/RoomsList";
import { connect } from "react-redux";
import { startFetchRooms } from "../../actions";

class RoomContainer extends React.Component {
  componentDidMount() {
    this.props.startFetchRooms();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <RoomsList rooms={this.props.rooms} loading={this.props.loading} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  rooms: state.rooms,
  loading: state.rooms.loading,
});
export default connect(mapStateToProps, { startFetchRooms })(RoomContainer);
