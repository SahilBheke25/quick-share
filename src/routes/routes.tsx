import HomeContainer from "../features/home/Container";
import LoginContainer from "../features/Login/Container";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/Layout";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        path: "home",
        element: <HomeContainer />,
      },
      {
        path: "rent",
      },
    ],
  },
]);

export default routes;
