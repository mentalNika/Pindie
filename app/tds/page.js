import { endpoints } from "../api/config";
import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import CardsList from "../components/CardsList/CardsList";

const Tds = async () => {
  const tds = await getNormalizedGamesDataByCategory(endpoints.games, "TDS");
  return (
    <main className={"main-inner"}>
      <CardsList id="TDS" title="TDS" data={tds} />
    </main>
  );
};

export default Tds;
