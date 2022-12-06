import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import Login from "../Login/Login";
import Products from "../Products/Products";
import NavBar from "../Shared/NavBar/NavBar";
import Banner from "./Banner/Banner";
import Features from "./Features/Features";

const Home = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState(0);

  return (
    <div>
      <div className="drawer drawer-end">
        <input id="login-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <NavBar cartItems={cartItems}></NavBar>
          <div>
            <Banner></Banner>
          </div>
          {!user ? (
            <Features></Features>
          ) : (
            <Products
              cartItems={cartItems}
              setCartItems={setCartItems}
            ></Products>
          )}
        </div>
        <div className="drawer-side">
          <label htmlFor="login-drawer" className="drawer-overlay"></label>
          <div className="p-6 lg:-mr-8 lg:w-1/2">
            <Login></Login>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
