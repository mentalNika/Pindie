"use client";

import CardsList from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";

const Runners = () => {
  const runner = useGetDataByCategory(endpoints.games, "runner");

  return (
    <main className={"main-inner"}>
      {runner ? (
        <CardsList id="runner" title="Раннеры" data={runner} />
      ) : (
        <Preloader />
      )}
    </main>
  );
};

export default Runners;
