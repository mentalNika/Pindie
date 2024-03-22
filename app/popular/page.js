"use client";

import CardsList from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";

const PopularGames = () => {
  const popularGames = useGetDataByCategory(endpoints.games, "popular");

  return (
    <main className={"main-inner"}>
      {popularGames ? (
        <CardsList id="popular" title="Популярные игры" data={popularGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
};

export default PopularGames;
