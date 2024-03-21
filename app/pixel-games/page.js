import CardsList from "../components/CardsList/CardsList";
import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";

const PixelGames = async () => {
  const pixelGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "pixel"
  );

  return (
    <main className={"main-inner"}>
      <CardsList id="pixel" title="Пиксельные игры" data={pixelGames} />
    </main>
  );
};

export default PixelGames;
