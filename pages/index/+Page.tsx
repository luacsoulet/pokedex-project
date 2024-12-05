import React from "react";
import type { Data } from "./+data";
import { useData } from "vike-react/useData";
import { Gallery } from "../../components/Gallery";

export default function Page() {
  const data = useData<Data>();
  return (
    <div>
      <h1>Pokédex</h1>
      <Gallery data={data} />
    </div>
  );
}
