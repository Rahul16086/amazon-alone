import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "../Product/Product";
import Loading from "../../Loading/Loading";

const Home = () => {
  const [items, setItems] = useState("");
  const [loading, setLoading] = useState(false);
  let ratedItems = [];

  useEffect(() => {
    setLoading(true);
    const url = "https://fakestoreapi.com/products?limit=21";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        for (const item in items) {
          let rating = Math.floor(Math.random() * (1 + 5 - 1) + 1);
          ratedItems.push({
            title: items[item].title,
            id: items[item].id,
            price: items[item].price,
            image: items[item].image,
            rating: rating,
          });
        }
        setItems(ratedItems);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {items?.length > 0 && (
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
            {items?.map((item) => {
              return (
                <Product
                  id={item.id}
                  title={item.title}
                  price={item.price * 100}
                  image={item.image}
                  rating={item.rating}
                  key={Math.floor(Math.random() * 100000)}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
