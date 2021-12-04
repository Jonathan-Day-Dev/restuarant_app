import styles from "./Meal.module.css";

import Card from "../UI/Card";

const Meal = (props) => {
  return (
    <Card>
      <section className={styles.info}>
        <span className={styles.info__title}>{props.name}</span>
        <span className={styles.info__desc}>{props.description}</span>
        <span className={styles.info__price}>${props.price}</span>
      </section>
    </Card>
  );
};

export default Meal;
