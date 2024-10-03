import { Outlet } from "react-router-dom";
import NavbarApp from "./NavbarApp";

function Layout() {
  return (
    <>
      <NavbarApp />
      <Outlet />
    </>
  );
}

export default Layout;
