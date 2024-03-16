import { getGamesByCategory } from "../data/data-utils";
import CardsList from "../components/CardsList/CardsList";

const Tds = () => {
  const tds = getGamesByCategory("TDS");

  return (
    <main className={"main-inner"}>
      <CardsList id="TDS" title="TDS" data={tds}/>
    </main>
  );
};

export default Tds;