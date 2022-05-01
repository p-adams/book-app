import { useQuery } from "@apollo/client";
import { EXCHANGE_RATES } from "../../apollo-wrapper";
import { mockContactListData } from "../../api";
import Navbar from "../NavBar/AppNavBar";

import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import AppLayout from "../../pages/AppLayout";
import NotFound from "../../pages/NotFound";
import ContactsListPage from "../../pages/ContactsList";
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
          <Route path="contacts" element={<ContactsListPage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
