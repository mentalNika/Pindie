import { getGamesByCategory } from "../data/data-utils";
import CardsList from "../components/CardsList/CardsList";

const PopularGames = () => {
  const popularGames = getGamesByCategory("popular");

  return (
    <main className={"main-inner"}>
      <CardsList id="popular" title="Популярные" data={popularGames}/>
    </main>
  );
};

export default PopularGames;