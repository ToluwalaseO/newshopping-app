import React from "react";

const Serviceitem = ({ title, description, image, alt }) => {

  const titleWords = title.split(' ');
  const titleFirstLine = titleWords.slice(0, 2).join(' ');
  const titleSecondLine = titleWords.slice(2).join(' ');

  const descWords = description.split(' ');
  const descFirstLine = descWords.slice(0, 5).join(' ');
  const descSecondLine = descWords.slice(5).join(' ');

  return (
    <div className="services-card">
      <div className="services-content">
        <h2>
          {titleFirstLine}
          <br />
          {titleSecondLine}
        </h2>
        <p>
          {descFirstLine}
          <br />
          {descSecondLine}
        </p>
      </div>
      <img src={image} alt={alt} className="services-image" />
    </div>
  );
};

export default Serviceitem;