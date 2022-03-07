import { useQuery } from "@apollo/client";
import { EXCHANGE_RATES } from "../../apollo-wrapper";
import { mockBookData } from "../../api";
import RNavbar from "../NavBar/AppNavBar";
import AboutPage from "../../pages/About";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import AppLayout from "../../pages/AppLayout";
import NotFound from "../../pages/NotFound";
import MenuPage from "../../pages/Menu";
import ContactPage from "../../pages/Contact";
import AdminPage from "../../pages/Admin";
import SignUpForm from "../../pages/Admin/SignupForm";
import HomePage from "../../pages/Home";
function App() {
  /* TODO: re-implement once querying book app endpoint
  // const { data, loading, error } = useQuery(EXCHANGE_RATES);
  // (loading) return <div>Loading...</div>;
  // (error) return <div>Error :(</div>;
  */
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="menu" element={<MenuPage />}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="admin" element={<AdminPage />}>
            <Route path="signup" element={<SignUpForm />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
