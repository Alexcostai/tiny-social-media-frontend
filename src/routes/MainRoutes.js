import { createBrowserRouter } from "react-router-dom";
//project imports
import Home from "src/pages/user/Home";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default mainRoutes;
