import React from "react";
import { useAtom } from "jotai";

import { filteredPokemonAtom } from "./atoms";

export default function PokemonTable() {
  const [filtered] = useAtom(filteredPokemonAtom);
  return (
    <table width="100%">
      <tbody>
        {filtered.map((p) => (
          <tr key={p.id}>
            <td>{p.name.english}</td>
            <td>{p.type.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
