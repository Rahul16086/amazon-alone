import React from "react";
import "./Home.css";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className={"home"}>
      <img
        className={"home__banner"}
        src={
          "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/" +
          "Tomorrow-war/Launch/1500x600_Hero-Tall_P._CB664225462_.jpg"
        }
        alt={"banner"}
      />
      <div className={"home__row"}>
        <Product
          id={29999}
          title={
            "Mi 11X 5G Celestial Silver 6GB RAM 128GB ROM | SD 870 | DisplayMate A+ rated E4 AMOLED"
          }
          rating={4}
          price={29999}
          image={
            "https://m.media-amazon.com/images/I/81PQCRubagS._AC_UY218_.jpg"
          }
        />
        <Product
          id={12999}
          title={"Kent Suthamaana thanni provider"}
          rating={5}
          price={12999}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/71qh6IqecWL._SX679_.jpg"
          }
        />
      </div>
      <div className={"home__row"}>
        <Product
          id={61999}
          title={
            'Acer Swift 3 14" Full HD IPS Display Ultra Thin and Light Notebook (Intel i5 - 11th Gen/16 GB RAM/512GB SSD/Win10/Intel Iris Xe Graphics/Pure Silver/1.2Kg), SF314-59'
          }
          rating={4}
          price={61999}
          image={
            "https://m.media-amazon.com/images/I/71r2lxwW0PL._AC_UY218_.jpg"
          }
        />
        <Product
          id={31990}
          title={"iQOO 7 5G (Solid Ice Blue, 8GB RAM, 128GB Storage)"}
          rating={4}
          price={31990}
          image={
            "https://m.media-amazon.com/images/I/41PJh8jEs9S._AC_SY200_.jpg"
          }
        />
        <Product
          id={208052}
          title={
            "Sony Bravia 189 cm (75 inches) 4K Ultra HD Smart LED Google TV 75X80J"
          }
          rating={4}
          price={208052}
          image={
            "https://m.media-amazon.com/images/I/51P7PEoLAsS._AC_SY200_.jpg"
          }
        />
      </div>
      <div className={"home__row"}>
        <Product
          id={34788}
          title={
            "Intel RealSense Depth Camera D455 with IMU Upto 1080P (USB Type-C Port)"
          }
          rating={4}
          price={34788}
          image={
            "https://images-na.ssl-images-amazon.com/images/I/319Pkht6aRL.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Home;
