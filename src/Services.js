import React from "react";
import Serviceitem from "./Serviceitem";
import "./Services.css";

const servicesData = [
  {
    title: "Frequently Asked Questions",
    description: "Updates on safe shopping in our stores",
    image: "/friends.jpg",
    alt: "FAQ Image"
  },
  {
    title: "Online Payment Process",
    description: "Updates on safe shopping in our stores",
    image: "/onlinepic.jpg",
    alt: "Online Payment Image"
  },
  {
    title: "Home Delivery Options",
    description: "Updates on safe shopping in our stores",
    image: "/deliveryman.jpg",
    alt: "Home Delivery Image"
  }
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h1>Services To Help You Shop</h1>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <Serviceitem
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            alt={service.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;