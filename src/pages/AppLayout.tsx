import { Link, Outlet } from "react-router-dom";
import RNavbar from "../components/RNavBar/RNavBar";
import "./page-layout.css";
function AppLayout() {
  return (
    <div className="page-layout-wrapper">
      <header className="page-header">
        {/** if isAdmin show Admin label next to title */}
        <Link to="/">Restaurant App</Link>
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
      </header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default AppLayout;
