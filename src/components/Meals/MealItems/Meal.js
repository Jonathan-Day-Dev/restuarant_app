import styles from "./Meal.module.css";
import { useContext, useState } from 'react';

import CartContext from "../../../store/cart-context";

import Card from "../../UI/Card";
import MealForm from "./MealForm";

const Meal = (props) => {
  const [quantity, setQuantity] = useState(0)
  const cartContext = useContext(CartContext);
  const price = props.price.toFixed(2);

  const addToCartHandler = amount => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
    setQuantity(cartContext.items.filter(item => item.name === props.name).length + 1);
  }

  return (
    <Card className={styles.info__card}>
      <section className={styles.info}>
        <span className={styles.info__title}>{props.name}</span>
        <span className={styles.info__desc}>{props.description}</span>
        <span className={styles.info__price}>${price}</span>
      </section>
      <MealForm 
        id={props.id}
        quantity={quantity}
        onAddToCart={addToCartHandler}
      />
    </Card>
  );
};

export default Meal;
