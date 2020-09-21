import React from "react";
import { Provider } from "jotai";

import "./App.css";

import FilterInput from "./FilterInput";
import PokemonTable from "./PokemonTable";

function App() {
  return (
    <div className="App">
      <FilterInput />
      <PokemonTable />
    </div>
  );
}

export default () => (
  <Provider>
    <React.Suspense fallback={<div>Loading</div>}>
      <App />
    </React.Suspense>
  </Provider>
);
