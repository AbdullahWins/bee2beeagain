import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState();
  const [sortMethod, setSortMethod] = useState("products");

  //get all products
  useEffect(() => {
    const url = `https://bee2beeserver.vercel.app/${sortMethod}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [sortMethod]);

  return (
    <div className="mx-10">
      <hr />
      <div className="navbar bg-base-100 flex">
        <div className="flex-1">
          <p className="text-2xl font-bold">1406 stores</p>
        </div>
        <div className="flex-none">
          <ul className="menu menu-vertical md:menu-horizontal p-0">
            <li>
              <button>Relevence</button>
            </li>

            <li>
              <button
                onClick={() => {
                  setSortMethod("rating");
                }}
              >
                Rating
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  setSortMethod("time");
                }}
              >
                Delivery Time
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  setSortMethod("high");
                }}
              >
                Cost: High To Low
              </button>
            </li>

            <li>
              <button
                onClick={() => {
                  setSortMethod("low");
                }}
              >
                Cost: High To Low
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <section className="flex flex-col lg:flex-row gap-3 items-center justify-center py-6">
        {products?.map((product) => (
          <Product
            key={product._id}
            product={product}
            setCartItems={setCartItems}
            cartItems={cartItems}
          ></Product>
        ))}
      </section>
    </div>
  );
};

export default Products;
