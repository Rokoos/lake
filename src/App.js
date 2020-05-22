import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SingleRoom from "./components/SingleRoom/SingleRoom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/:slug" component={SingleRoom} />
      </Switch>
    </div>
  );
}

export default App;
