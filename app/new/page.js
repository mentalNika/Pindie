import { getGamesByCategory } from "../data/data-utils";
import CardsList from "../components/CardsList/CardsList";

const New = () => {
  const newGames = getGamesByCategory("new");

  return (
    <main className={"main-inner"}>
      <CardsList id="new" title="Новинки" data={newGames}/>
    </main>
  );
};

export default New;