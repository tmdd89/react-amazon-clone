import React from "react";
import faker from "faker";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_ENG_PVD6150._CB416179696_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id={faker.random.uuid()}
          title={faker.commerce.productName()}
          price={parseInt(faker.commerce.price())}
          rating={Math.floor(Math.random() * 5) + 1}
          image={faker.image.image()}
          dep={faker.commerce.department()}
          desc={faker.commerce.productDescription()}
        />
        <Product
          id={faker.random.uuid()}
          title={faker.commerce.productName()}
          price={parseInt(faker.commerce.price())}
          rating={Math.floor(Math.random() * 5) + 1}
          image={faker.image.image()}
          dep={faker.commerce.department()}
          desc={faker.commerce.productDescription()}
        />
      </div>
      <div className="home__row">
        <Product
          id={faker.random.uuid()}
          title={faker.commerce.productName()}
          price={parseInt(faker.commerce.price())}
          rating={Math.floor(Math.random() * 5) + 1}
          image={faker.image.image()}
          dep={faker.commerce.department()}
          desc={faker.commerce.productDescription()}
        />
        <Product
          id={faker.random.uuid()}
          title={faker.commerce.productName()}
          price={parseInt(faker.commerce.price())}
          rating={Math.floor(Math.random() * 5) + 1}
          image={faker.image.image()}
          dep={faker.commerce.department()}
          desc={faker.commerce.productDescription()}
        />
        <Product
          id={faker.random.uuid()}
          title={faker.commerce.productName()}
          price={parseInt(faker.commerce.price())}
          rating={Math.floor(Math.random() * 5) + 1}
          image={faker.image.image()}
          dep={faker.commerce.department()}
          desc={faker.commerce.productDescription()}
        />
      </div>
      <div className="home__row">
        <Product
          id={faker.random.uuid()}
          title={faker.commerce.productName()}
          price={parseInt(faker.commerce.price())}
          rating={Math.floor(Math.random() * 5) + 1}
          image={faker.image.image()}
          dep={faker.commerce.department()}
          desc={faker.commerce.productDescription()}
        />
      </div>
    </div>
  );
}

export default Home;
