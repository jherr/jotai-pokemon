import { atom } from "jotai";

const URL =
  "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";

export const pokemonAtom = atom(async () =>
  fetch(URL).then((resp) => resp.json())
);
export const filterAtom = atom("");
export const filteredPokemonAtom = atom((get) =>
  get(pokemonAtom).filter((p) =>
    p.name.english.toLowerCase().includes(get(filterAtom).toLowerCase())
  )
);
