import Styles from "./GameNotFound.css";

const GameNotFound = () => {
  return (
    <section className={Styles["not-found"]}>
      <img
        className={Styles["not-found__img"]}
        src="/images/error-404.jpg"
        alt="Not Found"
      ></img>
      <p>Такой игры не существует 😢</p>
    </section>
  );
};

export default GameNotFound;
