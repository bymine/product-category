import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import Menu from "../menu/Menu";
import "./layout.scss";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
