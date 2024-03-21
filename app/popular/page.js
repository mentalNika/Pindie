import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import CardsList from "../components/CardsList/CardsList";

const PopularGames = async () => {
  const popularGames = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "popular"
  );

  return (
    <main className={"main-inner"}>
      <CardsList id="popular" title="Популярные" data={popularGames} />
    </main>
  );
};

export default PopularGames;
