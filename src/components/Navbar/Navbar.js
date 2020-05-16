import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="header-title">
              <h1>Kisajno Lake</h1>
            </Link>
          </div>
          <Link className="nav-links" to="/">
            Home
          </Link>
        </div>
      </nav>
    );
  }
}
