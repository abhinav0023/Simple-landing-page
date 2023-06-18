import React from "react";
import "./Center.css";
import card_1 from "./images/card_1.png";
import card_2 from "./images/card_2.png";
import card_3 from "./images/card_3.png";

function Center() {
  return (
    <div className="center">
      <div className="center__heading">
        <h1 className="heading">Craft , Build & Ship</h1>
      </div>
      <div className="center__Cards">
        <div className="card1 card">
          <img className="image" src={card_1} alt="c1" />
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card2 card">
          <img className="image" src={card_2} alt="c2" />
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="card3 card">
          <img className="image" src={card_3} alt="c3" />
          <h3>Lorem</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}

export default Center;
