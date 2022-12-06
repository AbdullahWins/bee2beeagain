import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthProvider";
import logup from "../../assets/background/loginup.png";
import logdn from "../../assets/background/logdown.png";
import logo from "../../assets/logo/logob2b.png";

const Login = () => {
  const { loginUserEmail, providerLogin } = useContext(AuthContext);

  const errorToast = (error) => toast(`${error}`);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        navigate(from, { replace: true });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };

  const handleFacebookLogin = () => {
    providerLogin(facebookProvider)
      .then((result) => {
        navigate(from, { replace: true });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        errorToast(error.message);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form?.email?.value;
    const password = form?.password?.value;
    if (email === "" || password === "") {
      return errorToast("enter login credentials!");
    }
    email &&
      password &&
      loginUserEmail(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          form.reset();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          errorToast(error.message);
        });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${logup}), url(${logdn})`,
        backgroundPosition: "top, bottom",
      }}
      className="flex w-full h-full bg-white justify-start items-start bg-no-repeat bg-top bg-contain rounded-xl mr-0"
    >
      <div className="relative">
        <div className=" px-6 m-auto max-w-xl">
          <div className="flex gap-2 items-center p-6">
            <div className="w-12">
              <img src={logo} alt="b2b logo" />
            </div>
            <p className=" text-sm font-semibold">
              BEE <br />2 <br />
              BEE
            </p>
          </div>
          <form onSubmit={handleLogin} className="mt-1">
            <p className="font-semibold m-0">Welcome back!</p>
            <p className="mb-2 text-xs">Log in to continue</p>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <input
                  type="checkbox"
                  className="checkbox checkbox-warning checkbox-sm"
                />
                <span className="text-sm mx-2">Remember me</span>
              </div>
              <a href="/reset" className="text-xs text-red-600 hover:underline">
                Forget Password?
              </a>
            </div>
            <p className="text-xs font-semibold my-2">
              By continuing you agree to our
              <span className="text-red-600">
                Terms of Service and Privacy Policy
              </span>
            </p>
            <div className="mt-2 flex items-center justify-center">
              <button
                type="submit"
                className="w-2/3 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-400 rounded-full hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="relative flex items-center justify-center w-full my-4 border border-t">
            <div className="absolute px-4 py-0 bg-white">Or</div>
          </div>
          <div className="my-2 flex flex-col items-center justify-center gap-2">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center py-1 my-2 w-3/4 border border-gray-600 rounded-full hover:ring-2 hover:ring-offset-1"
            >
              Log in with Google
            </button>

            <button
              onClick={handleFacebookLogin}
              className="flex items-center justify-center py-1 w-3/4 border border-gray-600 rounded-full hover:ring-2 hover:ring-offset-1"
            >
              Log in with Facebook
            </button>
          </div>

          <div className="text-sm font-light text-center text-gray-700 pb-6">
            <p>
              Forgot your login details?
              <Link to="/reset" className="font-medium hover:underline">
                Get help logging in
              </Link>
            </p>
            <p>
              Don't have an account?
              <Link to="/register" className="font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <>
        <ToastContainer />
      </>
    </div>
  );
};

export default Login;
