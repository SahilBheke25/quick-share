import HomeContainer from "../features/home/Container";
import LoginContainer from "../features/Login/Container";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/Layout";

const routes = createBrowserRouter ([
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomeContainer />,
      },
    ],
  }
]);

export default routes;

