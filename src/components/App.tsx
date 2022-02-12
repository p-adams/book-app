import { useQuery } from "@apollo/client";
import { EXCHANGE_RATES } from "../apollo-wrapper";
import { mockRestaurantData } from "../api";
import RNavbar from "./RNavBar";
import AboutPage from "../pages/About";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return (
    <div className="App">
      <main>
        <article>
          <header className="app-header">
            <Link to="/">Restaurant App</Link>
          </header>
          <RNavbar
            navElements={[
              { label: "About", link: { path: "/about" } },
              {
                label: "Menu",
                link: { href: "https://github.com/p-adams" },
              },
              {
                label: "Contact",
                link: { href: "https://github.com/p-adams" },
              },
            ]}
          />
          <section>
            {mockRestaurantData().restaurants.map((restaurant) => {
              return <div key={restaurant.id}>{restaurant.name}</div>;
            })}
          </section>
        </article>
      </main>
      <footer></footer>
      <Routes>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
}
// TODO: implement app layout template component
// similar to https://stackblitz.com/github/remix-run/react-router/tree/main/examples/basic?file=src%2FApp.tsx
function AppLayout() {}

export default App;
