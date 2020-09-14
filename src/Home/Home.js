import React from "react";

import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <>
      <div className="blur"></div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            <Product
              id="23423"
              title="The Lean Startup"
              price={29}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={5}
            />
            <Product
              id="49538094"
              title="Kenwood kMix 051 500-Watt Stand Mixer (Raspberry Red)"
              price={239}
              image="https://images-na.ssl-images-amazon.com/images/I/41dIhGZ8qWL.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="8987"
              title="Fire TV Stick 4K with All-New Alexa Voice Remote | Streaming Media Player"
              price={199}
              image="https://images-na.ssl-images-amazon.com/images/I/61RfMDdt-iL._SL1000_.jpg"
              rating={4}
            />
            <Product
              id="8765"
              title="OnePlus 8 Pro (Glacial Green 12GB RAM+256GB Storage)"
              price={800}
              image="https://images-na.ssl-images-amazon.com/images/I/61n6Ovq6EdL._SL1500_.jpg"
              rating={4}
            />
            <Product
              id="8763"
              title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
              price={2000}
              image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="345"
              title="LG 165.1 cm (65 inches) OLED65B8PTA 4K OLED Smart TV (Black)"
              price={2300}
              image="https://images-na.ssl-images-amazon.com/images/I/71HKdkz%2Bv4L._SL1500_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
