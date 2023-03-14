import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainHeader from "src/components/MainHeader";
//project imports
import Home from "src/pages/user/Home";

const mainRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainHeader />}>
      <Route index element={<Home />} />
    </Route>
  )
);

export default mainRoutes;
