import styles from "./CartItem.module.css";
import { useState, useContext } from 'react';

import CartContext from '../../store/cart-context';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const selectedItem = cartCtx.items.find(item => item.id === props.id);
  const [amount, setAmount] = useState(props.amount);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = () => {
    setAmount(amount + 1);
  }

  return (
    <li>
      <div className={styles["cart-item"]}>
        <h2 className={styles.name}>{props.name}</h2>
        <div className={styles.main}>
          <span>{price}</span>
          <span>{`Amt: ${selectedItem.amount + 1}`}</span>
        </div>
      </div>
      <div>
        <button onClick={props.onRemove}>-</button>
        <button onClick={addToCartHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
