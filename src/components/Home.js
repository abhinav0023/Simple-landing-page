import Center from "./Center";
import Footer from "./Footer";
import "./Home.css";
import React from "react";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home__Left">
          <h1 className="home__Heading"><span>Lorem</span> ipsum dolores <span>sit amet</span></h1>
          <p className="home__Paragraph">
             ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lobortis posuere pellentesque
          </p>
        </div>
        <div className="home__Right"></div>
      </div>
      <Center/>
      <Footer/>
    </>
  );
}

export default Home;
