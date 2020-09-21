import React from "react";
import { useAtom } from "jotai";

import { filterAtom } from "./atoms";

export default function FilterInput() {
  const [filter, filterSet] = useAtom(filterAtom);

  return (
    <input value={filter} onChange={(evt) => filterSet(evt.target.value)} />
  );
}
