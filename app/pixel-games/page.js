"use client";

import CardsList from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { useGetDataByCategory } from "../api/api-hooks";
import { Preloader } from "../components/Preloader/Preloader";

const PixelGames = () => {
  const pixelGames = useGetDataByCategory(endpoints.games, "pixel");

  return (
    <main className={"main-inner"}>
      {pixelGames ? (
        <CardsList id="pixel" title="Пиксельные игры" data={pixelGames} />
      ) : (
        <Preloader />
      )}
    </main>
  );
};

export default PixelGames;
