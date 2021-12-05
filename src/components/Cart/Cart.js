import styles from "./Cart.module.css";
import { useContext } from 'react';

import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const total = `$${cartCtx.totalAmt.toFixed(2)}`;

  const addItemHandler = item => {
    cartCtx.addItem(item)
  }

  const removeItemHandler = id => {
    cartCtx.removeItem(id)
  }

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem 
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price} 
          amount={item.amount}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  

  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{total.replace('-0.00', '0.00')}</span>
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
