import React from "react";

const Product = ({ product, cartItems, setCartItems }) => {
  const { name, img, price, weight } = product;
  console.log(img);
  return (
    <div className="card w-60 bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-40" src={img} alt="" />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{weight}kg</p>
            <p>{price}/-</p>
          </div>
          <div>
            <button onClick={()=> {setCartItems(cartItems + 1)}}>
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
