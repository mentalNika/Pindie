"use client";

import CardsList from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
const Tds = () => {
  const tds = useGetDataByCategory(endpoints.games, "TDS");

  return (
    <main className={"main-inner"}>
      {tds ? <CardsList id="TDS" title="tds" data={tds} /> : <Preloader />}
    </main>
  );
};
export default Tds;
