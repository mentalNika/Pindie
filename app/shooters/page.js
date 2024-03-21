import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import CardsList from "../components/CardsList/CardsList";

const Shooters = async () => {
  const shooter = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "shooter"
  );

  return (
    <main className={"main-inner"}>
      <CardsList id="shooter" title="Шутеры" data={shooter} />
    </main>
  );
};

export default Shooters;
