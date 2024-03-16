"use client";

import { getGameById } from "@/app/data/data-utils";
import Styles from "./Game.module.css";

export default function GamePage(props) {
  const params = props.params;
  const game = getGameById(params.id);

  if (!game) {
    return (
      <section className={Styles["not-found"]}>
        <img className={Styles["not-found__img"]} src="/images/error-404.jpg"></img>
        <p>Такой игры не существует 😢</p>
      </section>
    );
  }
  return (
    <main className="main">
      <section className={Styles["game"]}>
        <iframe className={Styles["game__iframe"]} src={game.link}></iframe>
      </section>
      <section className={Styles["about"]}>
        <h2 className={Styles["about__title"]}>{game.title}</h2>
        <div className={Styles["about__content"]}>
          <p className={Styles["about__description"]}>{game.description}</p>
          <div className={Styles["about__author"]}>
            <p>
              Автор:
              <span className={Styles["about__accent"]}>{game.developer}</span>
            </p>
          </div>
        </div>
        <div className={Styles["about__vote"]}>
          <p className={Styles["about__vote-amount"]}>
            За игру уже проголосовали:
            <span className={Styles["about__accent"]}>{game.users.length}</span>
          </p>
          <button className={`button ${Styles["about__vote-button"]}`}>
            Голосовать
          </button>
        </div>
      </section>
    </main>
  );
}
