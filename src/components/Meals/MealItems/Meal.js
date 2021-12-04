import styles from "./Meal.module.css";

import Card from "../../UI/Card";
import MealForm from "./MealForm";

const Meal = (props) => {
  return (
    <Card className={styles.info__card}>
      <section className={styles.info}>
        <span className={styles.info__title}>{props.name}</span>
        <span className={styles.info__desc}>{props.description}</span>
        <span className={styles.info__price}>${props.price.toFixed(2)}</span>
      </section>
      <MealForm />
    </Card>
  );
};

export default Meal;
