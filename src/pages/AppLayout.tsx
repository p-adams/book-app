import { Link, Outlet } from "react-router-dom";
import RNavbar from "../components/RNavBar/RNavBar";

function AppLayout() {
  return (
    <div>
      <header>
        <Link to="/">Restaurant App</Link>
      </header>
      <RNavbar
        navElements={[
          { label: "About", link: { path: "/about" } },
          {
            label: "Menu",
            link: { path: "/menu" },
          },
          {
            label: "Contact",
            link: { path: "/contact" },
          },
          {
            label: "Admin",
            link: { path: "/admin" },
          },
        ]}
      />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default AppLayout;
