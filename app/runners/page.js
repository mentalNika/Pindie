import getGamesByCategory from "../data/data-utils";
import CardsList from "../components/CardsList/CardsList";

const Runners = () => {
  const runner = getGamesByCategory("runner");

  return (
    <main className={"main-inner"}>
      <CardsList id="runner" title="Раннеры" data={runner}/>
    </main>
  );
};

export default Runners;