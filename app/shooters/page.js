"use client";

import CardsList from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";
const Shooters = () => {
  const shooter = useGetDataByCategory(endpoints.games, "shooter");

  return (
    <main className={"main-inner"}>
      {shooter ? (
        <CardsList id="shooter" title="Шутеры" data={shooter} />
      ) : (
        <Preloader />
      )}
    </main>
  );
};

export default Shooters;
