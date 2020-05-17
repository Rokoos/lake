import React, { Component } from "react";
import { FaSwimmer, FaShip, FaWalking, FaBicycle } from "react-icons/fa";

import Title from "../Title/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaSwimmer />,
        title: "endless swimming",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla soluta mollitia saepe"
      },

      {
        icon: <FaShip />,
        title: "carefree sailing",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla soluta mollitia saepe"
      },
      {
        icon: <FaWalking />,
        title: "walking routes",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla soluta mollitia saepe"
      },
      {
        icon: <FaBicycle />,
        title: "bicycle routes",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla soluta mollitia saepe"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Kisajno area offers:" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
