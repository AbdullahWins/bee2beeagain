import React from "react";
import home1 from "../../../assets/images/home1.png";
import home2 from "../../../assets/images/home2.png";
import home3 from "../../../assets/images/home3.png";
import bg from "../../../assets/background/homebg.png";

const Features = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="bg-no-repeat bg-bottom bg-cover py-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-around">
        <section>
          <div className="card w-96">
            <figure>
              <img className="w-96" src={home1} alt="" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">No Minimum Order</h2>
              <p>
                Order in for yourself or for the group, with no restrictions on
                order value.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="card w-96">
            <figure>
              <img className="w-96" src={home2} alt="" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">Live Order Tracking</h2>
              <p>
                Know where your order is at all times, from the resturant to
                your doorstep.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="card w-96">
            <figure>
              <img className="w-96 h-96" src={home3} alt="" />
            </figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-bold">Lightning-Fast Delivery</h2>
              <p>
                Experience Bee2Bee's superfast delivery for food delivered fresh
                & on time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
