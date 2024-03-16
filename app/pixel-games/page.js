import { getGamesByCategory } from "../data/data-utils";
import CardsList from "../components/CardsList/CardsList";

const PixelGames = () => {
  const pixelGames = getGamesByCategory("pixel");

  return (
    <main className={"main-inner"}>
      <CardsList id="pixel" title="Пиксельные игры" data={pixelGames}/>
    </main>
  );
};

export default PixelGames;