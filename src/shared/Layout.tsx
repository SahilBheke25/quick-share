import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Navbar from "./Navbar/NavBar";
import "./layout.css";

const Layout = () => {
  const [expanded, setExpanded] = useState(true); // Manage navbar state

  return (
    <div>
      <Header />
      <div className="main">
        <Navbar expanded={expanded} setExpanded={setExpanded} />
        <div className={`content ${expanded ? "" : "collapsed"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
