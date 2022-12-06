import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";

function App() {
  const Router = routes;
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
