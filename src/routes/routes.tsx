import HomeContainer from "../Components/HomeComponent";
import LoginContainer from "../Containers/LoginContainer";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/Layout";
import EquipmentContainer from "../Containers/EquipmentsContainer";
import UserProfileContainer from "../Containers/UserProfileContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginContainer />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <HomeContainer />,
      },
      {
        path: "/equipment/:id",
        element: <EquipmentContainer />,
      },
      {
        path: 'user/user-profile',
        element: <UserProfileContainer />
      }
    ],
  },
]);

export default routes;
