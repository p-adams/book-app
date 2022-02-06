import { useQuery } from "@apollo/client";
import { useState } from "react";
import { EXCHANGE_RATES } from "./apollo-wrapper";
import "./App.css";
EXCHANGE_RATES;
function App() {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <article>
          <section>
            <h3>home page</h3>
          </section>
          {data?.rates.map(
            ({ currency, rate }: { currency: string; rate: number }) => (
              <div key={currency}>
                {currency} : {rate}
              </div>
            )
          )}
        </article>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
