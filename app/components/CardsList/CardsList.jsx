import Styles from "./CardsList.module.css";

const CardsList = (props) => {
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles["cards-list"]}>{props.children}</ul>
    </section>
  );
};

export default CardsList;
