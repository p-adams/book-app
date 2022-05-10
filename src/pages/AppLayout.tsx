import { Link, Outlet } from "react-router-dom";
import AppNavbar from "../components/NavBar/AppNavBar";
import "./page-layout.css";
function AppLayout() {
  return (
    <div className="page-layout-wrapper">
      <header className="page-header">
        <Link to="/">Contacts App</Link>
      </header>
      <AppNavbar
        navElements={[
          {
            label: "Contact List",
            link: { path: "/contacts" },
          },
        ]}
      />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default AppLayout;
