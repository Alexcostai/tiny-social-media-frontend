import { createBrowserRouter } from "react-router-dom";
//project imports
import Login from "src/pages/authentication/Login";
import Register from "src/pages/authentication/Register";

const loginRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default loginRoutes;
