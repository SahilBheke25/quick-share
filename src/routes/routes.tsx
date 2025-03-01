import HomeContainer from "../Components/HomeComponent";
import LoginContainer from "../Containers/LoginContainer";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/Layout";
import EquipmentContainer from "../Containers/EquipmentContainer";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginContainer />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeContainer />,
      },
      {
        path: "/equipment",
        element: <EquipmentContainer />,
      },
    ],
  },
]);

export default routes;
