import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
      },
      {
        icon: <FaHiking />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle Van",
        info:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
      },
      {
        icon: <FaBeer />,
        title: "Free Beer",
        info:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
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
