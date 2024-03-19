import Banner from "./components/Banner/Banner";
import CardsList from "./components/CardsList/CardsList";
import Promo from "./components/Promo/Promo";
import { getGamesByCategory } from "./data/data-utils";

export const getData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Ошибка получения данных");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default async function Home() {
  const dataFromUrl = await getData(
    "https://api-code-2.practicum-team.ru/games"
  );
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main className="main">
      <Banner />
      <CardsList
        id={"popular"}
        title={"Популярные"}
        data={popularGames}
      ></CardsList>
      <CardsList id={"new"} title={"Новинки"} data={newGames}></CardsList>
      <Promo />
    </main>
  );
}
