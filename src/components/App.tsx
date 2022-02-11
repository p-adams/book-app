import { useQuery } from "@apollo/client";
import { EXCHANGE_RATES } from "../apollo-wrapper";
import { mockRestaurantData } from "../api";
import RNavbar from "./RNavBar";
import "./App.css";
function App() {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <article>
          <header>Restaurant App</header>
          <RNavbar
            navElements={[
              { label: "About", link: { href: "https://github.com/p-adams" } },
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
    </div>
  );
}

export default App;