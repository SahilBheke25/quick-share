import HomeContainer from "../Containers/HomeContainer";
import LoginContainer from "../Containers/LoginContainer";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../shared/Layout";
import EquipmentContainer from "../Containers/EquipmentsContainer";
import UserProfileContainer from "../Containers/UserProfileContainer";
import AccountSecurityContainer from "../Containers/AccountSecurityContainer";
import RentedContainer from "../Containers/RentedContainer";
import LenedContainer from "../Containers/LenedContainer";
import ProtectedRoute from "./ProtectedRoute";
import CopyRegisterContainer from "../Containers/CopyRegisterContainer";
import CreateEquipmentContainer from "../Containers/CreateEquipmentContainer";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginContainer/>,
  },
  {
    path: "/register",
    element: <CopyRegisterContainer/>
  },
  {
    element: <ProtectedRoute><Layout/></ProtectedRoute>,
    children: [
      {
        path: "/home",
        element: <HomeContainer />,
      },
      {
        path: "/equipment/:id",
        element: <EquipmentContainer/>,
      },
      {
        path: '/user/:id/user-profile',
        element: <UserProfileContainer/>
      },
      {
        path: '/user/account-security',
        element: <AccountSecurityContainer/>
      },
      {
        path: '/user/rented',
        element: <RentedContainer/>
      },
      {
        path: '/user/lended',
        element: <LenedContainer/>
      },
      {
        path: '/lend',
        element: <CreateEquipmentContainer />
      }
    ],
  },
]);

export default routes;
