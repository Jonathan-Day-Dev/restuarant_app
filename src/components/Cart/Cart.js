import styles from "./Cart.module.css";
import { useContext } from 'react';

import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const total = `$${cartCtx.totalAmt.toFixed(2)}`;

  const addItemHandler = () => {
    console.log('Add')
  }

  const removeItemHandler = () => {
    console.log('Remove')
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        // <li key={item.id}>{item.name} ${item.price}</li>
        <CartItem 
          key={item.id} 
          name={item.name}
          description={item.description}
          price={item.price} 
          amount={item.amount}
          onAdd={addItemHandler}
          onRemove={removeItemHandler}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["btn--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={styles.btn} disabled={cartCtx.items.length < 1}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
