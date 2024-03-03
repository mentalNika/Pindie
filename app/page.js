import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import Banner from "./components/Banner/Banner";
import CardsList from "./components/CardsList/CardsList";
import PopularCardsFragment from "./components/CardsList/PopularCardsFragment";
import NewCardsFragment from "./components/CardsList/NewCardsFragment";
import Promo from "./components/Promo/Promo";

export default function Home() {
  return (
    <main className="main">
      <Banner />
      <CardsList id={"popular"} title={"Популярные"}>
        <PopularCardsFragment />
      </CardsList>

      <CardsList>
        <NewCardsFragment id={"new"} title={"Новые"} />
      </CardsList>
      <Promo />
    </main>
  );
}
