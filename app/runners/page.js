import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import CardsList from "../components/CardsList/CardsList";

const Runners = async () => {
  const runner = await getNormalizedGamesDataByCategory(
    endpoints.games,
    "runner"
  );

  return (
    <main className={"main-inner"}>
      <CardsList id="runner" title="Раннеры" data={runner} />
    </main>
  );
};

export default Runners;
