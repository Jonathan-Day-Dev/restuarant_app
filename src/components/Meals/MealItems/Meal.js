import styles from "./Meal.module.css";

import Card from "../../UI/Card";
import MealForm from "./MealForm";

const Meal = (props) => {
  const price = props.price.toFixed(2);

  return (
    <Card className={styles.info__card}>
      <section className={styles.info} quantity={props.quantity}>
        <span className={styles.info__title}>{props.name}</span>
        <span className={styles.info__desc}>{props.description}</span>
        <span className={styles.info__price}>${price}</span>
      </section>
      <MealForm id={props.id} />
    </Card>
  );
};

export default Meal;
