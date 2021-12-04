import styles from "./Meal.module.css";
import { useContext } from 'react';

import CartContext from "../../../store/cart-context";

import Card from "../../UI/Card";
import MealForm from "./MealForm";

const Meal = (props) => {
  const cartContext = useContext(CartContext);
  const price = props.price.toFixed(2);

  const addToCartHandler = amount => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <Card className={styles.info__card}>
      <section className={styles.info} quantity={props.amount}>
        <span className={styles.info__title}>{props.name}</span>
        <span className={styles.info__desc}>{props.description}</span>
        <span className={styles.info__price}>${price}</span>
      </section>
      <MealForm 
        id={props.id} 
        onAddToCart={addToCartHandler}
      />
    </Card>
  );
};

export default Meal;
