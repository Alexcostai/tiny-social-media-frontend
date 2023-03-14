import React from "react";
import { RouterProvider } from "react-router-dom";
//project imports
import mainRoutes from "./MainRoutes";
import loginRoutes from "./LoginRoutes";

const Routes = () => {
  return <RouterProvider router={false ? loginRoutes : mainRoutes} />;
};

export default Routes;
