import { Outlet } from "react-router-dom";
import Header from "./Header/HeaderComponent";
import SideBar from "./SideBar/SideBarComponent";
import "../shared/styles/normalize.css";
import "../shared/styles/homeSytle.css";

const Layout = () => {

  return (
    <>
      <Header />
      <main className="flex justify-center">
        <div className="main flex">
          <SideBar />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
