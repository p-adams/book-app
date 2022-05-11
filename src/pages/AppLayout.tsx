import { Link, Outlet } from "react-router-dom";
import ContactList from "../components/Contact/ContactList";
// import AppNavbar from "../components/NavBar/AppNavBar";
import "./page-layout.css";
function AppLayout() {
  return (
    <div className="page-layout-wrapper">
      <header className="page-header">
        <Link to="/">Contacts App</Link>
        {/* TODO: implement nav bar<AppNavbar
          navElements={[
            {
              label: "Contact List",
              link: { path: "/contacts" },
            },
          ]}
        />*/}
      </header>
      <ContactList />

      <Outlet />
      <footer>footer</footer>
    </div>
  );
}

export default AppLayout;
