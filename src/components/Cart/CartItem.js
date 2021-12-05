import styles from "./CartItem.module.css";
import { useContext } from 'react';

import CartContext from '../../store/cart-context';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const selectedItem = cartCtx.items.find(item => item.id === props.id);
  console.log(selectedItem)
  const price = `$${props.price.toFixed(2)}`;

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
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
