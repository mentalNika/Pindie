import { getGamesByCategory } from "../data/data-utils";
import CardsList from "../components/CardsList/CardsList";

const Shooters = () => {
  const shooter = getGamesByCategory("shooter");

  return (
    <main className={"main-inner"}>
      <CardsList id="shooter" title="Шутеры" data={shooter}/>
    </main>
  );
};

export default Shooters;