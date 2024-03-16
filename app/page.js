import "./globals.css";
import Banner from "./components/Banner/Banner";
import CardsList from "./components/CardsList/CardsList";
import Promo from "./components/Promo/Promo";
import { getGamesByCategory } from "./data/data-utils";

const popularGames = getGamesByCategory("popular")
const newGames = getGamesByCategory("new")

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <CardsList id={"popular"} title={"Популярные"} data={popularGames}></CardsList>
      <CardsList id={"new"} title={"Новинки"} data={newGames}></CardsList>
      <Promo />
    </main>
  );
}
