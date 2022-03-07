import { Link, Outlet } from "react-router-dom";
import RNavbar from "../components/NavBar/AppNavBar";
import "./page-layout.css";
function AppLayout() {
  return (
    <div className="page-layout-wrapper">
      <header className="page-header">
        {/** if isAdmin show Admin label next to title */}
        <Link to="/">Books App</Link>
        <RNavbar
          navElements={[
            {
              label: "Books",
              link: { path: "/books" },
            },
            { label: "About", link: { path: "/about" } },

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
